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
