/* eslint-disable react/prop-types */

import './description_section.css'

export const DescriptionSection = ({ selectedDescription }) => {
    return (
      <div className="description_desk">
        <p>{selectedDescription}</p>
      </div>
    );
  };