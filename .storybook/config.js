/* eslint-disable */
import React from 'react';
import {configure} from '@storybook/react';

function loadStories() {
    require('../stories');
}

configure(loadStories, module);
