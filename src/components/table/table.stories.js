import React from 'react';
import Table from './index';

export default {
  title: 'Tables',
};

export const Standart = () => (
  <Table
    pagination={false}
    itemsCount={5}
    currentPage={1}
    showRecordsPerPage={5}
    data={[
      { name: 'Apple', price: 5, Seller: 'IKEA' },
      { name: 'Melon', price: 15, Seller: 'Migros' },
    ]}
  />
);

export const Pager = () => (
  <Table
    pagination
    itemsCount={5}
    currentPage={1}
    showRecordsPerPage={5}
    data={[
      { name: 'Apple', price: 5, Seller: 'IKEA' },
      { name: 'Melon', price: 15, Seller: 'Migros' },
    ]}
  />
);
