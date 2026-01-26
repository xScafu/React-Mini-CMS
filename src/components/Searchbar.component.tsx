export default function Searchbar() {
  return (
    <>
      <div className="search col-6">
        <input
          type="search"
          name="search"
          className="js-search search-input"
          placeholder="Cerca"
        ></input>
        <button className="js-search-btn btn">
          <i data-lucide="search"></i>
        </button>
      </div>
    </>
  );
}
