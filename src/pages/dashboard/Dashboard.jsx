import Chart from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const barData = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

const options = {
  title: "Publisher Analysis",
};


const barOptions = {
  chart: {
    title: "Performance",
    subtitle: "News publish from: 2014-2017",
  },
};

const Dashboard = () => {
  return (
    <div>
      <div>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <div>
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={barData}
          options={barOptions}
        />
      </div>
    </div>
  );
};

export default Dashboard;
