import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./App.scss";

class App extends React.Component{
    render(){
        return <div className={styles.red}>Hello World!</div>;
    }
}

export default App;