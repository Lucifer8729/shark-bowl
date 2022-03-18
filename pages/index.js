import React from "react";

import { Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

import Tab1 from "../components/HomePageTab/Tab1.js";
// import Tab2 from "../components/HomePageTab/Tab2.js";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			style={{ width: "100%" }}
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function Home() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				p: 5,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
				How Does Shark Bowl Work?
			</Typography>
			<Typography
				variant="h4"
				sx={{ fontWeight: "bold", color: "white" }}
			>
				Here&aposs how Shark Bowl makes small businesses thrive
			</Typography>

			<Tabs
				value={value}
				onChange={handleChange}
				TabIndicatorProps={{
					style: {
						backgroundColor: "white",
					},
				}}
			>
				<Tab
					style={{ color: "white" }}
					label="For Entrepreneurs"
					{...a11yProps(0)}
				/>
				<Tab
					style={{ color: "white" }}
					label="For Mentors/Investors"
					{...a11yProps(1)}
				/>
			</Tabs>
			<TabPanel value={value} index={0}>
				<Tab1 />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Tab1 />
			</TabPanel>
		</Box>
	);
}
