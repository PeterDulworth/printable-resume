import React, { useRef } from 'react';
import './App.scss';
import PrintableResume from './components/PrintableResume';
import ReactToPrint from 'react-to-print';

const App = () => {
  const componentRef = useRef(null);

  return (
    <div className="App">
      <div className="print-wrapper">
        <ReactToPrint
          trigger={() => <a href="#">print resume</a>} // eslint-disable-line
          content={() => componentRef.current}
        />
      </div>
      <div className="content-wrapper">
        <PrintableResume ref={componentRef} />
      </div>
    </div>
  );
};

export default App;
