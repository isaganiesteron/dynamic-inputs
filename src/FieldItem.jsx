import React from "react"

import { Stack, TextField, Grid, Button, Select, MenuItem } from "@mui/material"

const FieldItem = ({ index, prop2, prop3, prop4, addField, removeField }) => {
	return (
		<Grid container justifyContent={"space-around"}>
			<Grid item>
				<TextField disabled label="Input 1" defaultValue={""} size="small" fullWidth />
			</Grid>
			<Grid item>
				<TextField disabled label="Input 2" defaultValue="" size="small" fullWidth />
			</Grid>
			<Grid item>
				<TextField disabled label="Input 3" defaultValue="" size="small" fullWidth />
			</Grid>
			<Grid item>
				<TextField label="Input 4" defaultValue={prop4} size="small" fullWidth />
			</Grid>
			<Grid item>
				<Stack direction="row">
					<Button
						size="small"
						onClick={() => {
							console.log("remove " + index)
							removeField(index)
						}}
					>
						remove
					</Button>
					<Button
						size="small"
						onClick={() => {
							console.log("add " + index)
							addField(index)
						}}
					>
						add
					</Button>
				</Stack>
			</Grid>
		</Grid>
	)
}

export default FieldItem
