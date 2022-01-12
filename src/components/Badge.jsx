import React from "react";

function Badge({ type, code }) {
  return (
    <div className="container">
      <h5>
        <span className={`badge bg-${type}`}>{code}</span>
      </h5>
    </div>
  );
}

export default Badge;
