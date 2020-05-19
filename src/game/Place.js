import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Place extends Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        const { value } = this.props;
        return (
            <div>
                { value }
            </div>
        );
    }
}

Place.propTypes = {
    value: PropTypes.string.isRequired,
};

export default Place;