import css from "./AppInfo.module.css";

const AppInfo = ({ employeesNum = 0, increase = 0 }) => {
  return (
    <div className={css.appInfo}>
      <h1 className={css.appTitle}>
        Accounting records of employees in the company:{" "}
        <span className={css.name}>“Build Inc”</span>
      </h1>
      <h2 className={css.appSubTitle}>
        Total number of employees in the company: {employeesNum}
      </h2>
      <h2 className={css.appSubTitle}>
        {increase} employee{increase !== 1 ? "s" : ""} will receive an award
      </h2>
    </div>
  );
};

export default AppInfo;
