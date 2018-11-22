import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import Dummy from './dummy/Dummy';
import Generate from './generate-portfolio/generate-portfolio';

const routes = (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/dummy' component={Dummy} />
      <Route exact path='/generate' component={Generate} />
    </div>
);

export default routes;
