import css from "./App.module.css";
import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import EmployeesList from "../EmployeesList/EmployeesList";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [
        {
          name: "Viktor",
          salary: 1000,
          isRaise: true,
          id: 1,
        },
        {
          name: "Serhii",
          salary: 500,
          isRaise: false,
          id: 2,
        },
        {
          name: "Oksana",
          salary: 900,
          isRaise: false,
          id: 3,
        },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ employees }) => {
      return {
        employees: employees.filter((employee) => employee.id !== id),
      };
    });
  };
  render() {
    const { employees } = this.state;

    return (
      <div className={css.container}>
        <AppInfo />
        <div className={css.searchContainer}>
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList onDelete={this.deleteItem} employees={employees} />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
