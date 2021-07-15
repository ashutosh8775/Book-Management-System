import React, {Component} from 'react';

const ReviewPagination = ({ reviewPerPage, totalReview, paginate, currentPage }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalReview / reviewPerPage); i++) {
     pageNumbers.push(i);
   }

   return (
       <div className="pagination-wrapper">
            <ul className="pagination flex-flow-row">
                {pageNumbers.map(number => (
                <li key={number} className="page-item" attr={number}>
                    <button onClick={() => paginate(number)} className={currentPage == number ? "page-link active" : "page-link"}  >
                    {number}
                    </button>
                </li>
                ))}
            </ul>
       </div>
   );
 };

export default ReviewPagination;