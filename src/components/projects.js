import React, { Component } from 'react'
import { Tab, Tabs,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton,CardText } from 'react-mdl'


class Projects extends Component{

    constructor(props){
        super(props);
        this.state={ acticeTab: 0 };
    }

    toggleCategories(){

        if(this.state.acticeTab === 0){
                return(
                    // <div>
                    //     <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    //     <CardTitle style={{color:'#fff', height: '176px', background:
                    //     'ulr(https://tse2.mm.bing.net/th?id=OIP.Gl4guv6n8rELcGpl8fTx3QHaHa&pid=15.1&P=0&w=300&h=300) center/cover'}}>
                    //         Game - FullStack
                    //     </CardTitle>
                    //     <CardText> 
                    //     Game Assignment - Term 05
                    //     </CardText>
                    //     <CardActions border>
                    //         <Button colored>GitHub</Button>
                    //     </CardActions>
                    //     <CardMenu style ={{ color: '#fff'}}>
                    //         <IconButton name = "share" />
                    //     </CardMenu> 
                    //     </Card>
                    // </div>

                    <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                      <CardTitle style={{color: '#fff', height: '300px', 
                      background: 'url(https://tse2.mm.bing.net/th?id=OIP.Gl4guv6n8rELcGpl8fTx3QHaHa&pid=15.1&P=0&w=300&h=300) center / cover'}} >
                      </CardTitle>
                      <CardText>
                       Full STack Assignment - Game App
                      </CardText>
                      <CardActions border>
                        <Button colored>GitHub</Button>
                      </CardActions>
                      <CardMenu style={{color: 'black'}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                      <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
                      <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      </CardText>
                      <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>
                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                      <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
                      <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      </CardText>
                      <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                      </CardActions>
                      <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>
                  </div>
                )
            }else if (this.state.acticeTab === 1){
                return(
                    <div>
                    <h1> This is Project 2 </h1>
                </div>
                )
            }else if (this.state.acticeTab === 2){
                return(
                    <div>
                    <h1> This is Project 3 </h1>
                </div>
                )
            }else if(this.state.acticeTab === 3){
                return(
                    <div>
                    <h1> This is Project 4 </h1>
                </div>
                )
        }
    }
    render(){
        return(
            <div className = "category-tabs">
            <Tabs activeTab={this.state.acticeTab} onChange={(tabId) => 
                this.setState({acticeTab: tabId})}ripple>
                <Tab> Proj 1</Tab>
                <Tab> Proj 2</Tab>
                <Tab> Proj 2</Tab>
                <Tab> Proj 3</Tab>
            </Tabs>
            <section className="prrjects-grid">
            <Grid className="projects-grid">
            <Cell col={12}>
            <div className ="content">{this.toggleCategories()}
            </div>
            </Cell>
            </Grid>
            {this.toggleCategories()}
            </section>
            </div>
        )
    }
}

export default Projects;