import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Authentication/Login';
import HomePage from './Pages/HomePage';
import Signup from './Authentication/Signup';

class App extends Component {
    state = {
        loading: true
      };

    componentDidMount() {
        // the setTimeout just simulates an async action, after which the component will render the content
        setTimeout(() => this.setState({ loading: false }), 2500);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="login" exact path="/login" component={Login} />
                    <Route name="signup" exact path="/signup" component={Signup} />
                </div>
            </Router>
        )
    }
}
export default App;
