import { useDispatch, useSelector } from "react-redux";
import { useCategories } from "../hook/useCategories";
import { setFilterArray } from "../../../features/categoryFilter/filterSlice";
import { setToggleSorting } from "../../../features/categoryFilter/sortingSlice";

export default function FiltersDialog() {
  const { categories, loading } = useCategories();
  const dispatch = useDispatch();
  const { sortingAscendance, sortingDescendance } = useSelector(
    (state) => state.sorting
  );

  if (!loading) {
    return (
      <>
        <dialog popover="auto" id="openFilters" className="filters-popover ">
          <ul className="js-filters-dialog-wrapper genere-filter">
            <h2>Genere</h2>
            {categories.map((category) => (
              <li className="js-filter filter">
                <input
                  className="js-filter-checkbox"
                  type="checkbox"
                  name={category.toLowerCase()}
                  onChange={(e) => {
                    dispatch(
                      setFilterArray({
                        name: e.target.name,
                        checked: e.target.checked,
                      })
                    );
                  }}
                ></input>
                <label
                  className="js-filter-label"
                  htmlFor={category.toLowerCase()}
                >
                  {category}
                </label>
              </li>
            ))}
          </ul>
          <ul className="name-filter">
            <h2>Nome</h2>
            <li className="filter">
              <input
                className="js-alphabetical-desc"
                type="checkbox"
                name="a-z"
                id="a-z"
                checked={sortingDescendance}
                onChange={() => dispatch(setToggleSorting(1))}
              ></input>
              <label htmlFor="a-z">
                A-Z
                <i className="icon" data-lucide="arrow-down-a-z"></i>
              </label>
            </li>
            <li className="filter">
              <input
                className="js-alphabetical-asc"
                type="checkbox"
                name="z-a"
                id="z-a"
                checked={sortingAscendance}
                onChange={() => {
                  dispatch(setToggleSorting(2));
                }}
              ></input>
              <label htmlFor="z-a">
                Z-A
                <i className="icon" data-lucide="arrow-up-z-a"></i>
              </label>
            </li>
          </ul>
          <div className="search">
            <input
              type="search"
              name="search"
              className="js-search-filter search-input"
              placeholder="Cerca per nome"
            ></input>
            <i data-lucide="search"></i>
          </div>
        </dialog>
      </>
    );
  }
  <p>CARICAMENTO</p>;
}
