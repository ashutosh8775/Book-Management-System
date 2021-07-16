import React, {Component} from 'react';

const ReviewPagination = ({ reviewPerPage, totalReview, paginate, currentPage }) => {
   const pageNumbers = [];
   let lastPage =  Math.ceil(totalReview / reviewPerPage);
   for (let i = 1; i <= lastPage; i++) {
     pageNumbers.push(i);
   }

   return (
       <div className="pagination-wrapper">
            <ul className="pagination flex-flow-row">
                {   
                    currentPage !== 1 ?
                        <li className="page-item">
                            <button className="page-link" onClick={() => paginate(currentPage - 1)}>&lt;</button>
                        </li>
                    : ''
                }
                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item" attr={number}>
                            <button onClick={() => paginate(number)} className={currentPage == number ? "page-link active" : "page-link"}  >
                            {number}
                            </button>
                        </li>
                    ))
                }
                {   
                    currentPage !== lastPage ?
                        <li className="page-item">
                            <button className="page-link" onClick={() => paginate(currentPage + 1)}>&gt;</button>
                        </li>
                    : ''
                }
            </ul>
       </div>
   );
 };

export default ReviewPagination;