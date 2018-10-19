import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Button, Icon } from 'semantic-ui-react';

const headerStyle = {
    marginTop: '2%'
}

const PageHeader = ({username}) => {
    return (
        <Menu size="large" style={headerStyle}>
            <Menu.Item header>SPA proyecto de prueba</Menu.Item>

            <Menu.Item name='inicio' active={false} />
            <Menu.Item position="right">
                <Button icon labelPosition='left' color='green'>
                    <Icon name='bell' />
                    {username}
                </Button>
            </Menu.Item>
        </Menu>
    );
}

PageHeader.propTypes = {
    username: PropTypes.string
}

PageHeader.defaultProps = {
    username: 'Narciso'
}

export default PageHeader;