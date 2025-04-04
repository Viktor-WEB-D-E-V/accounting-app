import css from "./SearchPanel.module.css";

const SearchPanel = () => {
  return (
    <div className={css.searchInputContainer}>
      <input
        type="text"
        className={css.searchInput}
        placeholder="Search employee"
      />
    </div>
  );
};
export default SearchPanel;
