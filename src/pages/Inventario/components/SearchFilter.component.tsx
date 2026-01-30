import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchName } from "../../../features/categoryFilter/searchSlice";

export default function SearchFilter() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="search">
        <input
          type="search"
          name="search"
          className="js-search-filter search-input"
          placeholder="Cerca per nome"
          onChange={(e) => dispatch(setSearchName(e.target.value))}
        ></input>
        <Search />
      </div>
    </>
  );
}
