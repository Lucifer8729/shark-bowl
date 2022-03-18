import React from "react";
import axios from "axios";

import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const EntrepreneursRegistration = () => {
	const [submitObj, setSubmitObj] = React.useState({
		firstName: "",
		lastName: "",
		country: "",
		state: "",
		city: "",
		phone: "",
	});

	const [state, setState] = React.useState({
		gilad: true,
		jason: false,
		antoine: false,
	});
	const [age, setAge] = React.useState("");
	const { gilad, jason, antoine } = state;

	const handleFirstName = (e) => {
		const name = e.target.value;
		setSubmitObj((prevValue) => {
			return { ...prevValue, firstName: name };
		});
	};
	const handleLastName = (e) => {
		const name = e.target.value;
		setSubmitObj((prevValue) => {
			return { ...prevValue, lastName: name };
		});
	};
	const handleCountry = (e) => {
		const name = e.target.value;
		setSubmitObj((prevValue) => {
			return { ...prevValue, country: name };
		});
	};
	const handleState = (e) => {
		const name = e.target.value;
		setSubmitObj((prevValue) => {
			return { ...prevValue, state: name };
		});
	};
	const handleCity = (e) => {
		const name = e.target.value;
		setSubmitObj((prevValue) => {
			return { ...prevValue, city: name };
		});
	};
	const handlePhone = (e) => {
		const name = e.target.value;
		setSubmitObj((prevValue) => {
			return { ...prevValue, phone: name };
		});
	};

	const handleChange = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};

	const handleChange2 = (event) => {
		setAge(event.target.value);
	};

	const handleSubmit = () => {
		console.log("submitting");
		axios({
			method: "post",
			url: "http://localhost:3000/api/enform",
			data: submitObj,
		});
	};

	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					mt: 5,
					p: 5,
					width: "80%",
					backgroundColor: "white",
					borderRadius: "0 15px 0 15px",
					mb: 5,
				}}
			>
				<TextField
					sx={{ width: "48%", m: 1 }}
					label="First Name"
					variant="outlined"
					value={submitObj.firstName}
					onChange={handleFirstName}
				/>
				<TextField
					sx={{ width: "48%", m: 1 }}
					label="Last Name"
					variant="outlined"
					value={submitObj.lastName}
					onChange={handleLastName}
				/>
				<br />
				<Button
					sx={{ width: "50%", m: 1 }}
					variant="contained"
					component="label"
				>
					Upload your profile picture
					<input type="file" hidden />
				</Button>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Country of Residence"
					variant="outlined"
					value={submitObj.country}
					onChange={handleCountry}
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="State/Province/Residence"
					variant="outlined"
					value={submitObj.state}
					onChange={handleState}
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="City"
					variant="outlined"
					value={submitObj.city}
					onChange={handleCity}
				/>
				<br />
				<TextField
					sx={{ width: "50%", m: 1 }}
					label="Phone Number"
					variant="outlined"
					value={submitObj.phone}
					onChange={handlePhone}
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="How many years of business management experience do you have?"
					variant="outlined"
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="How many years of ownership exxperience do you have?"
					variant="outlined"
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="What is your primary Industry"
					variant="outlined"
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Your Company"
					variant="outlined"
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Your role at this Company"
					variant="outlined"
				/>
				<br />

				<Box sx={{ display: "flex" }}>
					<FormControl
						sx={{ m: 3 }}
						component="fieldset"
						variant="standard"
					>
						<FormLabel component="legend">
							What Industry do you work in?
						</FormLabel>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										checked={gilad}
										onChange={handleChange}
										name="gilad"
									/>
								}
								label="Gilad Gray"
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={jason}
										onChange={handleChange}
										name="jason"
									/>
								}
								label="Jason Killian"
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={antoine}
										onChange={handleChange}
										name="antoine"
									/>
								}
								label="Antoine Llorca"
							/>
						</FormGroup>
					</FormControl>
				</Box>

				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Website"
					variant="outlined"
				/>
				<br />

				<TextField
					sx={{ width: "100%", m: 1 }}
					label="About me: Describe your professional background"
					multiline
					rows={3}
				/>

				<TextField
					sx={{ width: "100%", m: 1 }}
					label="What languages do you speak fluently"
					variant="outlined"
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Birth Year"
					variant="outlined"
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Gender"
					variant="outlined"
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="In which countries do you have professional business experience"
					variant="outlined"
				/>
				<br />

				<Typography sx={{ m: 2 }} variant="h5">
					What I need help with:
				</Typography>
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="My background as an Entrepreneures:"
					multiline
					rows={3}
				/>
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="My achievements:"
					multiline
					rows={4}
				/>
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="MY future goals:"
					multiline
					rows={3}
				/>

				<Typography sx={{ m: 2 }} variant="h5">
					About my venture:
				</Typography>
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Venture Name"
					multiline
					rows={3}
				/>
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Venture Description"
					multiline
					rows={4}
				/>

				<FormControl fullWidth sx={{ m: 1 }}>
					<InputLabel>Industry</InputLabel>
					<Select
						value={age}
						label="Industry"
						onChange={handleChange2}
					>
						<MenuItem value={10}>FinTech</MenuItem>
						<MenuItem value={20}>Ecommerce</MenuItem>
						<MenuItem value={30}>EdTech</MenuItem>
						<MenuItem value={40}>Healthcare</MenuItem>
						<MenuItem value={50}>Artificial Intelligence</MenuItem>
					</Select>
				</FormControl>

				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Udyog Aadhaar"
					variant="outlined"
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Company Incorporation Number"
					variant="outlined"
				/>
				<br />
				<TextField
					sx={{ width: "100%", m: 1 }}
					label="Legal Name"
					variant="outlined"
				/>
				<br />

				<Button variant="contained" onClick={handleSubmit}>
					Submit
				</Button>
			</Box>
		</Box>
	);
};

export default EntrepreneursRegistration;
