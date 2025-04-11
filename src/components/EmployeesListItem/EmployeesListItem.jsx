import css from "./EmployeesListItem.module.css";
import clsx from "clsx";
import {
  FaBucket,
  FaHandHoldingDollar,
  FaFaceGrinStars,
} from "react-icons/fa6";
import { Component } from "react";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPromoted: false,
      hasIncrease: false,
    };
  }

  togglePromotion = () => {
    this.setState(({ isPromoted }) => ({
      isPromoted: !isPromoted,
    }));
  };

  toggleIncrease = () => {
    this.setState(({ hasIncrease }) => ({
      hasIncrease: !hasIncrease,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { isPromoted, hasIncrease } = this.state;

    let classNames = clsx(css.employeeItem, {
      [css.raise]: isPromoted,
      [css.increase]: hasIncrease,
    });

    return (
      <li className={classNames}>
        <h3 onClick={this.toggleIncrease} className="name">
          {name}
        </h3>
        <p className="salary">{salary}$</p>
        <ul className={css.listControls}>
          <li className={clsx(css.controlsItemRaise, css.controlsItem)}>
            <FaHandHoldingDollar
              className={css.icon}
              onClick={this.togglePromotion}
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
              [css.raise]: hasIncrease,
            })}
          >
            <FaFaceGrinStars className={css.icon} />
          </li>
        </ul>
      </li>
    );
  }
}
export default EmployeesListItem;
