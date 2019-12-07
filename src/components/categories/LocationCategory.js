import React from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import ViewAllButton from './ViewAllButton';

const LocationCategory = ({  handleAddLocation, handleViewLocations }) => {
  return (
    <section>
      <h2>Locations</h2>

      <div>
        <AddButton handleAddClick={handleAddLocation} />
        <ViewAllButton handleViewClick={handleViewLocations} />
      </div>
    </section>
  );
};

LocationCategory.propTypes = {
  handleAddLocation: PropTypes.func.isRequired,
  handleViewLocations: PropTypes.func.isRequired
};

export default LocationCategory;