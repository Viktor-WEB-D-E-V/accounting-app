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
    this.nextEmployeeId = 4;
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
      searchTerm: "",
      filter: "all",
    };
  }

  handleDeleteEmployee = (id) => {
    this.setState(({ employees }) => {
      return {
        employees: employees.filter((employee) => employee.id !== id),
      };
    });
  };
  handleAddEmployee = ({ name, salary }) => {
    const newEmployee = {
      name: name,
      salary: salary,
      id: this.nextEmployeeId++,
      raise: false,
      increase: false,
    };
    this.setState(({ employees }) => {
      const newArr = [...employees, newEmployee];
      return { employees: newArr };
    });
  };

  handleToggleProperty = (id, prop) => {
    this.setState(({ employees }) => ({
      employees: employees.map((employee) => {
        if (employee.id === id) {
          return { ...employee, [prop]: !employee[prop] };
        }
        return employee;
      }),
    }));
  };

  getSearchedEmployees = (items, searchTerm) => {
    if (searchTerm.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  getFilteredEmployees = (items, filter) => {
    switch (filter) {
      case "increase":
        return items.filter((item) => item.increase);

      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);

      default:
        return items;
    }
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };
  handleSearchChange = (searchTerm) => {
    this.setState({
      searchTerm,
    });
  };
  render() {
    const { employees, searchTerm, filter } = this.state;
    const increased = employees.filter(
      (employee) => employee.increase !== false
    ).length;

    const visibleData = this.getFilteredEmployees(
      this.getSearchedEmployees(employees, searchTerm),
      filter
    );

    return (
      <div className={css.container}>
        <AppInfo employeesNum={employees.length} increase={increased} />
        <div className={css.searchContainer}>
          <SearchPanel onUpdateSearch={this.handleSearchChange} />
          <AppFilter filter={filter} onFilterSelect={this.handleFilterChange} />
        </div>
        <EmployeesList
          onToggleProp={this.handleToggleProperty}
          onDelete={this.handleDeleteEmployee}
          employees={visibleData}
        />
        <EmployeesAddForm onAdd={this.handleAddEmployee} />
      </div>
    );
  }
}

export default App;
