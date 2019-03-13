import React from 'react';

import { Switch, Route} from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Homppage from './homepage';
import CoverLetter from './coverLetter';

const Main = () =>(
    <Switch>
        <Route exact path = "/" component = { Homppage }/>
        <Route path = "/cover" component = { CoverLetter }/>
        <Route path = "/about" component = { About }/>
        <Route path = "/contact" component = { Contact }/>
        <Route path = "/projects" component = { Projects }/>
        <Route path = "/resume" component = { Resume }/>

    </Switch>
)
export default Main