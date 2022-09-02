import harvardArt from './data/harvardArt';
import React from 'react';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import NoMatch from './404Page';
import { Route, Switch, useLocation } from 'react-router-dom';

console.log(harvardArt)

function App() {

  return (
        <div className='page-wrapper'>
            
            <GalleryNavigation galleries={harvardArt.records} />
            <Switch>
            <Route exact path="/galleries/:galleryId"> 
                <GalleryView galleries={harvardArt.records}/>
            </Route>
            <Route exact path='/'>
                <h2> Harvard Art Museum </h2>  
                <p> Look, but Don't Touch </p>  
            </Route>
            <Route path=''>
                <NoMatch/>
            </Route>
            </Switch>
            
        </div>
  );
}

export default App;
