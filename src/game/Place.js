import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Place.css';

class Place extends Component {
      render() {
        const { value, onChosen } = this.props;
        return (
            <div className="place" onClick={() => {onChosen()}}>
                <div>
                { value }
                </div>
            </div>
        );
    }
}

Place.propTypes = {
    value: PropTypes.string.isRequired,

    onChosen: PropTypes.func.isRequired,
};

export default Place;