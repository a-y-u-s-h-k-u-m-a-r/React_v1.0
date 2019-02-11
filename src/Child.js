import React,{Component} from 'react';

class  Child extends Component{

 
constructor(){
    super();
    
    console.log("Constructor Child");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate child");
    return true;
  
  }
  componentWillReceiveProps(){
    console.log("componentWillReceiveProps child");
  
  }
  componentWillMount(){
    console.log("componentWillMount Child");
  
  }
  componentDidMount(){
    console.log("componentDidMount Child");
  
  }
  
    render() {
      console.log("render child");
      return (
        <div className="App">
          {this.props.name}
        </div>
      );
    }
  }
        


export default Child;