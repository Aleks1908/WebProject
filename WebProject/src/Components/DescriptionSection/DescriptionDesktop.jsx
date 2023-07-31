// eslint-disable-next-line react/prop-types
export const DescriptionSection = ({ selectedCategory }) => {
    return (
      <div className="description_section">
        <p>Description of {selectedCategory}</p>
      </div>
    );
  };