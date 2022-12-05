import React from "react";

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
          <td>{props.delete}</td>
          <td>{props.medicinetype}</td>
        </tr>
      </tbody>
    </>
  );
}
