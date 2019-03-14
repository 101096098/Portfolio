import React from 'react';

import { Switch, Route} from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Homppage from './homepage';
import CoverLetter from './coverLetter';
import { homedir } from 'os';
import Homepage from './homepage';

const Main = () =>(
    <Switch>
        <Route exact path = "/" component = { Homepage }/>
        <Route path ="/home" component = {Homepage}/>
        <Route path = "/cover" component = { CoverLetter }/>
        <Route path = "/about" component = { About }/>
        <Route path = "/contact" component = { Contact }/>
        <Route path = "/projects" component = { Projects }/>
        <Route path = "/resume" component = { Resume }/>

    </Switch>
)
export default Main