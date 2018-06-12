# menu-animation-icon
> React.js Menu animation icon component

## [Introduction](https://aleksel.github.io/menu-animation-icon/#introduction)
provides animation menu icons (HamburgerMenu, DonerMenu, KebabMenu, BentoMenu, MeatballMenu)

## [Installation](https://aleksel.github.io/menu-animation-icon/#installation)
```sh
npm install --save menu-animation-icon # or
yarn add menu-animation-icon
```

## [Usage & Configuration](https://aleksel.github.io/menu-animation-icon/#usage--configuration)
```js static
import React from 'react';
import {HamburgerMenu} from 'menu-animation-icon';

export default class CustomElement extends React.Component {

    state = {
        active: false,
    };

    onClick = isActive => this.setState({active: isActive});

    render() {
        const {active} = this.state;
        return (
            <HamburgerMenu
                active={active}
                onClick={this.onClick}
                activeClass="activeClass"
                hoverClass="hoverClass"
            />
        );
    }
}

```

## [Examples](https://aleksel.github.io/menu-animation-icon/#ui-components)


## [Changelog](https://github.com/Aleksel/menu-animation-icon/blob/master/CHANGELOG.md)


## [Storybook](https://aleksel.github.io/menu-animation-icon/storybook-static)


## Getting Help

**Before doing this, did you**:

1. Read the [documentation](https://aleksel.github.io/menu-animation-icon/)
2. Read the [source code](https://github.com/aleksel/menu-animation-icon)
