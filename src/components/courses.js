import React, { Component } from 'react'

class Courses extends Component{
    render(){
        return(

            <div style={{width: '100%', 
            backgroundImage: `url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBiFP6CGas4eUoiyJZGVM0hr495rLR9XBCd5Rh-BSFw6L6fYMo2g" + ")`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',}}>
        
        <div style={{ width:'65%', 
            margin: 'auto', 
            backgroundColor:'#f0f4c3',
            padding: '25px', }}> 
            <span>
                <h4 style={{textAlign:'center'}}><b>  Other Courses: </b></h4>
                <ul>
                    <h5>
                        <li> IT Essencials </li>
                        <br />
                        <li> Situational Leadership – Ericsson </li>
                        <br />
                        <li> Project Finances - Ericsson</li>
                        <br />
                        <li> Risks and Scope/ WBS- Ericsson</li>
                        <br />
                        <li> Processes - Ericsson</li>
                        <br />
                        <li> GPRS Introduction - Ericsson</li>
                        <br />
                        <li> Fibers Optic's Seminary </li>
                        <br />
                        <li> Optics Amplifiers and DWDM Systems – CPQD</li>
                        <br />
                        <li> SDH Introduction / INC100 O&A / DWDM Basic – NEC</li>
                        <br />
                        <li> Basic Commute – Inatel</li>       
                        <br />
                        <li> Data Communications - Senai</li>
                        <br />
                        <li> React.js Essential Training - Lynda.com</li>
                        <br />
                        <li> Strategic Planning Foundations - Lynda.com</li>
                        <br />
                        <li> Executive Leadership - Lynda.com </li>
                        <br />
                        <li> Leading Projects - Lynda.com </li>
                        <br />
                    </h5>
                </ul>
                </span>
                </div>
                </div>
                

        )
    }
}

export default Courses;