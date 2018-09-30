import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./App.scss";
import Menu from '../../components/menu/Menu';

class App extends React.Component{
    render(){
        return <React.Fragment>
            <Menu subpages={["About", "Portfolio", "Bio", "Contact"]}/>
        </React.Fragment>;
    }
}

export default App;