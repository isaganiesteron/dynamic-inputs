import { useState, useEffect } from "react"
import { CssBaseline, Container, Card, CardContent, Typography, Stack, TextField, Grid, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material"

const Item = ({ index, prop2, prop3, prop4 }) => {
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
				<TextField disabled label="Input 4" defaultValue={prop4} size="small" fullWidth />
			</Grid>
			<Grid item>
				<Stack direction="row">
					<Button size="small" onClick={() => console.log("remove " + index)}>
						remove
					</Button>
					<Button size="small" onClick={() => console.log("add " + index)}>
						add
					</Button>
				</Stack>
			</Grid>
		</Grid>
	)
}

function App() {
	const [fields, setFields] = useState([
		{ normalizedTag: "Main", tags: "tag1" },
		{ normalizedTag: "Main", tags: "tag2" },
		{ normalizedTag: "Main", tags: "tag3" },
	])

	console.log(fields)
	return (
		<>
			<CssBaseline />
			<Container maxWidth={true}>
				<Card variant="outlined">
					<CardContent>
						<Stack spacing={4}>
							<TextField label="Normalized" defaultValue={""} size="small" />
							{fields.map((x, index) => {
								return <Item index={index} prop4={x.tags} />
							})}
						</Stack>
					</CardContent>
				</Card>
			</Container>
		</>
	)
}

export default App
