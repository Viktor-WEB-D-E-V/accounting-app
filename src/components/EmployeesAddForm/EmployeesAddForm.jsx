import css from "./EmployeesAddForm.module.css";
import { Component } from "react";
class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, salary } = this.state;

    if (name.trim() === "" || salary.trim() === "") return;

    this.props.onAdd({ name, salary: Number(salary) });

    this.setState({ name: "", salary: "" });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className={css.container}>
        <h3 className={css.title}>Add a new employee</h3>
        <form className={css.form}>
          <input
            className={css.formInput}
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            className={css.formInput}
            type="text"
            placeholder="Salary"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button
            className={css.submitBtn}
            type="submit"
            onClick={this.onSubmit}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default EmployeesAddForm;
