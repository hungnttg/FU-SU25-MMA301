#xu ly fil pdf, luu vao vector, tim doan lien quan
import os, sys, fitz, chromadb, google.generativeai as genai

PDF_POLDER = sys.argv[1]
QUESTION = sys.argv[2]
API_KEY = sys.argv[3]

#doc PDF
def extract_text_from_pdfs(folder):
    text_all=""
    for f in os.listdir(folder):
        if f.endswith(".pdf"):
            doc = fitz.open(os.path.join(folder,f))
            for page in doc:
                text_all += page.get_text("text")+"\n"
    return text_all
#Tao database
chroma_client=chromadb.Client()
collection = chroma_client.get_or_create_collection("ita101")
if len(collection.get()["ids"]) == 0:
    print("Dang nap du lieu PDF...")
    text = extract_text_from_pdfs(PDF_POLDER)
    chunks = [text[i:i+500] for i in range(0,len(text),500)]
    collection.add(document=chunks, ids=[f"id_{i}" for i in range(len(chunks))])
#tim kiem doan lien quan
results = collection.query(query_texts = [QUESTION],n_results=3)
context = "\n".join(results["documents"][0])
#Goi Gemini
genai.configure(api_key=API_KEY)
model=genai.GenerativeModel("gemini-pro")
prompt=f"Duoi day la tai lieu cua ban: \{context}\n\nCau hoi: {QUESTION}\n\nHay tra loi dua vao tai lieu nay"
response = model.generate_content(prompt)
print(response.text)