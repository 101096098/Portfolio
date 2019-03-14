import React, { Component } from 'react';
import { Grid,Cell } from 'react-mdl';
import logo from '../images/mypicture.jpg'


class Homepage extends Component{
    render(){
        return(
            <div style={{with:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                    src = {logo}
                    alt="avatar"
                    className = "avatar-img"
                    />
                <div className = "banner-text">
                    <h1> Project Manager & Web Developer</h1>
                    <hr />

                    <p> Project Management </p>
                    <p> HTML/CSS | Angular | Node JS | Database </p>
                
                    <div className=" social-links">
                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/mourarenata/" rel="noopener noreferrer"  target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        {/* GitHub */}
                        <a href="https://github.com/101096098" rel="noopener noreferrer"  target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                    
                    </div>
                
                </div>
                
                </Cell>

                </Grid>
            </div>
        )
    }
}

export default Homepage;