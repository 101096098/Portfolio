import React from 'react';

import { Switch, Route} from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import CoverLetter from './coverLetter';
import Homepage from './homepage';
import Courses from './courses';
import CapstonePictures from './capstonePicture';

const Main = () =>(
    <Switch>
        <Route exact path = "/" component = { Homepage }/>
        <Route path ="/home" component = {Homepage}/>
        <Route path = "/cover" component = { CoverLetter }/>
        <Route path = "/about" component = { About }/>
        <Route path = "/contact" component = { Contact }/>
        <Route path = "/projects" component = { Projects }/>
        <Route path = "/courses" component = { Courses } />
        <Route path = "/resume" component = { Resume }/>
        <Route path ="/capstonePictures" componente = {CapstonePictures} />

    </Switch>
)
export default Main