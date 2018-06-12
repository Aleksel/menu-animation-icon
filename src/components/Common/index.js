import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './styles.styl';

export default class CommonMenu extends React.Component {
    static propTypes = {
        active:      PropTypes.bool,
        color:       PropTypes.string,
        activeClass: PropTypes.string,
        hoverClass:  PropTypes.string,
        onClick:     PropTypes.func,
    };

    static defaultProps = {
        active:      false,
        color:       '#555',
        activeClass: '',
        hoverClass:  '',
        onClick:     () => {
        },
    };

    state = {
        hover: false,
    };

    onClick = () => {
        const {active, onClick} = this.props;
        onClick(!active);
    };

    onMouseEnter = () => this.setState({hover: true});
    onMouseLeave = () => this.setState({hover: false});

    renderLines = (className, styleLine) => Array
        .from(Array(3).keys())
        .map(index => <div key={index} className={`CommonMenu_line ${className}_line`} style={styleLine}/>);

    render() {
        const {name: className} = this.constructor;
        const {
            active, color, activeClass, hoverClass,
        } = this.props;
        const {hover} = this.state;
        const styleLine = {backgroundColor: color};
        return (
            <div
                className={`CommonMenu ${className} ${hover ? hoverClass : ''} ${active ? activeClass : ''}`}
                onClick={this.onClick}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                role="menu"
            >
                <div className={`CommonMenu_wrapper ${className}_wrapper`}>
                    <div className={`CommonMenu_item ${className}_item ${active ? `${className}_item_active` : ''}`}>
                        {this.renderLines(className, styleLine)}
                    </div>
                </div>
            </div>
        );
    }
}
