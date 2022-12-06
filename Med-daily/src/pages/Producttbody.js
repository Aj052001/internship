import React from "react";
import { Link } from "react-router-dom";
export default function producttbody(props) {
  return (
    <>
      <tbody className="table-border-bottom-0">
        <tr>
          <td>
            <i className="fab fa-angular fa-lg text-danger me-3"></i>
            {props.productname}
          </td>
          <td>{props.mnfname}</td>
          <td>{props.medicinetype}</td>
          <td>  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0"></h5>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="javascript:void(0);">Delete</Link></li>
                        <li><Link className="dropdown-item" to="javascript:void(0);">Disable</Link></li>
                        <li><Link className="dropdown-item" to="/updateproduct">Edit</Link></li>
                      </ul>
                    </div>
                  </div></td>
        </tr>
      </tbody>
    </>
  );
}
