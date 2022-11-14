import React from "react";
// bootstrap components
import {Pagination} from 'react-bootstrap';

const Paginator = () => {
  return (
    <div className="paginator d-flex justify-content-center mt-5">
      <Pagination>
        <Pagination.Prev />
        Paginator
        <Pagination.Next />
      </Pagination>
    </div>
  );
};

export default Paginator;
