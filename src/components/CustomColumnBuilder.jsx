import React from 'react';
export default function CustomColumnBuilder({ onFormula }) {
  return (
    <input type="text" placeholder="e.g. =SalePrice - BuyPrice" onBlur={e => onFormula(e.target.value)} />
  );
}
