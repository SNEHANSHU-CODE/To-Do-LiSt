
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import DataInput from './components/DataInput';
import TableData from './components/TableData';

import {BrowserRouter as React } from 'react-router-dom';

function App() {
  return (
  <>
      <Navbar />
      <DataInput />
      <TableData />
      <Footer />
    </>
  )
}


export default App;
