import css from "./EmployeesList.module.css";
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
const EmployeesList = ({ employees }) => {
  const employeesList = employees.map((employee) => {
    return <EmployeesListItem {...employee} />;
  });

  return <div className={css.employeesList}>{employeesList}</div>;
};
export default EmployeesList;
