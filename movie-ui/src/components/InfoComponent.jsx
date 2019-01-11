import React from "react";

class InfoComponent extends React.Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="col-sm-8 mx-auto">
          <div
            className="card mb-4 shadow-sm"
            style={{ height: 600, width: 600, padding: 10 }}
          />
        </div>
      </div>
    );
  }
}

export default InfoComponent;
