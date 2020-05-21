import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Aux from "react-aux";

const Sampling = (props) => {
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
      <hr></hr>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Aux>
  );
};

export default Sampling;
