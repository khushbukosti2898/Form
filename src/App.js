import React from 'react';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <h2>Form</h2>
      <form>
        <label>First Name</label>
        <input type="text" name="firstname" onChange={props.getData}></input><br/><br/>
        <label>Last Name</label>
        <input type="text" name="lastname" onChange={props.getData}></input>
      </form>
      <button onClick={props.display}>Submit</button>

    </div>

  );
}

export default App;
