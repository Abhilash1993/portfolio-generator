import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import Dummy from './dummy/Dummy';
import Generate from './generate-portfolio/generate-portfolio';
import Template1 from './home/templates/template-1/template-1';
import Template2 from './home/templates/template-2/template-2';
import ModalPopup from './common/components/modal-popup/modalPopup';

const routes = (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      {/* <Route exact path='/dummy' component={ModalPopup} /> */}
      <Route exact path='/generate' component={Generate} />
      <Route exact path='/template-1' component={Template1}/>
      <Route exact path='/template-2' component={Template2}/>
    </div>
);

export default routes;
