import { useState, useEffect } from "react"
import { CssBaseline, Container, Card, CardContent, Typography, Stack, TextField, Grid, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material"

import NormalizedTagRule from "./NormalizedTagRule"

function App() {
	const tagsList = ["tag1", "tag2", "tag3", "tag4", "tag5"]
	const [formFieldValues, setFormFieldValues] = useState([
		{ normalizedTag: "Main", tags: "tag1" },
		{ normalizedTag: "Main", tags: "tag2" },
		{ normalizedTag: "Main", tags: "tag3" },
	])

	const removeRule = async (index) => {
		await resetForm()
		const tempFields = [...formFieldValues]
		tempFields.splice(index, 1)
		setFormFieldValues(tempFields)
	}
	const addRule = async (index) => {
		await resetForm()
		const tempFields = [...formFieldValues]
		tempFields.splice(index + 1, 0, { normalizedTag: "Main", tags: "" })
		setFormFieldValues(tempFields)
	}
	const updateValues = (index, newValue) => {
		console.log("Update index:" + index + " with tag:" + newValue)
		const tempFields = [...formFieldValues]
		tempFields.splice(index, 1, { normalizedTag: "Main", tags: newValue })
		setFormFieldValues(tempFields)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log("submit form")
		console.log(formFieldValues.map((x) => x.tags))
	}

	const resetForm = () => {
		return new Promise((resolve) => {
			// this is required to clear the form so it can be properly reloaded
			setFormFieldValues([])
			document.getElementById("tagForm").reset()
			resolve()
		})
	}

	useEffect(() => {
		console.log("fields updated")
		console.log(formFieldValues.map((x) => x.tags))
	}, [formFieldValues])

	return (
		<>
			<CssBaseline />
			<Container maxWidth={true}>
				<Card variant="outlined">
					<CardContent>
						<form id="tagForm" onSubmit={handleSubmit}>
							<Stack spacing={4}>
								<TextField label="Normalized" defaultValue={""} size="small" />
								{formFieldValues.map((x, index) => {
									return <NormalizedTagRule index={index} tagsList={tagsList} prop4={x.tags} addRule={addRule} removeRule={removeRule} updateValues={updateValues} />
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
