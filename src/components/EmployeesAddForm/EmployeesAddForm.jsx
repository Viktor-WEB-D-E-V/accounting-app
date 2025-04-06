import css from "./EmployeesAddForm.css";

const EmployeesAddForm = () => {
  return (
    <>
      <h3>Add a new employee</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Salary" />

        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default EmployeesAddForm;
