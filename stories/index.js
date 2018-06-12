/* eslint-disable import/no-extraneous-dependencies */
import {action} from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    BentoMenuWrapper,
    DonerMenuWrapper,
    HamburgerMenuWrapper,
    KebabMenuWrapper,
    MeatballMenuWrapper,
} from './../src/helper/withMenuWrapper';
import './styles.styl';

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
