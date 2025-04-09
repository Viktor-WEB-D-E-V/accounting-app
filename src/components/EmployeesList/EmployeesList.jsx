import css from "./EmployeesList.module.css";
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
const EmployeesList = ({ employees }) => {
  const employeesList = employees.map((employee) => {
    const { id, ...employeeList } = employee;
    return <EmployeesListItem key={id} {...employeeList} />;
  });

  return <div className={css.employeesList}>{employeesList}</div>;
};
export default EmployeesList;
