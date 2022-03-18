import React from "react";
import Image from "next/image";

import { Grid,Typography } from "@mui/material";

const Tab1 = () => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="space-around"
			alignItems="flex-start"
			spacing={6}
		>
			<Grid item><img  src="/hello.png"  width={'489'} height={'419'} alt="metor-pic"/></Grid>
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
					//justifyContent="center"
					//alignItems="center"
				>
					<Grid item>
					<Grid container  >
					<Grid item  md={4} >
					<img  src="/join.png"   alt="metor-pic"/>
					</Grid>
					<Grid item  md={4}>
					<Typography pb={1} component="h1" variant="h5" sx={{ fontWeight: 'bold', color:"white" }}>
                        Join
                    </Typography>
					<Typography pb={1} mt={1} paragraph="true" align="justify" sx={{ color:"white" }}>
					Set up a profile on SharkBowl to share who you are and show mentors what you need help with.
					</Typography>
					</Grid>
						</Grid>
					
					</Grid>
					<Grid item>
					<Grid container  >
					<Grid item  md={4} >
					<img  src="/explore.png"   alt="metor-pic"/>
					</Grid>
					<Grid item  md={4}>
					<Typography pb={1} component="h1" variant="h5" sx={{ fontWeight: 'bold', color:"white" }}>
                        Explore
                    </Typography>
					<Typography pb={1} mt={1} paragraph="true" align="justify" sx={{ color:"white" }}>
					Read profiles of mentors who have the experience, background, and knowledge you're looking for.
					</Typography>
					</Grid>
						</Grid>
					</Grid>

					<Grid item>
					<Grid container  >
					<Grid item  md={4} >
					<img  src="/connect.png"   alt="metor-pic"/>
					</Grid>
					<Grid item  md={4}>
					<Typography pb={1} component="h1" variant="h5" sx={{ fontWeight: 'bold', color:"white" }}>
                        Connect
                    </Typography>
					<Typography pb={1} mt={1} paragraph="true" align="justify" sx={{ color:"white" }}>
					Reach out to potential mentors by sending them a message. Start a conversation.
					</Typography>
					</Grid>
						</Grid>
					</Grid>
					
					<Grid item>
					<Grid container  >
					<Grid item  md={4} >
					<img  src="/grow.png"   alt="metor-pic"/>
					</Grid>
					<Grid item  md={4}>
					<Typography pb={1} component="h1" variant="h5" sx={{ fontWeight: 'bold', color:"white" }}>
                        Grow
                    </Typography>
					
					<Typography pb={1} mt={1} paragraph="true" align="justify" sx={{ color:"white" }}>
					Now you’ve found your mentor. Ask questions. Share. Listen. 
					</Typography>
					</Grid>
						</Grid>
					</Grid>

					

					
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Tab1;
