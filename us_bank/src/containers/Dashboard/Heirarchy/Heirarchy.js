import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Aux from "react-aux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Editheirarchy from "../EditHeirarchy/EditHeirarchy";

class Heirarchy extends Component {
  state = {
    data: [
      {
        STARTDT: "2020-03-09 09:01:14",
        ENDDT: "2020-03-09 09:28:52",
        CHANNEL: "Branch",
        ROUTE: "In Person",
        USB_MODE: "C",
        LOGIN: "1000004",
        isChecked: false,
      },
      {
        STARTDT: "2020-03-09 09:01:14",
        ENDDT: "2020-03-09 09:28:52",
        CHANNEL: "Branch",
        ROUTE: "In Person",
        USB_MODE: "C",
        LOGIN: "1000004",
        isChecked: false,
      },
      {
        STARTDT: "2020-03-09 09:01:14",
        ENDDT: "2020-03-09 09:28:52",
        CHANNEL: "Branch",
        ROUTE: "In Person",
        USB_MODE: "C",
        LOGIN: "1000004",
        isChecked: false,
      },
      {
        STARTDT: "2020-03-09 09:01:14",
        ENDDT: "2020-03-09 09:28:52",
        CHANNEL: "Branch",
        ROUTE: "In Person",
        USB_MODE: "C",
        LOGIN: "1000004",
        isChecked: false,
      },
    ],
    selectall: false,
  };

  checkboxHandler = (item) => {
    const newdata = [...this.state.data];

    newdata.forEach((itm, i) => {
      if (itm.CHANNEL + i === item) {
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

  deleteRecord = (id) => {
    debugger;
    let agree = window.confirm("Are you sure want to delete");
    if (agree) {
      let elem = this.state.data.find((elem, i) => {
        debugger;
        return elem.first + elem.last + i === id ? i : null;
      });
      const data = [...this.state.data];

      data.splice(elem, 1);
      this.setState({ data: data });
    }
  };

  editRecord = (id) => {
    if (id) {
      debugger;
      window.open("/editheirarchy?id=" + id, "_blank");
    } else {
      let count = 0;
      this.state.data.forEach((itm) => {
        count += itm.isChecked ? 1 : 0;
      });

      if (count > 1) {
        window.open("/editheirarchy?id=" + id, "_blank");
      } else {
        alert("Please select more than one record!");
      }
    }
  };

  editHistory = () => {
    debugger;
    window.open("/edithistory", "_blank");
  };

  onView = () => {
    debugger;
    window.open("/ViewRecord", "_blank");
  };

  fileUpload = () => {
    debugger;
    this.fileInput.click();
    // React.createElement("label", { htmlFor: "myfile" }, "Select File");
  };

  render() {
    let tablehtml = this.state.data.map((itm, i) => {
      return (
        <tr key={itm.CHANNEL + i}>
          <td>
            <input
              type="checkbox"
              onChange={() => this.checkboxHandler(itm.CHANNEL + i)}
              checked={itm.isChecked}
            ></input>
          </td>
          <td>
            <span
              className="glyphicon glyphicon-link"
              aria-hidden="true"
              title="View"
              onClick={() => this.onView(itm.CHANNEL + i)}
            ></span>
          </td>
          <td>{itm.first}</td>
          <td>{itm.last}</td>
          <td>{itm.handle}</td>
          <td>
            <span
              onClick={() => {
                this.editRecord(itm.CHANNEL + i);
              }}
              className="glyphicon glyphicon-edit"
              aria-hidden="true"
            ></span>
          </td>
          <td>
            <span
              onClick={() => {
                this.deleteRecord(itm.CHANNEL + i);
              }}
              className="glyphicon glyphicon-glyphicon glyphicon-remove-sign"
              aria-hidden="true"
            ></span>
          </td>
        </tr>
      );
    });
    return (
      <Aux>
        {/* <h3>Sampling</h3> */}
        {/* <div>
          <input
            type="text"
            placeholder="Search"
            style={{ width: "200px" }}
          ></input>
          &nbsp;&nbsp;
          <button className="btn btn-primary">Add Column</button>
        </div> */}
        <h4>Total Count= {this.state.data.length}</h4>
        <hr></hr>
        <span
          title="Edit"
          style={{
            marginRight: "10px",
            padding: "5px",
            background: "#ccc",
          }}
          className="glyphicon glyphicon-edit"
          aria-hidden="true"
          onClick={() => {
            this.editRecord(null);
          }}
        ></span>

        <span
          title="Add"
          style={{
            marginRight: "10px",
            padding: "5px",
            background: "#ccc",
          }}
          className="glyphicon glyphicon-plus"
          aria-hidden="true"
          onClick={() => {
            this.fileUpload();
          }}
        ></span>

        <span
          title="import from file"
          style={{
            marginRight: "10px",
            padding: "5px",
            background: "#ccc",
          }}
          className="glyphicon glyphicon-import"
          aria-hidden="true"
          onClick={() => {
            this.fileUpload();
          }}
        ></span>

        <span
          title="Import to qualtrics"
          style={{
            marginRight: "10px",
            padding: "5px",
            background: "#ccc",
          }}
          className="glyphicon glyphicon-import"
          aria-hidden="true"
          onClick={() => {
            this.fileUpload();
          }}
        ></span>

        <span
          title="Import users to DB"
          style={{
            marginRight: "10px",
            padding: "5px",
            background: "#ccc",
          }}
          className="glyphicon glyphicon-import"
          aria-hidden="true"
          onClick={() => {
            this.fileUpload();
          }}
        ></span>

        <span
          title="Download"
          style={{
            marginRight: "10px",
            padding: "5px",
            background: "#ccc",
          }}
          className="glyphicon glyphicon-download-alt"
          aria-hidden="true"
        ></span>

        <span
          title="History"
          style={{
            float: "right",
            marginRight: "10px",
            padding: "5px",
            background: "#ccc",
          }}
          className="glyphicon glyphicon-list-alt"
          aria-hidden="true"
          onClick={() => {
            this.editHistory();
          }}
        ></span>
        <input
          style={{
            width: "100px",
            display: "inline-block",
            marginRight: "10px",
            visibility: "hidden",
          }}
          ref={(fileInput) => (this.fileInput = fileInput)}
          type="file"
        />

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
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{tablehtml}</tbody>
        </table>
      </Aux>
    );
  }
}

export default Heirarchy;
