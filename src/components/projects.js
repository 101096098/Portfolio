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
               
                  <div className="projects-grid">
                
                  {/* Project 1 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#008B8B', height: '300px', 
                    background: 'url(https://tse2.mm.bing.net/th?id=OIP.GmMtKznzJ1dS8sSzxzR3owHaHa&pid=15.1&P=0&w=300&h=300) center / cover'}} >
                    Angular Projects</CardTitle>
                    <CardText>
                      <b>Capstone</b>
                    </CardText>
                    <CardActions border>
                      <Button colored href="https://github.com/franklintrinh367/mean_project" target = "_blank">GitHub</Button>
                      <Button colored href="https://trello.com/b/RX61XDrh/capstone-project">Documents </Button>
                      {/* <Button colored Link to ="/capstonePictures">Pictures </Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#ffff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                  {/* Project 2 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#008B8B', height: '300px', 
                    background: 'url(https://tse2.mm.bing.net/th?id=OIP.GmMtKznzJ1dS8sSzxzR3owHaHa&pid=15.1&P=0&w=300&h=300) center / cover'}} >
                    Angular Projects</CardTitle>
                    <CardText>
                      <b> Game App</b>
                    </CardText>
                    <CardActions border>
                      <Button colored href = "https://github.com/101096098/FullStack-Assignment" target="_blank">GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                </div>
                )
            }else if (this.state.acticeTab === 1){
              return(
               <div className="projects-grid">              
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#008B8B', height: '300px', 
                background: 'url(https://tse3.mm.bing.net/th?id=OIP.FTz1dRPnsfsedgJU1GjNyQHaE8&pid=15.1&P=0&w=279&h=187) center / cover'}} >
                PHP Projects</CardTitle>
                <CardText>
                  <b>4R's - Reduce, Reuse, Recicle, Reward</b>
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/101096098/4Rs-PHP-Project" target = "_blank">GitHub</Button>
                  <Button colored href="https://github.com/101096098/4Rs-PHP-Project/tree/master/public_html/Documents">Documents
                  </Button>
                </CardActions>
                <CardMenu style={{color: 'black'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#008B8B', height: '300px', 
                background: 'url(https://tse3.mm.bing.net/th?id=OIP.FTz1dRPnsfsedgJU1GjNyQHaE8&pid=15.1&P=0&w=279&h=187) center / cover'}} >
                PHP Projects</CardTitle>
                <CardText>
                  <b> Contact Agenda</b>
                </CardText>
                <CardActions border>
                  <Button colored href = "https://github.com/101096098/PHP-Contact-App" target="_blank">GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
              </div>
                )
            }else if (this.state.acticeTab === 2){
                return(
                  <div className="projects-grid">
                
                  {/* Project 1 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#008B8B', height: '300px', 
                    background: 'url(https://tse3.mm.bing.net/th?id=OIP.Tm6TDveFSLzyRm3YiRexJAHaHa&pid=15.1&P=0&w=300&h=300) center / cover'}} >
                    HTML Projects</CardTitle>
                    <CardText>
                      <b>Baking Pizza HTML </b>
                    </CardText>
                    <CardActions border>
                      <Button colored href="https://github.com/101096098/WEB-DEVELOPMENT-FUNDAMENTALS" target = "_blank">GitHub</Button>
                      {/* <Button colored href="https://trello.com/b/RX61XDrh/capstone-project">Documents
                      </Button> */}
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                  {/* Project 2
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#008B8B', height: '300px', 
                    background: 'url(https://tse2.mm.bing.net/th?id=OIP.GmMtKznzJ1dS8sSzxzR3owHaHa&pid=15.1&P=0&w=300&h=300) center / cover'}} >
                    Angular Projects</CardTitle>
                    <CardText>
                      <b> Game App</b>
                    </CardText>
                    <CardActions border>
                      <Button colored href = "https://github.com/101096098/FullStack-Assignment" target="_blank">GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card> */}
                </div>
                )
            }else if(this.state.acticeTab === 3){
                return(
                  <div className="projects-grid">
                
                  {/* Project 1 */}
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#008B8B', height: '300px', 
                    background: 'url(https://tse4.mm.bing.net/th?id=OIP.HdlPYbvGkA7ZogKfwdIKkQHaFS&pid=15.1&P=0&w=240&h=186) center / cover'}} >
                    C# Projects</CardTitle>
                    <CardText>
                      <b>Animal Control</b>
                    </CardText>
                    <CardActions border>
                      <Button colored href="https://github.com/101096098/OBJECT-ORIENTED-PROGRAMMING" target = "_blank">GitHub</Button>
                      {/* <Button colored href="https://trello.com/b/RX61XDrh/capstone-project">Documents
                      </Button> */}
                    </CardActions>
                    <CardMenu style={{color: 'black'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                  {/* Project 2 */}
                  {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#008B8B', height: '300px', 
                    background: 'url(https://tse2.mm.bing.net/th?id=OIP.GmMtKznzJ1dS8sSzxzR3owHaHa&pid=15.1&P=0&w=300&h=300) center / cover'}} >
                    Angular Projects</CardTitle>
                    <CardText>
                      <b> Game App</b>
                    </CardText>
                    <CardActions border>
                      <Button colored href = "https://github.com/101096098/FullStack-Assignment" target="_blank">GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card> */}
                </div>
                )
        }
    }
    render(){
      return(
        <div className = "category-tabs">
        <Tabs activeTab={this.state.acticeTab} onChange={(tabId) => 
            this.setState({acticeTab: tabId})}ripple>
            <Tab> Angular</Tab>
            <Tab> PHP</Tab>
            <Tab> HTML</Tab>
            <Tab> C#</Tab>
        </Tabs>
        <section className="prrjects-grid">
        <Grid className="projects-grid">
        <Cell col={12}>
        <div className ="content">{this.toggleCategories()}
        </div>
        </Cell>
        </Grid>
        </section>
        </div>
      )
    }
  }
export default Projects;
