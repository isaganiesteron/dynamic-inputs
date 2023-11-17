import { useState, useEffect } from "react"
import { CssBaseline, Container, Card, CardContent, Typography, Stack, TextField, Grid, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material"

import FieldItem from "./FieldItem"

function App() {
	const tagsList = ["tag1", "tag2", "tag3", "tag4", "tag5"]
	const [fields, setFields] = useState([
		{ normalizedTag: "Main", tags: "tag1" },
		{ normalizedTag: "Main", tags: "tag2" },
		{ normalizedTag: "Main", tags: "tag3" },
	])

	const addField = async (index) => {
		await resetForm()
		const tempFields = [...fields]
		tempFields.splice(index + 1, 0, { normalizedTag: "Main", tags: "new tag" })
		setFields(tempFields)
	}
	const removeField = async (index) => {
		await resetForm()
		const tempFields = [...fields]
		tempFields.splice(index, 1)
		setFields(tempFields)
	}
	const updateTag = (index, newValue) => {
		console.log("Update index:" + index + " with tag:" + newValue)
		const tempFields = [...fields]
		tempFields.splice(index, 1, { normalizedTag: "Main", tags: newValue })
		setFields(tempFields)
	}

	useEffect(() => {
		console.log("fields updated")
		console.log(fields.map((x) => x.tags))
	}, [fields])

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log("submit form")
		console.log(fields.map((x) => x.tags))
	}

	const resetForm = () => {
		return new Promise((resolve) => {
			// this is required to clear the form so it can be properly reloaded
			setFields([])
			document.getElementById("tagForm").reset()
			resolve()
		})
	}

	return (
		<>
			<CssBaseline />
			<Container maxWidth={true}>
				<Card variant="outlined">
					<CardContent>
						<form id="tagForm" onSubmit={handleSubmit}>
							<Stack spacing={4}>
								<TextField label="Normalized" defaultValue={""} size="small" />
								{fields.map((x, index) => {
									return <FieldItem index={index} tagsList={tagsList} prop4={x.tags} addField={addField} removeField={removeField} updateTag={updateTag} />
								})}
								<Button type="submit">Submit</Button>
							</Stack>
						</form>
					</CardContent>
				</Card>
			</Container>
		</>
	)
}

export default App
