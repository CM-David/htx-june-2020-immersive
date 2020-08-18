import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Puppies from './components/Puppies'


import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>

        <Redirect from="/aboutus" to="/"/>
        <Route path="/aboutus" component={AboutUs}/>
        <Route exact path="/blogs" component={Blogs}/>
        <Route path="/blogs/:blogsID" component={Blogs}/>

        <Route path="/contact" component={Contact}/>
        <Route path="/puppies" component={Puppies}/>


      <Route component={App}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root')
);



