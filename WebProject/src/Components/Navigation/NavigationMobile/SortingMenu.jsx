
export const SortingMenu = () => {

      
        // Function to handle dropdown change
        const handleSortChange = (event) => {
          const selectedValue = event.target.value;
          console.log('Selected Sort Option:', selectedValue); // Log the selected value to the console
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