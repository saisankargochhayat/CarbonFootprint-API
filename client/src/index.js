import React from 'react';
// import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Header from './components/Header/Header';
import Body from "./components/Body/Body";
import Visuals from "./components/Visuals/Visuals";
import Graph from "./components/Graph/Graph";
import NotFound from "./components/NotFound/NotFound";

export default class App extends React.Component {
    render() {
        return (
            <Router>
            <div style={styles.app}>
                <Header />
                <Body>
                <Switch>
                <Route exact path="/" component={Visuals} />
                <Route path="/v/:type" component={Graph} />
                <Route component={NotFound} />
                </Switch>
                </Body>
            </div>
            </Router>
        );
    }
}

const styles = {
    app: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "stretch",
        alignItems: "stretch",
        flexDirection: "column",

    }
};

//ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
