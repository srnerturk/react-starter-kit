import React, { useEffect, useState } from 'react';
import './style.scss';
import { Card, Table, Loader } from '../../components';
import { get } from '../../utils/axios-instance';

function HomeContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState({
    currentPage: 1,
    showRecordsPerPage: 10,
  });
  const dataCount = 200;
  useEffect(() => {
    let arr = [];
    setLoading(true);
    get(
      `/todos?_page=${pageData.currentPage}&_limit=${pageData.showRecordsPerPage}`
    ).then((resp) => {
      setLoading(false);
      if (resp.data.length > 0) {
        resp.data.forEach((element) => {
          const obj = {
            id: element.id,
            title: element.title,
            creator: 'serhan erturk',
            date: new Date().toDateString(),
          };
          arr.push(obj);
        });
        setUsers(arr);
      }
    });
  }, [pageData]);

  const pageChanged = (obj) => {
    setPageData({ ...obj });
  };
  return (
    <div className='home'>
      <h1>Table Component Demo</h1>
      <Card width='100%' bg='#fff' p={10}>
        <Table
          pagination
          itemsCount={dataCount}
          currentPage={pageData.currentPage}
          showRecordsPerPage={pageData.showRecordsPerPage}
          data={users}
          onPageChanged={(obj) => pageChanged(obj)}
        />
        <Loader isLoading={loading} />
      </Card>
    </div>
  );
}
export default HomeContainer;
