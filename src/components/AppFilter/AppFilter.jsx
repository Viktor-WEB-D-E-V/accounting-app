import css from "./AppFilter.module.css";

const AppFilter = () => {
  return (
    <div className={css.btnFilterGroup}>
      <button className={css.item}>Employees</button>
      <button className={css.item}>Raise</button>
      <button className={css.item}> &gt;$1000 Salary</button>
    </div>
  );
};
export default AppFilter;
