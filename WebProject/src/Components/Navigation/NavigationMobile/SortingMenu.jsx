/* eslint-disable react/prop-types */

export const SortingMenu = ({onSortClick}) => {
    const handleSortChange = (event) => {
    onSortClick(event.target.value);
  }
        

  return (
      <div className="sort-container">
    <label htmlFor="sort-options">Sort By:</label>
    <select id="sort-options" onChange={handleSortChange}>
      <option value="">Select an option</option>
      <option value="alphabetical">Alphabetical a-z</option>
      <option value="alphabetical-rev">Alphabetical z-a</option>
      <option value="price-asc">Price (Low to High)</option>
      <option value="price-des">Price (High to Low)</option>
    </select>
  </div>
  )
}