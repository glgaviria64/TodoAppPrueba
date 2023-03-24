import React from "react";
import {
  FilterButton,
  FilterButtonContainer,
  FiltersContainer,
  ItemsLeft,
} from "./TodoFilters.components";

function TodoFilters({
  total,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete,
}) {
  return (
    <div>
      <FiltersContainer>
        <ItemsLeft total={total} />
        <FilterButtonContainer>
          <FilterButton
            action={() => showAllTodos()}
            active={activeFilter}
            filter="All"
          />
          <FilterButton
            action={() => showActiveTodos()}
            active={activeFilter}
            filter="Active"
          />
          <FilterButton
            action={() => showCompletedTodos()}
            active={activeFilter}
            filter="Completed"
          />
        </FilterButtonContainer>
        <button
          onClick={() => handleClearComplete()}
          className="text-gray-400 text-[14px] hover:text-gray-700 cursor-pointer transition-all duration-300 ease-in"
        >
          Clear Completed
        </button>
      </FiltersContainer>
    </div>
  );
}

export { TodoFilters };