/* eslint-disable react/prop-types */

import './description_section.css'

export const DescriptionSection = ({ selectedDescription, selectedCategory }) => {
    return (
      <div className="description_desk">
        <p>{selectedCategory}</p>
        <p>{selectedDescription}</p>
      </div>
    );
  };