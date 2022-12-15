import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cell from "./components/Cell";

function App() {
  let tables:any = [];
  let columns = ["Compact 1", "timeline", "people", "date", 'Numbers', 'Formula1', 'Dropdown', 'status', 'item id', 'creation log', 'last updated', 'etz', 'etzs value', 'date & time', 'flooder temp', 'chlorine'];
  let row = 5;
  let jsonData = [
    [
      'Item', "Compact 1", "timeline", "people", "date", 'Numbers', 'Formula1', 'Dropdown', 'status', 'item id', 'creation log', 'last updated', 'etz', 'etzs value', 'date & time', 'flooder temp', 'chlorine'
    ],
    [
      "row1", '1', 'wed nov 9', 'Raj1', '23/11/2002', 1, 'sum(10 + 2)', 'abc', 'success', 123, 'success', '24/11/2002', '24/11/2002', 1, 2, '24/11/2002 11:10', 2, 24 
    ],
    [
      "row1", '1', 'wed nov 9', 'Raj1', '23/11/2002', 1, 'sum(10 + 2)', 'abc', 'success', 123, 'success', '24/11/2002', '24/11/2002', 1, 2, '24/11/2002 11:10', 2, 24 
    ],
    [
      "row1", '1', 'wed nov 9', 'Raj1', '23/11/2002', 1, 'sum(10 + 2)', 'abc', 'success', 123, 'success', '24/11/2002', '24/11/2002', 1, 2, '24/11/2002 11:10', 2, 24 
    ],
    [
      "row1", '1', 'wed nov 9', 'Raj1', '23/11/2002', 1, 'sum(10 + 2)', 'abc', 'success', 123, 'success', '24/11/2002', '24/11/2002', 1, 2, '24/11/2002 11:10', 2, 24 
    ],
    [
      "row1", '1', 'wed nov 9', 'Raj1', '23/11/2002', 1, 'sum(10 + 2)', 'abc', 'success', 123, 'success', '24/11/2002', '24/11/2002', 1, 2, '24/11/2002 11:10', 2, 24 
    ],
    [
      "row1", '1', 'wed nov 9', 'Raj1', '23/11/2002', 1, 'sum(10 + 2)', 'abc', 'success', 123, 'success', '24/11/2002', '24/11/2002', 1, 2, '24/11/2002 11:10', 2, 24 
    ]
  ]
  for (let index = 0; index < columns.length; index++) {
    tables.push(
      index == 0 ? (
        <Cell title={columns[index]} type="firstcolumn"></Cell>
      ) : (
        <Cell title={columns[index]} type="header"></Cell>
      )
    );
  }

  return (
    <div className="App">
      <div>
        {Array.from(Array(row)).map((e, i) => {
          return (
            <div className="wrapper-table">
              {tables.map((data:any) => {
                return data;
              })}
            </div>
          );
        })}
      </div>

      {/* <div className='my-5'>Table 2</div>
      <div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
        <div className='wrapper-table'>
          {table2}
        </div>
      </div> */}
    </div>
  );
}

export default App;
