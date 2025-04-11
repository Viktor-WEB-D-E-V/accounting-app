import css from "./AppInfo.module.css";

const AppInfo = ({ employeesNum = 0, increase = 0 }) => {
  return (
    <div className={css.appInfo}>
      <h1 className={css.appTitle}>
        Accounting records of employees in the company:{" "}
        <p className={css.name}>“Build Inc”</p>
      </h1>
      <h2 className={css.appSubTitle}>
        Total number of employees in the company: {employeesNum}
      </h2>
      <h2 className={css.appSubTitle}>
        The award will be received by: {increase}
      </h2>
    </div>
  );
};
export default AppInfo;
