import css from "./EmployeesList.module.css";
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
const EmployeesList = ({ employees, onDelete, onToggleProp }) => {
  const employeesList = employees.map((employee) => {
    const { id, ...employeeList } = employee;
    return (
      <EmployeesListItem
        key={id}
        {...employeeList}
        onDelete={() => {
          onDelete(id);
        }}
        onToggleProp={(e) => {
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"));
        }}
      />
    );
  });

  return <div className={css.employeesList}>{employeesList}</div>;
};
export default EmployeesList;
