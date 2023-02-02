

import Expense from "./component/Expense.jsx";

function App(date,type,price) {
 
  return (
    <div className="App">
  
      <b><h1>Expenses Menu</h1></b>
      <Expense date={"july 2022"} type={"car insurance"} price={"$231"}/>
      <Expense date={"july 2023"} type={"phone insurance"} price={"$21"}/>


    </div>
  );
}

export default App;

