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
    this.itemId = 4;
    this.state = {
      employees: [
        {
          name: "Viktor",
          salary: 1200,
          raise: false,
          increase: false,
          id: 1,
        },
        {
          name: "Serhii",
          salary: 500,
          raise: true,
          increase: false,
          id: 2,
        },
        {
          name: "Oksana",
          salary: 900,
          raise: false,
          increase: false,
          id: 3,
        },
      ],
      phrase: "",
      filter: "all",
    };
  }

  deleteItem = (id) => {
    this.setState(({ employees }) => {
      return {
        employees: employees.filter((employee) => employee.id !== id),
      };
    });
  };
  addItem = ({ name, salary }) => {
    const newEmployee = {
      name: name,
      salary: salary,
      id: this.itemId++,
      raise: false,
      increase: false,
    };
    this.setState(({ employees }) => {
      const newArr = [...employees, newEmployee];
      return { employees: newArr };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ employees }) => ({
      employees: employees.map((employee) => {
        if (employee.id === id) {
          return { ...employee, [prop]: !employee[prop] };
        }
        return employee;
      }),
    }));
  };

  searchEmployee = (items, phrase) => {
    if (phrase.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(phrase) > -1;
    });
  };

  filterEmployee = (items, filter) => {
    switch (filter) {
      case "raise":
        return items.filter((item) => item.raise);

      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);

      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };
  onUpdateSearch = (phrase) => {
    this.setState({
      phrase,
    });
  };
  render() {
    const { employees, phrase, filter } = this.state;
    const increased = employees.filter(
      (employee) => employee.increase !== false
    ).length;

    const visibleData = this.filterEmployee(
      this.searchEmployee(employees, phrase),
      filter
    );

    return (
      <div className={css.container}>
        <AppInfo employeesNum={employees.length} increase={increased} />
        <div className={css.searchContainer}>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          onToggleProp={this.onToggleProp}
          onDelete={this.deleteItem}
          employees={visibleData}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
