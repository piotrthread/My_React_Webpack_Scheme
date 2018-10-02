import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./App.scss";
import PercentWheel from '../percentWheel/PercentWheel.jsx';

class App extends React.Component{
    render(){
        return <React.Fragment>
                <div><PercentWheel percent = {90} text="Photoshop"/></div>
                <div><PercentWheel percent = {85} text="Illustrator"/></div>
                <div><PercentWheel percent = {65} text="3Ds Max"/></div>
                <div><PercentWheel percent = {45} text="Front-End"/></div>
        </React.Fragment>;
    }
}

export default App;