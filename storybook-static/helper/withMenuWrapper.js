import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import {BentoMenu, DonerMenu, HamburgerMenu, KebabMenu, MeatballMenu} from './../index';

function withMenuWrapper(BaseComponent) {
    class MenuWrapper extends React.Component {
        static propTypes = {
            onClick: PropTypes.func,
        };

        static defaultProps = {
            onClick: () => {
            },
        };

        state = {
            active: false,
        };

        onClick = isActive => {
            const {onClick} = this.props;
            // eslint-disable-next-line no-unused-expressions
            onClick && onClick(isActive);
            this.setState({active: isActive});
        };

        render() {
            const {onClick, ...restProps} = this.props;
            const {active} = this.state;
            return <BaseComponent active={active} onClick={this.onClick} {...restProps}/>;
        }
    }

    return MenuWrapper;
}

export const HamburgerMenuWrapper = withMenuWrapper(HamburgerMenu);
export const DonerMenuWrapper = withMenuWrapper(DonerMenu);
export const BentoMenuWrapper = withMenuWrapper(BentoMenu);
export const KebabMenuWrapper = withMenuWrapper(KebabMenu);
export const MeatballMenuWrapper = withMenuWrapper(MeatballMenu);
