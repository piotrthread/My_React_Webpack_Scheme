import React from 'react';
import css from './PercentWheel.scss';

class PercentWheel extends React.Component{
    render(){
        let percentValue = (((100-this.props.percent)*472)/-100);
        let styles={
            strokeDashoffset: percentValue,
        }
        return<React.Fragment>
            <svg viewBox="0 0 200 200">
            <defs>
                <linearGradient id="gradient">
                <stop offset="0%" stopColor="#0082c8" />
                <stop offset="34%" stopColor="#3d3daf" />
                <stop offset="100%" stopColor="#f10077" />
                </linearGradient>
            </defs>
            <text x="26" y="45">{this.props.percent}%</text>
        <path d=" M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0 " />
        <path className={css.percentWheel} style={styles} d=" M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0 " />
    </svg>
    <p>{this.props.text}</p>
        </React.Fragment>;
    }
}

export default PercentWheel;