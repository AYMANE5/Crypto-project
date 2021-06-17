import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import "./portfolio.scss";

const GraphCurrency = ({ name, one, two, three, four, five }) => {
	const [chartData, setChartData] = useState({});
	const chart = () => {
		setChartData({
			labels: ["btc", "eth", "btc", "ltc", "usdt"],
			datasets: [
				{
					type: "doughnut",
					label: "USD($) ",
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
					borderWidth: 3,
				},
			],
		});
	};

	useEffect(() => {
		chart();
	}, []);

	return (
		<>
			<p>
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
		</>
	);
};
export default GraphCurrency;
