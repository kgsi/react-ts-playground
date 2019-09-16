import * as React from "react";
import { render } from "react-dom";
import getRandomStr from "./modules/getRandomStr";
import PropsChild from "./Components/PropsChild";

import "./styles.css";
import { any, object } from "prop-types";

const dummyTableData = Array.from({ length: 5 }, (v, i) => {
  return {
    id: i,
    name: getRandomStr()
  };
});

function App() {
  const [tableData, setTableData] = React.useState(dummyTableData);
  const [calc, setCalc] = React.useState("");

  React.useEffect(() => {
    // console.log("hoge");
    console.log(tableData);
  });

  const handleClick = stateObject => {
    setTableData(oldArray => [
      ...oldArray,
      {
        id: tableData.length + 1,
        name: "ssss"
      }
    ]);
  };

  const handleChange = event => {
    event.persist();
    setCalc(oldCalc => {
      return oldCalc + event.target.value;
    });
  };

  const addCalc = value => {
    setCalc(oldCalc => {
      return oldCalc + value;
    });
  };

  const handleInputCalc = event => {
    setCalc(event.target.value);
  };

  const deleteTableRow = index => {
    setTableData(tableData.filter((n, i) => i !== index));
  };
  return (
    <div className="App">
      <div className="container">
        <section className="row mb-4">
          <div className="col">
            <h2>Example React with Typescript</h2>
          </div>
        </section>
        <section className="row mb-4">
          <div className="col">
            <h3>Add Table</h3>
          </div>
        </section>
        <section className="row mb-4">
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>action</th>
                </tr>
                {tableData.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <button
                          onClick={() => {
                            deleteTableRow(index);
                          }}
                        >
                          削除
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <PropsChild
              value="Prop"
              updateState={stateObject => handleClick(stateObject)}
            >
              Add Item
            </PropsChild>
            <hr />
          </div>
        </section>
        <section className="row mb-4">
          <div className="col">
            <select className="custom-select" onChange={handleChange}>
              <option selected>Choice val</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={() => addCalc("+")}>
              ＋
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => addCalc("-")}>
              ー
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => addCalc("*")}>
              ✕
            </button>
            &nbsp;
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="calc"
              value={calc}
              onChange={handleInputCalc}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
