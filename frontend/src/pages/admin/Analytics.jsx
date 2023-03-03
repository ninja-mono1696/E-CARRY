import React from "react";
import Dashboard from "./Dashboard/index";
import SideBar from "./SideBar/SideBar";
function Analytics() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideBar />
      </div>
      <div
        style={{
          marginLeft: "25px",
          marginTop: "-40px",
          width: "100%",
        }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default Analytics;
