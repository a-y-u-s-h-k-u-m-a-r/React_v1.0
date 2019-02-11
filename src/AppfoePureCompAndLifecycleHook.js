import React, { Component,PureComponent } from 'react';
import './App.css';
import Child from './Child'


const Temp=(props)=>{
  console.log("render Temp ");

    return (<div>India's Goal: {props.name}</div>)
}
class App extends PureComponent {

constructor(){
  super();
  this.state={
      score:1
  } 
  console.log("Constructor");
}
// shouldComponentUpdate(nextProps, nextState){
//   console.log("shouldComponentUpdate ");
// // let retVal=false
// //   if(this.state.score!=1)
// //   retVal= true;
// //return retVal;
// //return( this.state.score===nextState.score? false:true)

  

// }
componentWillReceiveProps(){
  console.log("componentWillReceiveProps");

}
componentWillMount(){
  console.log("componentWillMount");

}
componentDidMount(){
  console.log("componentDidMount");
setInterval(()=>{
 this.setState(()=>{
   return{score:1}
 })
},2000)
}
ChangeState(){
  this.setState({
    name:"Kumar"
  })
}

  render() {
    console.log("render App");
   // return (
   //   <div>
   //     <Child name={this.state.name}/>
   //     <button onClick={this.ChangeState.bind(this)}>Change State</button>
   //     </div>
   //     );
   return(
   <div className="App">
   <Temp name={this.state.score}/>
   </div>
   )  
}
}
export default App;
