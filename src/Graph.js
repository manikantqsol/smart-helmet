import React from "react";

const Graph = ({ data }) => (
  <div className="col-12 col-md-6 graph_box">
    <iframe
      title="CO2"
      src={data}
      style={{
        width: "450px",
        height: "260px",
        boxShadow:
          "rgba(145, 158, 171, 0.2) 0px 3px 1px -2px, rgba(145, 158, 171, 0.14) 0px 2px 2px 0px, rgba(145, 158, 171, 0.12) 0px 1px 5px 0px",
        border: "0px",
        borderRadius: "1rem",
        padding: "0.5rem"
      }}
    />
  </div>
);

export default Graph;
