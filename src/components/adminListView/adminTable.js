import axios from 'axios';
import { useMemo, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ModalClass from '../modalclass';

export const AdminTable = (props) => {
  const [attendees, setAttendees] = useState([]);
  const [selected, setSelected] = useState({});
  const [show, setShow] = useState(false);
  const setVerified = () => {
    const newAttendees = [...attendees];
    axios
      .put(
        'https://asia-south1.gcp.data.mongodb-api.com/app/handumananapi-ifmzb/endpoint/updateAttendee',
        { hashedid: selected.hashedid }
      )
      .then(() => {
        selected.verified = 'true';
        setAttendees(newAttendees);
        setShow(false);
      });
  };
  const cellOnClick = (attendeeId) => {
    const updateAttendee = attendees.find((a) => a._id === attendeeId);

    if (updateAttendee.verified !== 'true') {
      setSelected(updateAttendee);
      setShow(true);
    }
  };
  const handleClose = () => {
    setShow(false);
  };
  useMemo(() => {
    axios
      .get(
        'https://asia-south1.gcp.data.mongodb-api.com/app/handumananapi-ifmzb/endpoint/atttendees',
        {
          params: {
            [props.queryState]: props.search,
            page: props.currentPage,
          },
        }
      )
      .then((response) => {
        setAttendees(response.data);
      });
  }, [props.currentPage, props.queryState, props.search]);
  return (
    <>
      <ModalClass
        title="Please confirm"
        message={`Would you like to verify payment for ${selected.firstname} ${selected.lastname}?`}
        handleClose={handleClose}
        handleSave={setVerified}
        show={show}
        cancelButton={true}
      />
      <Table bordered hover striped responsive variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Year</th>
            <th>Mode of Payment</th>
            <th>Price Paid</th>
            <th>Reference</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => (
            <tr key={attendee._id}>
              <td>{attendee.firstname}</td>
              <td>{attendee.lastname}</td>
              <td>{attendee.email}</td>
              <td>{attendee.year}</td>
              <td>{attendee.mop}</td>
              <td>{attendee.pricePaid}</td>
              <td>{attendee.refNum}</td>
              <td onClick={() => cellOnClick(attendee._id)}>
                {attendee.verified}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
