import React from "react";
import "./Common.css";
function Coupon() {
  return (
    //Setting the Background color for the Body
    <div className="backgroundColor">
      <div
        style={{
          display: "flex",
          margin: "2rem 2rem 2rem 2rem",
          justifySelf: "center",
          width: "94%",
        }}
      >
        <div
          style={{
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          Coupon
        </div>
        <button
          style={{
            fontSize: "1rem",
            marginLeft: "auto",
            padding: "0.5rem 2rem 0.5rem 2rem",
            background: "#5541D7",
            color: "white",
            borderRadius: "1rem",
          }}
        >
          Create New
        </button>
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
            src="./SEARCH.svg"
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
            <th>Code</th>
            <th>Discount</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Activate</th>
          </tr>
          <tr>
            <td>01</td>
            <td>20% off</td>
            <td>20%</td>
            <td>2 Feb</td>
            <td>4 Feb</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </td>
            <img style={{ float: "right" }} src="./threedots.svg" alt="" />
          </tr>
          <tr>
            <td>01</td>
            <td>20% off</td>
            <td>20%</td>
            <td>2 Feb</td>
            <td>4 Feb</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </td>
            <img style={{ float: "right" }} src="./threedots.svg" alt="" />
          </tr>
          <tr>
            <td>01</td>
            <td>20% off</td>
            <td>20%</td>
            <td>2 Feb</td>
            <td>4 Feb</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </td>
            <img style={{ float: "right" }} src="./threedots.svg" alt="" />
          </tr>
          <tr>
            <td>01</td>
            <td>20% off</td>
            <td>20%</td>
            <td>2 Feb</td>
            <td>4 Feb</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </td>
            <img style={{ float: "right" }} src="./threedots.svg" alt="" />
          </tr>
          <tr>
            <td>01</td>
            <td>20% off</td>
            <td>20%</td>
            <td>2 Feb</td>
            <td>4 Feb</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </td>
            <img style={{ float: "right" }} src="./threedots.svg" alt="" />
          </tr>
          <tr>
            <td>01</td>
            <td>20% off</td>
            <td>20%</td>
            <td>2 Feb</td>
            <td>4 Feb</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </td>
            <img style={{ float: "right" }} src="./threedots.svg" alt="" />
          </tr>
          <tr>
            <td>01</td>
            <td>20% off</td>
            <td>20%</td>
            <td>2 Feb</td>
            <td>4 Feb</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </td>
            <img style={{ float: "right" }} src="./threedots.svg" alt="" />
          </tr>
          <tr>
            <td>01</td>
            <td>20% off</td>
            <td>20%</td>
            <td>2 Feb</td>
            <td>4 Feb</td>
            <td>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </td>
            <img style={{ float: "right" }} src="./threedots.svg" alt="" />
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Coupon;
