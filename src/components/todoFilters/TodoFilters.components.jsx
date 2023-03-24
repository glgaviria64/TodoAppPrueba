const FiltersContainer = ({ children }) => {
    return (
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-solid border-gray-300">
        {children}
      </div>
    );
  };
  
  const ItemsLeft = ({ total = 0 }) => {
    return <p className="text-gray-400 text-sm">{total} items left</p>;
  };
  
  const FilterButtonContainer = ({ children }) => {
    return <div className="flex items-center space-x-2">{children}</div>;
  };
  const FilterButton = ({ action, active, filter }) => {
    return (
      <button
        onClick={action}
        className={
          `hover:text-gray-700 cursor-pointer transition-all duration-300 text-[14px] ease-in-out ` +
          (active.toLowerCase().includes(filter.toLowerCase())
            ? "text-blue-400"
            : "text-gray-400")
        }
      >
        {filter}
      </button>
    );
  };
  
  export { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton };