import css from "./App.module.css";
import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import EmployeesList from "../EmployeesList/EmployeesList";
import { useState } from "react";
function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Viktor",
      salary: 1000,
      isRaise: true,
    },
    {
      name: "Serhii",
      salary: 500,
      isRaise: false,
    },
  ]);
  return (
    <div className={css.container}>
      <AppInfo />
      <div className={css.searchContainer}>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList />
    </div>
  );
}

export default App;
