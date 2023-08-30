import ExpenseItem from "./ExpenseItem";
import Chart from "./chart/chart";

const ExpenseChart = (Props) => {
  const chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "april", value: 0 },
    { label: "may", value: 0 },
    { label: "june", value: 0 },
    { label: "july", value: 0 },

    { label: "aug", value: 0 },
    { label: "sept", value: 0 },
    { label: "oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  for (const expense of Props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpenseChart;
