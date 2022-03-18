import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const mentor = () => {
	return (
		<Grid
			item
			xs={12}
			sm={8}
			md={5}
			mt={5}
			mx={10}
			my={10}
			component={Paper}
			elevation={6}
			square
		>
			<Box
				sx={{
					my: 8,
					mx: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "left",
				}}
			>
				<Grid container justifyContent="center" alignItems="center">
					<Grid item xs={4} mt={4}>
						<img
							src="/Group 28.png"
							width={"70%"}
							height={"273"}
							alt="metor-pic"
						/>
					</Grid>

					<Grid item xs={5} mt={4}>
						<Typography
							pb={1}
							component="h1"
							variant="h5"
							sx={{ fontWeight: "bold" }}
						>
							Mentor Name
						</Typography>

						<Grid container spacing={2}>
							<Grid item xs={6} mt={1}>
								<Typography pb={1} sx={{ fontWeight: "bold" }}>
									Location
								</Typography>
							</Grid>

							<Grid item xs={6} mt={1}>
								<Typography pb={1}>Chennai, India</Typography>
							</Grid>
						</Grid>
						<Divider sx={{ borderBottomWidth: 50 }} />
						<Divider sx={{ borderBottomWidth: 50 }} />

						<Grid container spacing={2}>
							<Grid item xs={6} mt={1}>
								<Typography pb={1} sx={{ fontWeight: "bold" }}>
									Mentor Industry
								</Typography>
							</Grid>

							<Grid item xs={6} mt={1}>
								<Typography pb={1}>
									Business Consulting/Coaching
								</Typography>
							</Grid>
						</Grid>
						<Divider sx={{ borderBottomWidth: 50 }} />
						<Divider sx={{ borderBottomWidth: 50 }} />

						<Grid container spacing={2}>
							<Grid item xs={6} mt={1}>
								<Typography pb={1} sx={{ fontWeight: "bold" }}>
									Languages Spoken
								</Typography>
							</Grid>

							<Grid item xs={6} mt={1}>
								<Typography pb={1}>
									English,French,German
								</Typography>
							</Grid>
						</Grid>
						<Divider sx={{ borderBottomWidth: 50 }} />
						<Divider sx={{ borderBottomWidth: 50 }} />

						<Grid container spacing={2}>
							<Grid item xs={6} mt={1}>
								<Typography pb={1} sx={{ fontWeight: "bold" }}>
									Recent Activity
								</Typography>
							</Grid>

							<Grid item xs={6} mt={1}>
								<Typography pb={1}></Typography>
							</Grid>
						</Grid>
						<Divider sx={{ borderBottomWidth: 50 }} />
						<Divider sx={{ borderBottomWidth: 50 }} />

						<Grid container spacing={2}>
							<Grid item xs={6} mt={1}>
								<Typography pb={1} sx={{ fontWeight: "bold" }}>
									Endorsements
								</Typography>
							</Grid>

							<Grid item xs={6} mt={1}>
								<Typography pb={1}>G-Tex</Typography>
							</Grid>
						</Grid>
						<Divider sx={{ borderBottomWidth: 50 }} />
						<Divider sx={{ borderBottomWidth: 50 }} />
					</Grid>

					<Grid item xs={2} justify="center" mt={15} mx={"auto"}>
						<Button
							type="submit"
							variant="contained"
							sx={{ mt: 1, mb: 0, backgroundColor: "#f2a02e" }}
						>
							Start a Conversation
						</Button>
					</Grid>
				</Grid>

				<div
					style={{
						borderTop: "5px solid #fe705f ",
						marginTop: 20,
						marginBottom: 20,
					}}
				></div>

				<Grid item xs={5} mt={4} mx={10}>
					<Typography
						pb={1}
						component="h1"
						variant="h5"
						color="#FF3F3F"
						sx={{ fontWeight: "bold" }}
					>
						How I can help
					</Typography>

					<Typography
						pb={1}
						mt={3}
						sx={{ fontWeight: "bold", fontSize: 17 }}
					>
						Professional Background
					</Typography>

					<Typography pb={1} mt={1} paragraph="true" align="justify">
						I started my professional life as an entrepreneur. I set
						up and ran my own business, a language school. I sold it
						when it reached its potential. At that time, I didn't
						know how to move it to the next level. Then, II moved to
						the corporate world: brokerage, insurance. Even though
						it was lucrative, I didn't get the inspiration I needed
						to thrive. At the time I thought that what was most
						important in life for me was security. Later, with
						personal development work I discovered that I am the
						kind of person that flourishes through human interaction
						and an inspiring vision founded on meaning. After my PhD
						in spiritual leadership and my dual role as teacher and
						researcher, I have been moving back to business. I am
						becoming my own boss again and building my business on
						coaching, mentoring and management consulting, I feel as
						if a long circle is closing. This time I have the
						experience and knowledge I didn't have when I started my
						professional life. I can be ahead of the game
					</Typography>
					<Divider sx={{ borderBottomWidth: 50 }} />
					<Divider sx={{ borderBottomWidth: 50 }} />

					<Typography
						pb={1}
						mt={3}
						sx={{
							fontWeight: "bold",
							fontSize: 18,
							color: "#d5a04f",
						}}
					>
						How to work with me
					</Typography>

					<Typography pb={1} mt={2} sx={{ fontWeight: "bold" }}>
						What I can offer
					</Typography>
					<Typography pb={1} mt={1} paragraph="true" align="justify">
						I can help them (1) clarify their purpose, their
						strengths & evaluate their entrepreneurial mindset (2)
						learn the skills they need to start their business and
						(3) develop their business plan. My work is informed by
						my scholarly research, my very own experience(s), trials
						and successes.
					</Typography>

					<Typography pb={1} mt={2} sx={{ fontWeight: "bold" }}>
						My expectations for a successful mentoring relationship
					</Typography>
					<Typography pb={1} mt={1} paragraph="true" align="justify">
						Expertise Punctuality and consistency
					</Typography>

					<Typography pb={1} mt={2} sx={{ fontWeight: "bold" }}>
						How entrepreneurs can prepare before we start
					</Typography>
					<Typography pb={1} mt={1} paragraph="true" align="justify">
						Explain clearly the issues they are facing.
					</Typography>
				</Grid>
			</Box>
		</Grid>
	);
};

export default mentor;
