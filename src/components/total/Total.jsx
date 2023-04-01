import SumBox from "../sum-box/SumBox";
import './Total.css'
const Total = () => {
  const userArr = [
    {
      created_at: "20-12-2007",
      type: "income",
      category: "salary",
      amount: 5000
    },
    {
      created_at: "10-4-2017",
      type: "expense",
      category: "s",
      amount: 125
    },
    {
      created_at: "20-01-1997",
      type: "expense",
      category: "shopping",
      amount: 600
    },
    {
      created_at: "02-02-2002",
      type: "expense",
      category: "family",
      amount: 2000
    }
  ];

  const amounts = userArr.reduce(
    (acc, item) => {
      if (item.type === "income") {
        acc.income += item.amount;
      } else if (item.type === "expense") {
        acc.expense += item.amount;
      }
      return acc;
    },
    { income: 0, expense: 0, difference: 0 }
  );

  amounts.difference = amounts.income - amounts.expense;

  return (
    <div className="flex">
      <SumBox text="income" amount={amounts.income} />
      <SumBox text="difference" amount={amounts.difference} />
      <SumBox text="expense" amount={amounts.expense} />
    </div>
  );
};

export default Total;