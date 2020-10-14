import React from "react";
import "./App.css";
import { InputExample } from "./Input.useImperativeHandle";
import { OrderedList, OrderedListItem } from "./OrderedList";
function App() {
  return (
    <div className="App">
      <h1 className="text-white">Hooks Example</h1>

      <OrderedList>
        <OrderedListItem>
          <InputExample></InputExample>
        </OrderedListItem>
      </OrderedList>
    </div>
  );
}

export default App;
