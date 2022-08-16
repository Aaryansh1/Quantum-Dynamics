import React from "react";
import "./Common.css";
function Customer() {
  return (
    //Setting the Background color for the Body
    <div className="backgroundColor">
      <div
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          marginLeft: "2rem",
          marginTop: "2rem",
        }}
      >
        Customer
      </div>
      {/*Setting the Background color for the Table*/}
      <div className="TableColor">
        {/*Using flex to align*/}
        <div style={{ display: "flex", paddingBottom: "2rem" }}>
          <img
            style={{
              backgroundColor: "#F7F7FC",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
            src="./SEARCh.svg"
            alt="Search"
          />
          <input className="searchInput" type="text" />
          <img style={{ padding: "0 1rem 0 1rem" }} src="./filter.svg" alt="" />
          <img src="./threedots.svg" alt="" />
        </div>
        {/*Created Table for the dummy data note it can be changed but do not enter it more than a certain
         limit in Purchased items as it is only for the looks. Better option for
         Creating Tables is Material Table*/}
        <table>
          <tr style={{ background: "#F7F7FC" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Join Date</th>
            <th>Total Visit</th>
            <th>Purchased items</th>
            <th>Total Spend</th>
          </tr>
          <tr>
            <td>XXX1</td>
            <td>AAAAAA</td>
            <td>1 Feb 2021</td>
            <td>2</td>
            <td className="tdPurchased">
              bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            </td>
            <td>$400</td>
          </tr>
          <tr>
            <td>XXX2</td>
            <td>AAAAAA</td>
            <td>1 Feb 2021</td>
            <td>2</td>
            <td>bbbbbbbbb</td>
            <td>$400</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Customer;
