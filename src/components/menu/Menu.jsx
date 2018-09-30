import React from 'react';
import styles from './Menu.scss';

class Menu extends React.Component{
    render(){
        let array = this.props.subpages;
        return <React.Fragment>
            <ul>
                {array.map((element, index) => {
                    return <li key={index}>{element}</li>;
                })}
            </ul>
        </React.Fragment>;
    }
}

export default Menu;