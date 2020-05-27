import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Aux from "react-aux";

const Sampling = (props) => {
  const table = [
    {
      first: "Mark",
      last: "Otto",
      handle: "@mdo",
    },
    {
      first: "Jacob",
      last: "Thornton",
      handle: "@fat",
    },
    {
      first: "Larry",
      last: "the Bird",
      handle: "@twitter",
    },
    {
      first: "Larry",
      last: "the Bird",
      handle: "@twitter",
    },
  ];

  const tablehtml = table.map((itm, i) => {
    return (
      <tr key={itm.first + itm.last + i}>
        <td>
          <span className="glyphicon glyphicon-link" aria-hidden="true"></span>
        </td>
        <td>{itm.first}</td>
        <td>{itm.last}</td>
        <td>{itm.handle}</td>
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
        <button class="btn btn-primary">Add Column</button>
      </div> */}
      <h4>Total Count= {table.length}</h4>
      <hr></hr>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">View</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>{tablehtml}</tbody>
      </table>
    </Aux>
  );
};

export default Sampling;
