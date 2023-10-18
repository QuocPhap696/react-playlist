import logo from './logo.svg';
import './App.css';
// import Content from './component/Content';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Customer from './baitap/Customer';
// import AddCustomer from '../../musicapp/src/baitap/AddCustomer';

function App() {
  // const [show, setShow] = useState(false);
  return (
    // <Content/>
    // <AddCustomer/>,
    <Customer/>
  );
}

export default App;
