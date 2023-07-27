import React from 'react';
import Layout from '../../Layout';

const GetData = (props) => {
    return (<>
    <h1>Kids latest trending Clothing And Accessories</h1>
      <p>This is some content inside the component.</p>
    </>)
 }

const Kids = (props) => {
  return (
    <div>
      <Layout childrens = {<GetData />} />
    </div>
  );
};

export default Kids;
