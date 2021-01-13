import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{
   state={advice:''};

   componentDidMount() {
       console.log("COMPONENT DID MOUNT");
       this.fetchAdvice();
   }
   fetchAdvice =() =>{
       axios.get("https://api.adviceslip.com/advice")
        .then((response) =>{
            console.log(response.data.slip.advice);
            this.setState({advice: response.data.slip.advice})
        });
   }
   
   render()
   {
       return(
           <div className="app">
               <div className="card">
                    <h1 className="heading">{this.state.advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>GIVE ME ADVICE</button>
               </div>
               
           </div>
           
       );

   } 
}
export default App;