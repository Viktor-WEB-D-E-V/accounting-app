import css from "./EmployeesList.module.css";
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";
const EmployeesList = ({ employees, onDelete, onToggleProp }) => {
  const handleDelete = (id) => onDelete(id);
  
  const handleToggleProp = (id, prop) => {
    onToggleProp(id, prop);
  };

  const employeesList = employees.map(({ id, ...employeeList }) => (
    <EmployeesListItem
      key={id}
      {...employeeList}
      onDelete={() => handleDelete(id)}
      onToggleProp={(e) =>
        handleToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
      }
    />
  ));

  return <div className={css.employeesList}>{employeesList}</div>;
};
export default EmployeesList;
