import React from 'react';
import Layout from '../../Layout';

const GetBabyData = (props) => {
    return (<>
    <h1>Baby latest trending Clothing And Accessories</h1>
      <p>This is some content inside the component.</p>
    </>)
 }

const Baby = (props) => {
  return (
    <div>
      <Layout childrens = {<GetBabyData />} />
    </div>
  );
};

export default Baby;
