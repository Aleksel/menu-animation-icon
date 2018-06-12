import CommonMenu from './../Common';
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/first
import React from 'react';
import './styles.styl';

export default class KebabMenu extends CommonMenu {
    renderLines = (className, styleLine) => Array
        .from(Array(5).keys())
        .map(index => <div key={index} className={`CommonMenu_circle ${className}_circle`} style={styleLine}/>);
}
