/* eslint-disable react/prop-types */

export const SortingMenu = ({onSortClick}) => {

      
        // Function to handle dropdown change
        const handleSortChange = (event) => {
          onSortClick(event.target.value);
        }
        

    return (
        <div className="sort-container">
      <label htmlFor="sort-options">Sort By:</label>
      <select id="sort-options" onChange={handleSortChange}>
        <option value="">Select an option</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="price-asc">Price (Low to High)</option>
      </select>
    </div>
    )
}