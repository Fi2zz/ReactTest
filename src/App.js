import React from "react";
import "./App.css";
import { InputExample } from "./Input.useImperativeHandle";
import { OrderedList, OrderedListItem } from "./OrderedList";
function App() {
  return (
    <div className="App">
      <OrderedList>
        <OrderedListItem>
          <InputExample></InputExample>
        </OrderedListItem>
      </OrderedList>
    </div>
  );
}

export default App;
