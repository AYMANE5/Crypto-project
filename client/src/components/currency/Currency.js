import React from "react";
import "./currency.scss";
import ChartCard from "./ChartCard.js";

const Currency = () => {
	return (
		<>
			<div className="mat">
				<ChartCard name="bitcoin" />
				<ChartCard name="ethereum" />
				<ChartCard name="litecoin" />
				<ChartCard name="dogecoin" />
				<ChartCard name="cosmos" />
				<ChartCard name="metal" />
			</div>
		</>
	);
};

export default Currency;
