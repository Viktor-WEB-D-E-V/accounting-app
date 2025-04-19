import css from "./AppFilter.module.css";
import clsx from "clsx";
const AppFilter = ({ filter, onFilterSelect }) => {
  const btnsData = [
    { name: "all", label: "All employees" },
    { name: "increase", label: "Increase" },
    { name: "moreThen1000", label: `>$1000 Salary` },
  ];

  return (
    <div className={css.btnFilterGroup}>
      {btnsData.map(({ name, label }) => (
        <button
          key={name}
          type="button"
          onClick={() => onFilterSelect(name)}
          className={clsx(css.item, {
            [css.active]: filter === name,
          })}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
export default AppFilter;
