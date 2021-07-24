import { object } from 'prop-types';
import React from 'react';
import ReactDOM  from 'react-dom';



function fazPost(url, body){
    console.log("Body=",body)
    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
        window.alert("o erro = " + this.responseText)
    }

    return request.responseText
}

function mandavalor(t){
    let url = "https://polar-headland-20103.herokuapp.com/https://teste-ca.herokuapp.com//calc"
    fazPost(url,t)
    
}


class Input extends React.Component{
    constructor(){
        super();
        this.state = {
            variaveis: "",
            valordavariavel:"",
            f:"",
            erro:""
        };
        this.onChange = (evento)=>{
            const state = Object.assign({},this.state);
            const campo = evento.target.name;
            state[campo] = evento.target.value;
            this.setState(state);
        };
        this.onSubmit = (evento)=>{
            evento.preventDefault();
            var t = this.state
            mandavalor(t);
            
        }
    }

    render(){
        return(
        <div>
        <h1>calculadora de erro experimental.</h1>
        <br/>
        <p1>não usar virgula</p1>
        <br/>
        <br/>
        variaveis:<input name="variaveis" value={this.state.evento} onChange={this.onChange} type="text"/>
        <br/>
        <br/>
        valordavariavel:<input name="valordavariavel" value={this.state.evento} onChange={this.onChange} type="text"/> 
        <br/>
        <br/>
        f:<input name="f" value={this.state.evento} onChange={this.onChange} type="text"/> 
        <br/>
        <br/>
        erro:<input name="erro" value={this.state.evento} onChange={this.onChange} type="text"/>
        <br/>
        <br/>
        <button onClick = {this.onSubmit}>enviar</button>
        </div>
        
        )
    }
}











export default Input