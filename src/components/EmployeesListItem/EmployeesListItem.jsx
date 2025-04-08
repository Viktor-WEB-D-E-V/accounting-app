import css from "./EmployeesListItem.module.css";
import { FaBucket, FaHandHoldingDollar } from "react-icons/fa6";
const EmployeesListItem = ({ name, salary }) => {
  return (
    <li className={css.employeeItem}>
      <h3 className="name">{name}</h3>
      <p className="salary">{salary}$</p>
      <ul className={css.listControls}>
        <li className={css.controlsItemRaise}>
          <FaHandHoldingDollar size={"25px"} />
        </li>
        <li className={css.controlsItemDelete}>
          <FaBucket size="25px" />
        </li>
      </ul>
    </li>
  );
};
export default EmployeesListItem;
