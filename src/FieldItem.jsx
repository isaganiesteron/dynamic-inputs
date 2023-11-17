import React from "react"

import { Stack, TextField, Grid, Button, Select, MenuItem, Autocomplete } from "@mui/material"

const FieldItem = ({ index, tagsList, prop2, prop3, prop4, addField, removeField, updateTag }) => {
	const [inputValue, setInputValue] = React.useState(prop4)
	const [options, setOptions] = React.useState(["", "tag1", "tag2", "tag3", "tag4", "tag5"])

	const handleInputChange = (newValue) => {
		setInputValue(newValue)
		updateTag(index, newValue)
	}
	return (
		<Grid container justifyContent={"space-around"}>
			<Grid item>
				<TextField disabled label="Input 1" defaultValue="" size="small" fullWidth />
			</Grid>
			<Grid item>
				<TextField disabled label="Input 2" defaultValue="" size="small" fullWidth />
			</Grid>
			<Grid item>
				<TextField disabled label="Input 3" defaultValue="" size="small" fullWidth />
			</Grid>
			<Grid item>
				<Autocomplete
					sx={{ minWidth: "200px" }}
					isOptionEqualToValue={() => true} //since we have a custom automcomplete that accepts custom text you have to set this to true
					options={options}
					noOptionsText="Enter to create a new tag"
					getOptionLabel={(option) => option}
					onInputChange={(e, newValue) => handleInputChange(newValue)}
					value={inputValue}
					renderInput={(params) => (
						<TextField
							{...params}
							variant="outlined"
							onKeyDown={(e) => {
								if (e.key === "Enter" && options.findIndex((o) => o === inputValue) === -1) {
									setOptions((o) => o.concat(inputValue))
								}
							}}
						/>
					)}
					size="small"
					fullWidth
				/>
			</Grid>
			<Grid item>
				<Stack direction="row">
					<Button size="small" onClick={() => removeField(index)}>
						remove
					</Button>
					<Button size="small" onClick={() => addField(index)}>
						add
					</Button>
				</Stack>
			</Grid>
		</Grid>
	)
}

export default FieldItem
