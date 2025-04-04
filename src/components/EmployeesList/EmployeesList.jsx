import css from "./EmployeesList.module.css";
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
const EmployeesList = () => {
  return (
    <div className={css.employeesList}>
      <EmployeesListItem />
      <EmployeesListItem />
      <EmployeesListItem />
    </div>
  );
};
export default EmployeesList;
