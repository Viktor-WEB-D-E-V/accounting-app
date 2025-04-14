import { Component } from "react";

import css from "./SearchPanel.module.css";
class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: "",
    };
  }

  onUpdateSearch = (e) => {
    const value = e.target.value;
    this.setState({ phrase: value });
    this.props.onUpdateSearch(value);
  };

  render() {
    return (
      <div className={css.searchInputContainer}>
        <input
          type="text"
          className={css.searchInput}
          placeholder="Search employee"
          value={this.state.phrase}
          onChange={this.onUpdateSearch}
        />
      </div>
    );
  }
}
export default SearchPanel;
