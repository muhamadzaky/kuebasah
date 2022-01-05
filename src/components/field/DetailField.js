import React from 'react';

const DetailField = ({ title, value, classValue }) => (
  <dl className="row">
    <div className="col-sm-3 text-sm-right">
      <dt>{title}</dt>
    </div>
    <div className="col-sm-9 text-sm-left">
      <dd className={`mb-1 ${classValue}`}>{value}</dd>
    </div>
  </dl>
);

export default DetailField;
