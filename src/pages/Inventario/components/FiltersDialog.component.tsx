import { useDispatch, useSelector } from "react-redux";
import { useCategories } from "../hook/useCategories";
import { setFilterArray } from "../../../features/filters/filterSlice";
import { setToggleSorting } from "../../../features/filters/sortingSlice";
import SearchFilter from "./SearchFilter.component";

export default function FiltersDialog() {
  const { categories, loading } = useCategories();
  const dispatch = useDispatch();
  const { sortingAscendance, sortingDescendance } = useSelector(
    (state) => state.sorting,
  );

  console.log(categories);

  if (!loading) {
    return (
      <>
        <dialog popover="auto" id="openFilters" className="filters-popover ">
          <ul className="js-filters-dialog-wrapper genere-filter">
            <h2>Categorie</h2>
            {categories.map((category) => (
              <li className="js-filter filter">
                <input
                  id={category.id ? category.id.toLowerCase() : ""}
                  className="js-filter-checkbox"
                  type="checkbox"
                  name={
                    category.nome ? category.nome.toLowerCase() : "sconosciuto"
                  }
                  onChange={(e) => {
                    dispatch(
                      setFilterArray({
                        name: e.target.name,
                        checked: e.target.checked,
                      }),
                    );
                  }}
                ></input>
                <label
                  className="js-filter-label"
                  htmlFor={category.nome ? category.nome.toLowerCase() : ""}
                >
                  {category.nome}
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
          <SearchFilter />
        </dialog>
      </>
    );
  }
  <p>CARICAMENTO</p>;
}
