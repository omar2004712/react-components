/* eslint-disable react/prop-types */
import React from 'react';

function ApprovalCard({ children }) {
  return (
    <div className="ui card">
      <div className>{children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <button type="button" className="ui basic green button">
            Approve
          </button>
          <button type="button" className="ui basic red button">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApprovalCard;
