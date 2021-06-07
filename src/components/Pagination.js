import React from 'react';
import { Link } from 'react-router-dom'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <nav key={number} className='page-item'>
            <Link to={`/blogs`}>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
            </Link>
          </nav>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;