import React, { Component } from 'react'
class About extends Component{
    render(){
        return(
            <div>
            <div className = "grid1">
                <h1> About Me </h1>
            </div>
            <div>
                <br/><br/>
            </div>
            
            <div style={{ width:'65%', 
                margin: 'auto',     
                backgroundColor:'#f0f4c3',
                padding: '25px', }}> 
              <span>
                  <h4>
                  <p> My name is Renata Moura, and I am a passionate, innovative, and self-motivated Project Manager 
                    since 2005, and just graduated at a Web Development program at George Brown College.</p>
                    <p>The program introduced me a variety of programing languages and technologies. </p>
                <p>The opportunity to acquire new knowledge always makes me accept challenges. 
                       In order to develop new skills and put into practice the knowledge acquired in this 
                       course I am looking for a position in a project team at IT field. </p>
                <p> Working as a project manager I have been responsible to implement telecommunication network.
                    Many of my projects was implementing transport and access network, for 
                    companies both large and small.</p>
                <p> Working as a Key Holder at Bath and Body Works since 2017, having the chance 
                    to develop customer experience and discover different skills </p>
            
                <p> Excellent communication skills in English, Portuguese and Spanish 
                    both written and verbal. </p> 
                    <p> As a hobby I like to cook, watch movies and travel around the world</p></h4>

              </span>
              </div>
          </div>
        )
    }
}

export default About;