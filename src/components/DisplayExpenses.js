import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

function DisplayExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default DisplayExpenses;
