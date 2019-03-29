import React, { Component } from 'react'
import logo from '../images/titles/aboutme.JPG'
class About extends Component{
    render(){
        return(
            <div>
            <div class="grid1">
                <img src={logo} width = "68%"  height= "200px" alt="course"/>
            </div>
            <div>
                <br/><br/>
            </div>
            
            <div style={{ width:'65%', 
                margin: 'auto',     
                backgroundColor:'#f0f4c3',
                padding: '25px', }}> 
              <span>
                  <h3>
                <p> My name is Renata Moura and I am a passionate Project Manager Professional
                     (PMP) since 2012. Graduated in 1996 as an engineer and just graduated at a Web 
                     Development program at George Bwon College.</p>
                <p>Opportunity to acquire new knoledge always makes me accept new challenges. 
                       In order to develop new skils and put into practice the knowledge acquired in this new 
                       course I am looking for a position as a Project Manager at IT field. </p>
                <p> Working as a project manager since 2005 implementing telecommunication network.
                    Many of my projects was implementing transport and access network, for 
                    companies both large and small.</p>
                <p> Working as a Key Holder at Bath and Body Works since 2017, having the chance 
                    to develop customer experience and discover different skills </p>
            
                <p> Excellent communication skills in English, Portuguese and Spanish 
                    both written and verbal.</p> </h3>
              </span>
              </div>
          </div>
        )
    }
}

export default About;