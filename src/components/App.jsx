import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';

class App extends React.Component {
    // constructor(props) {
    //  super(props);
    //  this.state={
    //   masterSammyList: []
    //  }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/'/>
                </Switch>
            </div>
        );
    }
}
export default App;
