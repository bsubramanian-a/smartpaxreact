import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let divs = [];
  for (let index = 0; index < 100; index++) {    
    divs.push((index == 0)?<div className='first-div'>first div</div>:<div className='inner-div'>index</div>);
  }

  return (
    <div className="App">
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>


      <div className='my-5'>Next table</div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      <div className='wrapper-table'>
        {divs}
      </div>
      {/* <table>
        <thead>
          <tr>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
