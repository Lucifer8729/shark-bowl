import React from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";

export default function EntrepreneursPortal() {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		// GET request using axios inside useEffect React hook
		axios.get("http://localhost:3000/api/enform").then((response) => {
			setData(response.data.data);
			// console.log(data);
		});
	}, []);

	return (
		<div>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					p: 1,
					my: 5,
					mx: 12,
					bgcolor: "background.paper",
					borderRadius: 1,
				}}
			>
				<Grid
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 2 }}
				>
					<Grid item xs={5} sx={{ m: 2 }}>
						<Typography variant="h5">
							Find Entrepreneurs and Connect!
						</Typography>
						<Box sx={{ my: 4 }}>
							<Typography variant="h6">
								Filter Results by:
							</Typography>
							<Input placeholder="Search" />
						</Box>

						<Box sx={{ my: 4 }}>
							<Typography variant="h6">Industry:</Typography>
							<Input placeholder="" />
						</Box>

						<Box sx={{ my: 4 }}>
							<Typography variant="h6">Experties:</Typography>
							<Input placeholder="" />
						</Box>

						<Button variant="outlined">Filter Results</Button>
					</Grid>

					<Grid item xs={5} sx={{ mx: 2, mt: 18 }}>
						<Box sx={{ my: 4 }}>
							<Typography variant="h6">Language:</Typography>
							<Input placeholder="" />
						</Box>

						<Box sx={{ my: 4 }}>
							<Typography variant="h6">
								Country of Operation:
							</Typography>
							<Input placeholder="" />
						</Box>
					</Grid>
				</Grid>
			</Box>

			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				sx={{ pl: 4, mb: 4 }}
			>
				<Grid item>
					<Grid
						container
						direction="row"
						justifyContent="flex-start"
						alignItems="flex-start"
						spacing={4}
					>
						{data.length != 0
							? data.map((obj) => {
									// console.log(data);

									return (
										<Grid item key={obj._id}>
											<Card sx={{ maxWidth: 345 }}>
												<CardMedia
													component="img"
													height="140"
													image="/static/images/cards/contemplative-reptile.jpg"
													alt="profile"
												/>
												<CardContent>
													<Typography
														gutterBottom
														variant="h5"
														component="div"
													>
														{obj.firstName +
															" " +
															obj.lastName}
													</Typography>
													<Typography
														variant="body2"
														color="text.secondary"
													>
														Lorem Ipsum is simply
														dummy text of the
														printing and typesetting
														industry. Lorem Ipsum
														has been the industrys
														standard dummy text ever
														since the 1500s, when an
														unknown printer took a
														galley of type and
														scrambled it to make a
														type specimen book.
													</Typography>
												</CardContent>
												<CardActions>
													<Button
														size="small"
														color="primary"
														href={`${obj._id}`}
													>
														View Profile
													</Button>
												</CardActions>
											</Card>
										</Grid>
									);
							  })
							: null}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
