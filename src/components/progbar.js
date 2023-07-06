import logo from '../logo.svg';
const { useState, useEffect } = require('react');
const { Container } = require('react-bootstrap');
let goal = 30000;
export const ProgBar = () => {
  const [current, setCurrent] = useState(10000);
  const [filled, setFilled] = useState(0);
  useEffect(() => {
    let currentToPercent = (current / goal) * 100;
    if (filled < currentToPercent) {
      setTimeout(
        () => setFilled((prev) => (prev += currentToPercent / 100)),
        100
      );
    }
  }, [filled, current]);
  return (
    <Container
      fluid="sm"
      className="shadow-lg justify-content-center rounded p-5"
      style={{
        maxWidth: '1000px',
        marginTop: '20px',
        background: '#A32EFF',
      }}
    >
      {' '}
      <div className="text-center">
        <span className="notes-text">SARAMOK FUNDRAISING</span>
      </div>
      <div
        className="wine-wiggle mb-1 text-end"
        style={{ width: `${filled}%`, transition: 'width 0.5s' }}
      >
        <img src={logo} style={{ width: '40px' }} />
      </div>
      <div className="progressbar">
        <div
          style={{
            height: '100%',
            width: `${filled}%`,
            background: '#F33E70',
            transition: 'width 0.5s',
          }}
        ></div>
      </div>
      <div className="text-center mt-1">
        <span className="donation-text">{`Current Donation: php${current}`}</span>
      </div>
    </Container>
  );
};
