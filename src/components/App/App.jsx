import css from "./App.module.css";
import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import EmployeesList from "../EmployeesList/EmployeesList";
function App() {
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
