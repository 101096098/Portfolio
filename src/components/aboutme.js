import React, { Component } from 'react'

class About extends Component{
    render(){
        return(
            <div style={{width: '100%', backgroundImage: "url(" + "https://wendelltobias.specswebsite.com/wp-content/uploads/2018/07/fundo-branco_117168991-1000x520.jpg" + ")",
            backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
            
            <div style={{ width:'65%', margin: 'auto', backgroundColor:'#f0f4c3', padding: '25px', }}> 
              <span>
               <h4 style={{textAlign:'center'}}><b>   Renata Vieira Moura, PMP</b></h4>          
                <p>1464A Dufferin Street, Toronto M6H 3L2– Ontario – Canada </p>
                <p>  phone:  (647) 575-0922 </p>
                <p> email:  renata.moura45@yahoo.com</p>

              </span>
              </div>
              </div>
        )
    }
}

export default About;