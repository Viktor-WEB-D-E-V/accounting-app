import css from "./EmployeesList.module.css";
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
const EmployeesList = ({ employees, onDelete }) => {
  const employeesList = employees.map((employee) => {
    const { id, ...employeeList } = employee;
    return (
      <EmployeesListItem
        key={id}
        {...employeeList}
        onDelete={() => {
          onDelete(id);
        }}
      />
    );
  });

  return <div className={css.employeesList}>{employeesList}</div>;
};
export default EmployeesList;
