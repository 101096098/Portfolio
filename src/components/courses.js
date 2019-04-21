import React, { Component } from 'react'


class Courses extends Component{
    render(){
        return(
            <div>
            <div className = "grid1">
              

               <h1> Other Courses </h1>
            </div>
            <div>
                <br/><br/>
            </div>
            <div style={{ width:'65%', 
                margin: 'auto', 
                backgroundColor:'#f0f4c3',
                padding: '25px', }}> 
                <span>
                    {/* <h4 style={{textAlign:'center'}}><b>  Other Courses: </b></h4> */}
                    <ul>
                        <h5>
                            <li> IT Essentials - Cisco</li><br />
                            <li> React.js Essential Training - Lynda.com</li> <br />
                            <li> Strategic Planning Foundations - Lynda.com</li> <br />
                            <li> Executive Leadership - Lynda.com </li> <br />
                            <li> Leading Projects - Lynda.com </li> <br />
                            <li> Situational Leadership – Ericsson </li> <br />
                            <li> Project Finances - Ericsson</li> <br />
                            <li> Risks and Scope/ WBS- Ericsson</li> <br />
                            <li> Processes - Ericsson</li> <br />
                            <li> GPRS Introduction - Ericsson</li> <br />
                            <li> Fibers Optic's Seminary </li> <br />
                            <li> Optics Amplifiers and DWDM Systems – CPQD</li> <br />
                            <li> SDH Introduction – NEC</li> <br />
                            <li>  INC100 O&A – NEC</li> <br />
                            <li>  DWDM Basic – NEC</li> <br />
                            <li> Basic Commute – Inatel</li>   <br />
                            <li> Data Communications - Senai</li>
                        </h5>
                    </ul>
                </span>
            </div>
        </div>
    )}
}

export default Courses;