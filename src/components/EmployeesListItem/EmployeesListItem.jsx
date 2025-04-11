import css from "./EmployeesListItem.module.css";
import clsx from "clsx";
import {
  FaBucket,
  FaHandHoldingDollar,
  FaFaceGrinStars,
} from "react-icons/fa6";

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    onToggleRaise,
    raise,
    increase,
  } = props;

  let classNames = clsx(css.employeeItem, {
    [css.raise]: increase,
  });

  return (
    <li className={classNames}>
      <h3 onClick={onToggleRaise} className="name">
        {name}
      </h3>
      <p className="salary">{salary}$</p>
      <ul className={css.listControls}>
        <li className={clsx(css.controlsItemRaise, css.controlsItem)}>
          <FaHandHoldingDollar
            className={clsx(css.icon, {
              [css.raise]: increase,
            })}
            onClick={onToggleIncrease}
            role="button"
            title="Toggle Promotion"
          />
        </li>
        <li className={clsx(css.controlsItemDelete, css.controlsItem)}>
          <FaBucket
            className={css.icon}
            role="button"
            title="Delete Employee"
            onClick={onDelete}
          />
        </li>
        <li
          className={clsx(css.controlsItemStar, css.controlsItem, {
            [css.raise]: raise,
          })}
        >
          <FaFaceGrinStars className={css.icon} />
        </li>
      </ul>
    </li>
  );
};
export default EmployeesListItem;
