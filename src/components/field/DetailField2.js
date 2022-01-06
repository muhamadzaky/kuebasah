import React from 'react';

const DetailField2 = ({ title, subtitle, value, classValue }) => (
  <dl className="row">
    <div className="col-sm-6 text-sm-right">
      <dt>{title}</dt>
      <dt>{subtitle}</dt>
    </div>
    <div className="col-sm-6 text-sm-left">
      <dd className={`mb-1 ${classValue}`}>{value}</dd>
    </div>
  </dl>
);

export default DetailField2;
