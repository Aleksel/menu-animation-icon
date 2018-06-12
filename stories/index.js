/* eslint-disable import/no-extraneous-dependencies */
import {action} from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {HamburgerMenu, DonerMenu, BentoMenu, KebabMenu, MeatballMenu} from './../src';
import './styles.styl';

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

const HamburgerMenuWrapper = withMenuWrapper(HamburgerMenu);
const DonerMenuWrapper = withMenuWrapper(DonerMenu);
const BentoMenuWrapper = withMenuWrapper(BentoMenu);
const KebabMenuWrapper = withMenuWrapper(KebabMenu);
const MeatballMenuWrapper = withMenuWrapper(MeatballMenu);
storiesOf('Menu', module)
    .addDecorator((story, context) => withInfo()(story)(context))
    .addDecorator(centered)
    .add(
        'HamburgerMenu',
        () => (
            <HamburgerMenuWrapper
                onClick={action('HamburgerMenu is clicked')}
                activeClass="activeClass"
                hoverClass="hoverClass"
            />
        ),
    )
    .add(
        'DonerMenu',
        () => (
            <DonerMenuWrapper
                onClick={action('DonerMenu is clicked')}
                activeClass="activeClass"
                hoverClass="hoverClass"
            />
        ),
    )
    .add(
        'BentoMenu',
        () => (
            <BentoMenuWrapper
                onClick={action('BentoMenu is clicked')}
                activeClass="activeClass"
                hoverClass="hoverClass"
            />
        ),
    )
    .add(
        'KebabMenu',
        () => (
            <KebabMenuWrapper
                onClick={action('KebabMenu is clicked')}
                activeClass="activeClass"
                hoverClass="hoverClass"
            />
        ),
    )
    .add(
        'MeatballMenu',
        () => (
            <MeatballMenuWrapper
                onClick={action('MeatballMenu is clicked')}
                activeClass="activeClass"
                hoverClass="hoverClass"
            />
        ),
    );
