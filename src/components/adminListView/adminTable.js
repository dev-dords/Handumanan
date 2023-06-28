import axios from 'axios';
import { useMemo, useState } from 'react';
import Table from 'react-bootstrap/Table';

export const AdminTable = (props) => {
  const [attendees, setAttendees] = useState([]);
  const setVerified = (attendeeId) => {
    const newAttendees = [...attendees];
    const updateAttendee = newAttendees.find((a) => a._id === attendeeId);

    if (updateAttendee.verified !== 'true') {
      axios
        .put(
          'https://asia-south1.gcp.data.mongodb-api.com/app/handumananapi-ifmzb/endpoint/updateAttendee',
          { hashedid: updateAttendee.hashedid }
        )
        .then((response) => {
          updateAttendee.verified = 'true';
          setAttendees(newAttendees);
        });
    }
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
    <Table bordered hover striped responsive="sm" variant="dark">
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
            <td onClick={() => setVerified(attendee._id)}>
              {attendee.verified}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
