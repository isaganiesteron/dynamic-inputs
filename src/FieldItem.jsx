import React from "react"

import { Stack, TextField, Grid, Button, Select, MenuItem } from "@mui/material"

const FieldItem = ({ index, tagsList, prop2, prop3, prop4, addField, removeField, updateTag }) => {
	const [tag, setTag] = React.useState(prop4)
	const handleChange = (event) => {
		setTag(event.target.value)
		updateTag(index, event.target.value)
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
				<Select labelId="demo-select-small-label" id="demo-select-small" value={tag} label="Age" onChange={handleChange} size="small">
					<MenuItem value="none">
						<em>None</em>
					</MenuItem>
					{tagsList.map((x, index) => (
						<MenuItem key={index} value={x}>
							{x}
						</MenuItem>
					))}
				</Select>
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
