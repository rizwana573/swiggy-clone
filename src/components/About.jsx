import UserClass from "./UserClass"
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
       // console.log("Parent constructor");
    }
    componentDidMount(){
       //console.log("Parent didMount"); 
    }
    componentDidUpdate(){
   // console.log("Parent didUpdate");
  }
    render(){
    // console.log("Parent render");
         return (
        <>
        <h1>About us</h1>
        <p>Lorem ipsum Lorem ipsum</p>
        <UserClass name={"Rumi"} location={"US"}/>
        <UserClass name={"Raahi"} location={"EU"}/>
        </>
    )
    }
}

// const About = () => {
//     return (
//         <>
//         <h1>About us</h1>
//         <p>Lorem ipsum Lorem ipsum</p>
//         <UserClass name={"Riz"} location={"Hyd"}/>
//         </>
//     )
// }

export default About;