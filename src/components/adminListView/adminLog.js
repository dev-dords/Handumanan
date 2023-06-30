import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { AdminHome } from './adminHome';
export const AdminLog = () => {
  const [logged, setLogged] = useState(false);
  const [pass, setPass] = useState('');
  const handleChange = (e) => {
    setPass(e.target.value.toString());
  };
  const onSubmitHandler = (e) => {
    pass === process.env.ADMIN_PASS ? setLogged(true) : setLogged(false);
  };
  return (
    <>
      {!logged ? (
        <Container
          fluid="sm"
          className="main-container justify-content-center text-align-center"
          style={{ maxWidth: '500px' }}
        >
          <Form
            className="row shadow-lg p-4 rounded form-container"
            onSubmit={(e) => onSubmitHandler(e)}
          >
            <Form.Group as={Row} className="mt-3">
              <Form.Label column sm={3}>
                Password:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  name="pass"
                  onChange={handleChange}
                  value={pass}
                  autoComplete="off"
                />
              </Col>
            </Form.Group>
            <Row className="justify-content-end">
              <Button className="btnHandumanan" type="submit" size="sm">
                Submit
              </Button>
            </Row>
          </Form>
        </Container>
      ) : (
        <AdminHome />
      )}
    </>
  );
};
