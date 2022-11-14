import React, { useState } from "react";
// bootstrap components
import { Pagination } from "react-bootstrap";

type Props = {
  handleNextPage: Function;
  handlePrevPage: Function;
  numPage: number;
};

const Paginator = ({ handleNextPage, handlePrevPage, numPage }: Props) => {
  return (
    <div className="paginator d-flex justify-content-center mt-5">
      <Pagination>
        {numPage > 1 && <Pagination.Prev onClick={() => handlePrevPage()} />}
        Page: {numPage}
        <Pagination.Next onClick={() => handleNextPage()} />
      </Pagination>
    </div>
  );
};

export default Paginator;
