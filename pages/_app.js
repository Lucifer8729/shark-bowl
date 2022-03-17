import "../styles/globals.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="sticky" sx={{ boxShadow: "none" }}>
					<Toolbar
						variant="dense"
						sx={{ backgroundColor: "#fe8c7d" }}
					>
						<Typography variant="h6" sx={{ flexGrow: 1 }}>
							LOGO
						</Typography>
						<Button color="inherit">LOGO</Button>
					</Toolbar>
				</AppBar>
				<AppBar
					position="sticky"
					sx={{ boxShadow: "0px 0.5px 1px black" }}
				>
					<Toolbar
						variant="dense"
						sx={{ backgroundColor: "#fe8c7d" }}
					>
						<Box
							sx={{
								flexGrow: 1,
								display: {
									xs: "none",
									md: "flex",
								},
							}}
						>
							<Button
								sx={{
									color: "black",
									fontWeight: "bold",
									display: "block",
								}}
							>
								#SharkBowl
							</Button>
							<Button
								sx={{
									color: "black",
									fontWeight: "bold",
									display: "block",
								}}
							>
								Find Entrepreneurs
							</Button>
							<Button
								sx={{
									color: "black",
									fontWeight: "bold",
									display: "block",
								}}
							>
								Find Mentors
							</Button>
							<Button
								sx={{
									color: "black",
									fontWeight: "bold",
									display: "block",
								}}
							>
								Find Icubators
							</Button>
							<Button
								sx={{
									color: "black",
									fontWeight: "bold",
									display: "block",
								}}
							>
								Find Accelerators
							</Button>
							<Button
								sx={{
									color: "black",
									fontWeight: "bold",
									display: "block",
								}}
							>
								Find Investoors
							</Button>
						</Box>
						<Box
							sx={{
								display: {
									xs: "none",
									md: "flex",
								},
							}}
						>
							<Button
								sx={{
									color: "black",
									fontWeight: "bold",
									display: "block",
								}}
							>
								sign in
							</Button>
							<Button
								sx={{
									color: "black",
									fontWeight: "bold",
									display: "block",
								}}
							>
								sign up
							</Button>
							<IconButton
								sx={{
									color: "black",
									fontWeight: "bold",
									display: "block",
								}}
							>
								<PersonIcon />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
				<Component {...pageProps} />
			</Box>
		</>
	);
}

export default MyApp;
