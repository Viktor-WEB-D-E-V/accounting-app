import css from "./AppFilter.module.css";
import clsx from "clsx";
const AppFilter = ({ filter, onFilterSelect }) => {
  const btnsData = [
    {
      name: "all",
      label: "All employees",
    },
    {
      name: "raise",
      label: "Raise",
    },
    {
      name: "moreThen1000",
      label: `>$1000 Salary`,
    },
  ];

  const btns = btnsData.map(({ name, label }) => {
    const activeBtn = filter === name;
    const activeClass = activeBtn ? css.active : "";

    return (
      <button
        onClick={() => {
          onFilterSelect(name);
        }}
        type="button"
        className={clsx(css.item, activeClass)}
        key={name}
      >
        {label}
      </button>
    );
  });

  return (
    <div className={css.btnFilterGroup}>
      {btns}
      {/* <button className={css.item}>Employees</button>
      <button className={css.item}>Raise</button>
      <button className={css.item}> &gt;$1000 Salary</button> */}
    </div>
  );
};
export default AppFilter;
