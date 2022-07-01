import "../css/form.css";
import { useSelector, useDispatch } from "react-redux";
// import { addRecipe } from "../actions/index.js";
import { useState } from "react";
import {addRecipeAsync} from '../redux/recipes/thunks';

export default function Form() {
	const count = useSelector((state) => state.modifyRecipe);

	const dispatch = useDispatch();

	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		if (name === "image") {
			console.log("in form ");
			console.log(URL.createObjectURL(event.target.files[0]));
			setInputs((values) => ({
				...values,
				[name]: URL.createObjectURL(event.target.files[0])
			}));
		} else {
			setInputs((values) => ({ ...values, [name]: value }));
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("inputs: ");
		console.log(inputs);
		dispatch(addRecipeAsync(inputs));
	};

	const resetForm = (event) => {
		event.preventDefault();
		Object.keys(inputs).forEach((key, index) => {
			setInputs((values) => ({ ...values, [key]: "" }));
		});
	};

	return (
		<div>
			<form className="recipe-form" onSubmit={handleSubmit}>
				<label>
					<span>Recipe&nbsp;Title&nbsp;:</span>
					<input
						type="text"
						name="title"
						value={inputs.title}
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					<span>Ingredients&nbsp;*&nbsp;:</span>
					<textarea
						name="ingredients"
						value={inputs.ingredients}
						onChange={handleChange}
						required
					></textarea>
				</label>

				<label>
					<span>Instructions&nbsp;*&nbsp;:</span>
					<textarea
						name="instructions"
						value={inputs.instructions}
						onChange={handleChange}
						required
					></textarea>
				</label>

				<label>
					<span>Time&nbsp;Needed&nbsp;(mins):</span>
					<input type="number" name="time" value={inputs.time} onChange={handleChange} step="1"/>
				</label>

				<label>
					<span>Tips&nbsp;&&nbsp;Notes&nbsp;*^:</span>
					<textarea
						name="tips"
						value={inputs.tips}
						onChange={handleChange}
					></textarea>
				</label>

				<label>
					<span>Upload&nbsp;image:</span>
					<input type="file" name="image" onChange={handleChange} required />
				</label>


				<label className="note">* separate items using semicolon</label>
				<label className="note">^ optional</label>

				<div className="button-div">
					<button value="Add recipe" type="submit">
						Add Recipe
					</button>
					<button value="Reset fields" type="reset" onClick={resetForm}>
						Reset Fields
					</button>
				</div>
			</form>
		</div>
	);
}
