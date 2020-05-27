import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Aux from "react-aux";

class Transaction extends Component {
  state = {
    data: [
      {
        first: "Mark",
        last: "Otto",
        handle: "@mdo",
        isChecked: false,
      },
      {
        first: "Jacob",
        last: "Thornton",
        handle: "@fat",
        isChecked: false,
      },
      {
        first: "Larry",
        last: "the Bird",
        handle: "@twitter",
        isChecked: false,
      },
      {
        first: "Larry",
        last: "the Bird",
        handle: "@twitter",
        isChecked: false,
      },
    ],
    selectall: false,
  };

  checkboxHandler = (item) => {
    const newdata = [...this.state.data];

    newdata.forEach((itm, i) => {
      if (itm.first + itm.last + i === item) {
        itm.isChecked = !itm.isChecked;
      }
    });
    this.setState({ data: newdata }, () => {
      console.log(this.state);
    });
  };

  selectAll = (selectall) => {
    debugger;
    const newdata = [...this.state.data];

    newdata.forEach((itm) => {
      itm.isChecked = selectall;
    });
    this.setState({ data: newdata }, () => {
      console.log(this.state);
    });
  };

  render() {
    let tablehtml = this.state.data.map((itm, i) => {
      return (
        <tr key={itm.first + itm.last + i}>
          <td>
            <input
              type="checkbox"
              onChange={() => this.checkboxHandler(itm.first + itm.last + i)}
              checked={itm.isChecked}
            ></input>
          </td>
          <td>
            <span
              className="glyphicon glyphicon-link"
              aria-hidden="true"
            ></span>
          </td>
          <td>{itm.first}</td>
          <td>{itm.last}</td>
          <td>{itm.handle}</td>
          {/* <td>
            <span
              className="glyphicon glyphicon-edit"
              aria-hidden="true"
            ></span>
          </td>
          <td>
            <span
              className="glyphicon glyphicon-glyphicon glyphicon-remove-sign"
              aria-hidden="true"
            ></span>
          </td> */}
        </tr>
      );
    });

    return (
      <Aux>
        <h4>Total Count= {this.state.data.length}</h4>
        <hr></hr>

        <span
          title="Download"
          style={{ marginRight: "10px", padding: "5px", background: "#ccc" }}
          className="glyphicon glyphicon-download-alt"
          aria-hidden="true"
        ></span>
        <hr></hr>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  onChange={() => {
                    // this.setState({ selectall: !selectall });
                    debugger;
                    this.setState({ selectall: !this.state.selectall });
                    this.selectAll(!this.state.selectall);
                  }}
                ></input>{" "}
                Select
              </th>
              <th scope="col">View</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              {/* <th scope="col">Edit</th>
              <th scope="col">Delete</th> */}
            </tr>
          </thead>
          <tbody>{tablehtml}</tbody>
        </table>
      </Aux>
    );
  }
}

export default Transaction;
