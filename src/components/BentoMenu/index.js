/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/first
import React from 'react';
import CommonMenu from './../Common';
import './styles.styl';

export default class BentoMenu extends CommonMenu {
    renderLines = (className, styleLine) => Array
        .from(Array(9).keys())
        .map(index => <div key={index} className={`CommonMenu_box ${className}_box`} style={styleLine}/>);
}
