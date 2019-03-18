import React, { Component } from 'react'

class About extends Component{
    render(){
        return(
            <div style={{width: '100%',
                backgroundImage: 'url(" + "https://tse2.mm.bing.net/th?id=OIP.Ad4kXo3ObS4DbURW0f4qbwHaEc&pid=15.1&P=0&w=267&h=161" + ")',
                backgroundPosition: 'center',
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat',}}>
            
            <div style={{ width:'65%', 
                margin: 'auto',     
                backgroundColor:'#f0f4c3',
                padding: '25px', }}> 
              <span>
                  <h3>
                    <br />
                <p>My name is Renata Moura and I am the Passionate Project Manager Professional (PMP).</p>
                <br />
                <p> I am also an Engineer and I am just graduating at a Web Development program at George Bwon College.</p>
                <br />
                <p> I am a senior project manager with 10 years of experience in Project Management implementation, and over 22 years
                     in telecommunication field.</p>
                <br />
                <p>  I have worked in a variety of project such as access and transport network implementation 
                    and for companies both large and small.</p>

                <br />
                <p> Most of my projects has been attending external customer. </p>
                <br />
                <p> I am working as a Key Holder at Bath and Body Works, where I am
                    having the chance to develop customer experience. I am alwoays 
                    interested in a challenge, and I am looking for a position as a 
                    Project Manager at IT field.                                      
                 </p>
                 <br />
                 <p>Excellent communication skills in English, Portuguese and Spanish both written and verbal.</p></h3>
              </span>
              </div>
              </div>
        )
    }
}

export default About;