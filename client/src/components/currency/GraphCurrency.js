import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./currency.scss";
import "./graphcurrency.scss";

const GraphCurrency = ({ name, one, two, three, four, five }) => {
	const [chartData, setChartData] = useState({});
	const chart = () => {
		setChartData({
			labels: ["5d", "72h", "48h", "24h", "Today"],
			datasets: [
				{
					label: "5 days evolution",
					data: [one, two, three, four, five],
					backgroundColor: [
						"rgba(75, 192, 192, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(75, 192, 192, 0.2)",
					],
					borderColor: [
						"rgba(75, 192, 192, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(75, 192, 192, 1)",
					],
					borderWidth: 1,
				},
			],
		});
	};

	useEffect(() => {
		chart();
	}, []);

	return (
		<div>
			<p className="container">
				<div className="chart">
					<Line
						data={chartData}
						options={{
							plugins: {
								legend: {
									display: false,
								},
							},
						}}
					/>
				</div>
			</p>
		</div>
	);
};
export default GraphCurrency;
