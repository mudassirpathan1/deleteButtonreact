
// import React from "react";

// import "./Expense.css";

// const Expense = (props) =>{
//   const clickHandler= ()=>{
//     console.log("Clicked!!");
//   }
//     return ( 
//         <div >
//       <div className="expense-item">
//         <div>{props.date}</div>
//         <div className="expense-item__description">
//           <h2>{props.type}</h2>
//           <div className="expense-item__price">{props.price}</div>


//         </div>
        
//       </div>
// <button onClick={clickHandler}>Delete Expense</button>
// </div>
//     )
//   }
// export default Expense;



import React from "react";

import "./Expense.css";

const Expense = (props) =>{
  const clickHandler= ()=>{
    props.onDelete(props.id);
  }
    return ( 
        <div >
      <div className="expense-item">
        <div>{props.date}</div>
        <div className="expense-item__description">
          <h2>{props.type}</h2>
          <div className="expense-item__price">{props.price}</div>


        </div>
        
      </div>
<button onClick={clickHandler}>Delete Expense</button>
</div>
    )
  }
export default Expense;
