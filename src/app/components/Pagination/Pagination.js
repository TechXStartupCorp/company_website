import React from "react";
import styles from './Pagination.module.css'
import { Pagination as BootstrapPagination } from "react-bootstrap";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <BootstrapPagination className={`${styles.pagination} mt-3 d-flex justify-content-center align-items-center`}>
      <BootstrapPagination.Prev
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />
      {[...Array(totalPages)].map((_, index) => (
        <BootstrapPagination.Item
        className={styles.paginationItem}
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </BootstrapPagination.Item>
      ))}
      <BootstrapPagination.Next
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </BootstrapPagination>
  );
};

export default Pagination;
