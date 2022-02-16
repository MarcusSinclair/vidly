import React, { Component } from "react";

// columns: array
// sortColumn: object
// onSort: function

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path && sortColumn.order === "asc") {
      sortColumn.order = "desc";
    } else if (sortColumn.path === path && sortColumn.order === "desc") {
      sortColumn.order = "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderSortIcon = (column) => {
    if (column.path === this.props.sortColumn.path) {
      return (
        <i
          className={"fa fa-sort-" + this.props.sortColumn.order}
          aria-hidden="true"
        ></i>
      );
    }
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {column.path && this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
