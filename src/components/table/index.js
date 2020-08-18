/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Button from '../button';
import ThemeSelector from '../../constants/themes';

function Table({
  data,
  headers,
  pagination,
  itemsCount,
  showRecordsPerPage,
  currentPage,
  onPageChanged,
  onEditButtonClick,
  onDetailButtonClick,
  onDeleteButtonClick,
  onSortingChanged,
}) {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    setPages([...[]]);
    for (let index = 1; index < itemsCount / showRecordsPerPage + 1; index++) {
      setPages((pages) => [...pages, index]);
    }
  }, [showRecordsPerPage]);

  const getRowsData = () => {
    const items = data;
    const keys = getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };
  const getKeys = () => {
    return Object.keys(data[0]);
  };
  const getHeader = () => {
    if (headers.length === 0) {
      const keys = getKeys();
      return keys.map((key) => {
        return <th key={`th__${key}`}>{key.toUpperCase()}</th>;
      });
    }
    return headers.map((key) => {
      return <th key={`th__${key}`}>{key.toUpperCase()}</th>;
    });
  };
  const RenderRow = (props) => {
    return props.keys.map((key) => {
      return <td key={`td__${props.data[key]}`}>{props.data[key]}</td>;
    });
  };

  const RenderPager = () => {
    return (
      <div className='pager-data'>
        <div className='per-page'>
          <span>Her sayfada</span>
          <select
            value={showRecordsPerPage}
            onChange={(e) => changeShowPerCount(e.target.value)}
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
          <span>sonuç göster.</span>
        </div>
        <div className='pager-info'>
          <span>Sayfa:</span>
          <Button
            theme={ThemeSelector.colors.torusRed}
            disabled={currentPage === 1}
            onClick={() => changeCurrentPage(currentPage - 1)}
            type='button'
          >
            Prev
          </Button>
          <select
            value={currentPage}
            onChange={(e) => changeCurrentPage(e.target.value)}
          >
            {pages.map((page) => (
              <option key={page}>{page}</option>
            ))}
          </select>
          <Button
            theme={ThemeSelector.colors.torusRed}
            disabled={currentPage === pages.slice(-1).pop()}
            onClick={() => changeCurrentPage(currentPage + 1)}
            type='button'
          >
            Next
          </Button>
        </div>
      </div>
    );
  };

  const changeCurrentPage = (page) => {
    // eslint-disable-next-line no-param-reassign
    page = parseInt(page, 10);
    const pageData = {
      currentPage: page,
      showRecordsPerPage,
    };
    onPageChanged(pageData);
  };

  const changeShowPerCount = (count) => {
    // eslint-disable-next-line no-param-reassign
    count = parseInt(count, 10);
    const pageData = {
      currentPage: 1,
      showRecordsPerPage: count,
    };
    onPageChanged(pageData);
  };
  return (
    <div className='custom-data-table'>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>{getHeader()}</tr>
          </thead>
          <tbody>{getRowsData()}</tbody>
        </table>
      ) : null}
      {pagination ? <RenderPager /> : null}
    </div>
  );
}
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string),
  keys: PropTypes.arrayOf(PropTypes.string),
  pagination: PropTypes.bool,
  itemsCount: PropTypes.number,
  currentPage: PropTypes.number,
  showRecordsPerPage: PropTypes.number,
  onPageChanged: PropTypes.func,
  onEditButtonClick: PropTypes.func,
  onDetailButtonClick: PropTypes.func,
  onDeleteButtonClick: PropTypes.func,
  onSortingChanged: PropTypes.func,
};
Table.defaultProps = {
  headers: [],
  keys: [],
  pagination: false,
  itemsCount: 54,
  showRecordsPerPage: 10,
  currentPage: 1,
  onPageChanged: null,
  onEditButtonClick: null,
  onDetailButtonClick: null,
  onDeleteButtonClick: null,
  onSortingChanged: null,
};
export default Table;
