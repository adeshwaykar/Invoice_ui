import React from 'react';


const ServerPagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage==1?0:currentPage-1)}
            disabled={currentPage === 0}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i + 1} className={`page-item ${currentPage === i ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(i)}>
              {i + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages-1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages-1}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ServerPagination;
