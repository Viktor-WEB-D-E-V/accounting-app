import css from "./App.module.css";
import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import EmployeesList from "../EmployeesList/EmployeesList";
import EmployeesAddForm from "../EmployeesAddForm/EmployeesAddForm";
import { useState } from "react";
function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Viktor",
      salary: 1000,
      isRaise: true,
      id:1
    },
    {
      name: "Serhii",
      salary: 500,
      isRaise: false,
      id:2
    },
    {
      name: "Oksana",
      salary: 900,
      isRaise: false,
      id:3
    },
  ]);
  
  return (
    <div className={css.container}>
      <AppInfo />
      <div className={css.searchContainer}>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList employees={employees} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
