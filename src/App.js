import React from "react";
import "./App.css";
import History from "./components/History";
import Display from "./components/Display";
import Button from "./components/Button";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display:"",
            history:"",
            textac:"AC",
            textdel:"DEL",
            textequal:"=",
            btnvalues:["AC","DEL","/","7","8","9","×","4","5","6","-","1","2","3","+","00","0",".","="],
            num1: "",
            num2: "",
            operation: null
        }
    }
    onButtonPress = (event)=>{
        this.setState((prevState)=>{return {display:prevState.display+event.target.innerHTML}})
        console.log(this.state.display);
        // if(event.target.innerHTML === "/" || event.target.innerHTML === "+" || event.target.innerHTML === "-" || event.target.innerHTML === "×"){
        //     console.log(event.target.innerHTML); 
        //     this.setState({operation:event.target.innerHTML});
        //     this.setState({history:this.state.display+event.target.innerHTML})
        //     this.setState({display:""});
        // }
        // if(this.state.operation === null){
        //     this.setState({num1: this.state.num1+event.target.innerHTML});
        //     console.log(this.state.num1);
        // }
    }
    evaluate=(event)=>{
        this.setState({operation:event.target.innerText});
        // console.log(this.state.operation);
        this.setState({num1:this.state.display});
        console.log(this.state.num1);
    }
    allClear=()=>{
        this.setState({display:"",num1:"",num2:"",operation:null})
    }
    removeLast=()=>{
        this.setState({display:this.state.display.substring(0,(this.state.display.length-1))})
    }
    equate=()=>{
        this.setState({num2: this.state.display})
        console.log(this.state.num1);
        console.log(this.state.num2);
        try {
            if(this.state.operation === "/"){
                // this.setState({display:(Number(this.state.num1)/Number(this.state.num2))});
                this.setState({display:(this.state.num1+this.state.num2)});
            }
            if(this.state.operation === "-"){
                // this.setState({display:(Number(this.state.num1)-Number(this.state.num2))});
                this.setState({display:(this.state.num1+this.state.num2)});
            }
            if(this.state.operation === "+"){
                // this.setState({display:(Number(this.state.num1)+Number(this.state.num2))});
                this.setState({display:(this.state.num1+this.state.num2)});
            }
            if(this.state.operation === "×"){
                // this.setState({display:(Number(this.state.num1)*Number(this.state.num2))});
                this.setState({display:(this.state.num1+this.state.num2)});
            }
            this.setState({history:""})
        }
        catch {
            this.setState({display:"ERROR"});
        }
    }
    render(){
        return(
            <div className="body">
                <div className="frame">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
                    </style>
                    <History displayhistory={this.state.history}/>
                    <Display displaybvalue={this.state.display}/>

                    <Button id="spanac" text={this.state.textac} onPress={this.allClear}/>
                    <Button text={this.state.textdel} onPress={this.removeLast}/>
                    {/* {this.state.btnvalues.forEach(value =>{
                        <Button text={value} onPress={this.onButtonPressPress}/>
                    })} */} 
                    {/* above loop NOT WORKING */}
                    <Button text={this.state.btnvalues[2]} onPress={this.evaluate} />
                    <Button text={this.state.btnvalues[3]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[4]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[5]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[6]} onPress={this.evaluate}/>
                    <Button text={this.state.btnvalues[7]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[8]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[9]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[10]} onPress={this.evaluate}/>
                    <Button text={this.state.btnvalues[11]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[12]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[13]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[14]} onPress={this.evaluate}/>
                    <Button text={this.state.btnvalues[15]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[16]} onPress={this.onButtonPress}/>
                    <Button text={this.state.btnvalues[17]} onPress={this.onButtonPress}/>
                    <Button text={this.state.textequal} onPress={this.equate}/>
                </div>
            </div>
        )
    }
}

export default App;