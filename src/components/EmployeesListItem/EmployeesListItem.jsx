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
      isRaise: false,
      increase: false,
    };
  }

  onRaise = () => {
    this.setState(({ isRaise }) => ({
      isRaise: !isRaise,
    }));
  };

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  render() {
    const { name, salary } = this.props;
    const { isRaise } = this.state;

    let classNames = css.employeeItem;
    if (isRaise) {
      classNames += " " + css.raise;
    }

    return (
      <li className={classNames}>
        <h3 onClick={this.onIncrease} className="name">
          {name}
        </h3>
        <p className="salary">{salary}$</p>
        <ul className={css.listControls}>
          <li className={css.controlsItemRaise}>
            <FaHandHoldingDollar className={css.icon} onClick={this.onRaise} />
          </li>
          <li className={css.controlsItemDelete}>
            <FaBucket className={css.icon} />
          </li>
          <li
            className={clsx(css.controlsItemStar, {
              [css.raise]: this.state.increase,
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
