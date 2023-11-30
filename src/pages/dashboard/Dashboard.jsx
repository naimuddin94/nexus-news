import Chart from "react-google-charts";
import useArticles from "../../hooks/useArticles";

const Dashboard = () => {
  const { articles } = useArticles();

  const publisherData = {};

  articles.forEach((article) => {
    const { name } = article.publisher;

    if (!publisherData[name]) {
      publisherData[name] = {
        articleCount: 0,
        totalViews: 0,
      };
    }

    publisherData[name].articleCount++;
    publisherData[name].totalViews += article.views || 0;
  });

  const chartData = [["Publisher", "Article Count", "Total Views"]];

  Object.keys(publisherData).forEach((publisher) => {
    chartData.push([
      publisher,
      publisherData[publisher].articleCount,
      publisherData[publisher].totalViews,
    ]);
  });

  const options = {
    title: "Publisher Analysis",
  };

  const barOptions = {
    chart: {
      title: "Performance",
      subtitle: "News publish from: 2022-2023",
    },
  };

  return (
    <div>
      <div>
        <Chart
          chartType="PieChart"
          data={chartData}
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
          data={chartData}
          options={barOptions}
        />
      </div>
    </div>
  );
};

export default Dashboard;
