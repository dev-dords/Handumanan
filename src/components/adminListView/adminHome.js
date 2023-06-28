import axios from 'axios';
import { useState, useMemo } from 'react';
import { AdminTable } from './adminTable';
import { Col, Container, Form, Row } from 'react-bootstrap';

export const AdminHome = () => {
  //load initial state
  //getCount of pages set a formula
  //sort pagination

  //search query fix on change state of field
  //getCount of pages set a formula
  //sort pagination

  //call Table

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [queryState, setQueryState] = useState('name');

  const setPage = (pageNum) => {
    //function to pass to pagination to setCurrentPage ang re-render Reactive Table.
  };
  const queryHandler = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    setQueryState(e.target.value.toString());
  };
  const handleChange = (e) => {
    e.preventDefault();
    setCurrentPage(0);
    setSearch(e.target.value.toString());
  };
  useMemo(() => {
    const calculatePages = (totalResults) => {
      totalResults = parseInt(totalResults);
      if (totalResults < 10) {
        setTotalPages(1);
      } else {
        setTotalPages(Math.ceil(totalResults / 10));
      }
    };
    axios
      .get(
        'https://asia-south1.gcp.data.mongodb-api.com/app/handumananapi-ifmzb/endpoint/countAll',
        {
          params: {
            [queryState]: search,
            page: currentPage,
          },
        }
      )
      .then((response) => {
        calculatePages(response.data.countAll);
      });
  }, [queryState, search]);
  return (
    <div>
      <Container
        fluid="md"
        className="justify-content-center rounded text-align-center"
        style={{
          maxWidth: '1400px',
          marginTop: '120px',
          padding: '20px',
          backgroundColor: 'rgb(163, 46, 255)',
        }}
      >
        <Form
          style={{
            maxWidth: '1400px',
          }}
        >
          <Row>
            <Col sm={5} className="p-2">
              <Form.Select
                type="select"
                name="queryStateField"
                onChange={queryHandler}
                value={queryState}
              >
                <option value=""></option>
                <option value="name">Name</option>
                <option value="year">Year</option>
                <option value="email">Email</option>
                <option value="mop">Mode of Payment</option>
                <option value="pricePaid">Price Paid</option>
                <option value="referenceNumber">Reference</option>
                <option value="verified">Verified</option>
              </Form.Select>
            </Col>
            <Col sm={7} className="p-2">
              <Form.Control
                type="text"
                name="searchField"
                onChange={handleChange}
                autoComplete="off"
              />
            </Col>
          </Row>
        </Form>
        <AdminTable
          currentPage={currentPage}
          queryState={queryState}
          search={search}
        />
      </Container>
      {/* Pagination  totalPages,currentpage for display onli*/}
    </div>
  );
};
