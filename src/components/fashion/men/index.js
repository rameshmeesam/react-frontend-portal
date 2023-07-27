import React from 'react';
import Layout from '../../Layout';
import ProductList from "../../ProductList"

const Kids = (props) => {
  return (
    <div>
      <Layout childrens = {<ProductList />} />
    </div>
  );
};

export default Kids;
