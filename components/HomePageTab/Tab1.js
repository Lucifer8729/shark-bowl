import React from "react";
import Image from "next/image";

import { Grid } from "@mui/material";

const Tab1 = () => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="space-around"
			alignItems="flex-start"
		>
			<Grid item>hello</Grid>
			<Grid item>
				{
					//     <Image
					// 	src="/assets/join.svg"
					// 	height="2rem"
					// 	width="2rem"
					// 	alt="join"
					// />
				}
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
				>
					<Grid item>Join</Grid>
					<Grid item>Explore</Grid>
					<Grid item>Connect</Grid>
					<Grid item>Grow</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Tab1;
