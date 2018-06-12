import CommonMenu from './../Common';
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/first
import React from 'react';
import './styles.styl';

export default class BentoMenu extends CommonMenu {
    renderLines = (className, styleLine) => [
        <div className={`CommonMenu_box ${className}_box`} style={styleLine}/>,
        <div className={`CommonMenu_box ${className}_box`} style={styleLine}/>,
        <div className={`CommonMenu_box ${className}_box`} style={styleLine}/>,
        <div className={`CommonMenu_box ${className}_box`} style={styleLine}/>,
        <div className={`CommonMenu_box ${className}_box`} style={styleLine}/>,
        <div className={`CommonMenu_box ${className}_box`} style={styleLine}/>,
        <div className={`CommonMenu_box ${className}_box`} style={styleLine}/>,
        <div className={`CommonMenu_box ${className}_box`} style={styleLine}/>,
        <div className={`CommonMenu_box ${className}_box`} style={styleLine}/>,
    ];
}
