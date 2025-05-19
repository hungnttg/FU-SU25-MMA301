import React from "react";
import { Text,View,TouchableOpacity,StyleSheet } from "react-native";
export default class Slot3_1 extends React.Component {
    //code----------------
    constructor(){
        super();
        //khai bao cac hang so
        this.operations = ['DEL','+','-','*','/'];
        //cac trang thai
        this.state = {
            resultText: "",//bien luu ket qua
            calculationText: "",//bien luu bieu thuc
        }
    }
    //cac ham tu dinh nghia
    //1. xu ly khi nhan cac button
    pressButton(text){
        if(text=== "="){
            return this.calculationResult(this.state.resultText);
        } 
        else if (text === "DEL"){
            this.operate('DEL');//goi ham xu ly phim DEL
        }
        else {
            this.setState({
                resultText: this.state.resultText + text, //them text cua button vua press
            });
        }
    };
    //2. ham tinh gia tri cua bieu thuc
    calculationResult(text){
        this.setState({
            calculationText: eval(text),//tinh gia tri bieu thuc
        });
    };
    //3. ham xu ly phep tinh
    operate(o){
        switch(o){
            case 'DEL':
                let text = this.state.resultText.split('');//pha vo chuoi thanh mangh
                text.pop();//xoa bo thanh phan cuoi cung
                this.setState({
                    resultText: text.join(''),//join lai thanh chuoi
                });
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.setState({
                    resultText: this.state.resultText+o,//noi them cac phep tinh
                });
                break;
        }
    };
    //layout----------------
    render(){
        return(
            <View style={styles.container}>
                {/* view hien thi ket qua */}
                <View style={styles.result}>
                    <Text style={styles.title}>{this.state.resultText}</Text>
                </View>
                {/* view hien thi bieu thuc */}
                <View style={styles.calculation}>
                    <Text style={styles.title}>{this.state.calculationText}</Text>
                </View>
                {/* view hien thi cac buttons */}
                <View style={styles.buttons}>
                    {/* view number1 */}
                    <View style={styles.number1}>
                        <TouchableOpacity style={styles.btn} key={1} onPress={()=>this.pressButton(1)}><Text>1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={4} onPress={()=>this.pressButton(4)}><Text>4</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={7} onPress={()=>this.pressButton(7)}><Text>7</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'.'} onPress={()=>this.pressButton('.')}><Text>.</Text></TouchableOpacity>
                    </View>
                    {/* view number2 */}
                    <View style={styles.number2}>
                        <TouchableOpacity style={styles.btn} key={2} onPress={()=>this.pressButton(2)}><Text>2</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={5} onPress={()=>this.pressButton(5)}><Text>5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={8} onPress={()=>this.pressButton(8)}><Text>8</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={0} onPress={()=>this.pressButton(0)}><Text>0</Text></TouchableOpacity>
                    </View>
                    {/* view number3 */}
                    <View style={styles.number3}>
                        <TouchableOpacity style={styles.btn} key={3} onPress={()=>this.pressButton(3)}><Text>3</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={6} onPress={()=>this.pressButton(6)}><Text>6</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={9} onPress={()=>this.pressButton(9)}><Text>9</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'='} onPress={()=>this.pressButton('=')}><Text>=</Text></TouchableOpacity>
                    </View>
                    {/* view operations */}
                    <View style={styles.operations}>
                        <TouchableOpacity style={styles.btn} key={'+'} onPress={()=>this.pressButton('+')}><Text>+</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'-'} onPress={()=>this.pressButton('-')}><Text>-</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'*'} onPress={()=>this.pressButton('*')}><Text>*</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'/'} onPress={()=>this.pressButton('/')}><Text>/</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} key={'DEL'} onPress={()=>this.pressButton('DEL')}><Text>DEL</Text></TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container :{
        flex:1,
        flexDirection:'column',
    },
    result :{
        flex:1,
        backgroundColor:'green',
        justifyContent:'space-around',
        alignItems:'flex-end',
    },
    calculation:{
        flex:2,
        justifyContent:'space-around',
        alignItems:'flex-end',
        backgroundColor:'orange',
    },
    buttons: {
        flex:7,
        flexDirection:'row',
        backgroundColor:'#AAA'
    },
    // ------------------
    numbers: {
        flex:3,
        flexDirection:'row',
        backgroundColor:'yellow',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
    number1:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'stretch',
        backgroundColor:'#AAA222',
    },
    number2:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'stretch',
        backgroundColor:'#BBB333',
    },
    number3:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'stretch',
        backgroundColor:'#CCC444',
    },
    //--------------------
    operations:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#AAA123',
        justifyContent:'space-around',
        alignItems:'stretch',
    },
    //-----
    btn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    // --- dinh dang hien thi cac text
    title:{
        textAlign:'center',
        fontSize:35,
    },
});
