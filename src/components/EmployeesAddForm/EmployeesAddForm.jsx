import css from "./EmployeesAddForm.module.css";

const EmployeesAddForm = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Add a new employee</h3>
      <form className={css.form}>
        <input className={css.formInput} type="text" placeholder="Name" />
        <input className={css.formInput} type="number" placeholder="Salary" />

        <button className={css.submitBtn} type="submit">Add</button>
      </form>
    </div>
  );
};
export default EmployeesAddForm;
