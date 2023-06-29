import classnames from 'classnames';
import './adminPagination.scss';
import { usePagination, DOTS } from './use-pagination';
export const AdminPagination = (props) => {
  const { totalPages, currentPage } = props;
  let currentDisplay = currentPage + 1;

  const paginationRange = usePagination({
    totalPages,
    currentPage,
  });
  return (
    <>
      {/* {totalPages > 1 && ( */}
      <ul className={classnames('pagination-container')}>
        <li
          className={classnames('pagination-item', {
            disabled: currentDisplay === 1,
          })}
          onClick={() => {
            props.setPage(0);
          }}
        >
          <div className="arrow left" />
          <div className="arrow left" />
        </li>

        <li
          className={classnames('pagination-item', {
            disabled: currentDisplay === 1,
          })}
          onClick={() => {
            props.setPage(currentPage - 1);
          }}
        >
          <div className="arrow left" />
        </li>

        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li
              key={pageNumber}
              className={classnames('pagination-item', {
                selected: pageNumber === currentDisplay,
              })}
              onClick={() => props.setPage(pageNumber - 1)}
            >
              {pageNumber}
            </li>
          );
        })}

        <li
          className={classnames('pagination-item', {
            disabled: currentDisplay === totalPages,
          })}
          onClick={() => {
            props.setPage(currentPage + 1);
          }}
        >
          <div className="arrow right" />
        </li>
        <li
          className={classnames('pagination-item', {
            disabled: currentDisplay === totalPages,
          })}
          onClick={() => {
            props.setPage(totalPages);
          }}
        >
          <div className="arrow right" />
          <div className="arrow right" />
        </li>
      </ul>
      {/* )} */}
    </>
  );
};
