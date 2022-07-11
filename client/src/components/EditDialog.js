import "../css/editDialog.css";
import {getRecipesAsync, updateRecipeAsync} from "../redux/recipes/thunks";
import {useState} from "react";
import {useDispatch} from "react-redux";


export default function EditDialog(props) {

	const [inputs, setInputs] = useState({
		title: props.obj.title,
		ingredients: props.obj.ingredients,
		instructions: props.obj.instructions,
		image: props.obj.image,
		tips: props.obj.tips,
		time: props.obj.time
	});

	const dispatch = useDispatch();

	const handleClick = () => {
		props.toggle();
	};

	const handleSave = async (event) => {
		event.preventDefault();
		await dispatch(updateRecipeAsync({"id": props.obj._id, inputs}));
		await dispatch(getRecipesAsync());
		handleClick();
	};

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		if (name === "image") {
			setInputs((values) => ({
				...values,
				[name]: URL.createObjectURL(event.target.files[0])
			}));
		} else {
			setInputs((values) => ({ ...values, [name]: value }));
		}
	};

	const resetForm = (event) => {
		event.preventDefault();
		Object.keys(inputs).forEach((key, index) => {
			setInputs((values) => ({ ...values, [key]: "" }));
		});
	};

	return (
		<div className="modal">
			<div className="modal_content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
				<form className="recipe-form" onSubmit={handleSave}>
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
						<input type="number" name="time" value={inputs.time}
							   onChange={handleChange}
							   step="1"/>
					</label>

					<label>
						<span>Tips&nbsp;&&nbsp;Notes&nbsp;*^:</span>
						<textarea
							name="tips"
							value={inputs.tips}
							onChange={handleChange}
						></textarea>
					</label>

					{/*<label>*/}
					{/*	<span>Upload&nbsp;image:</span>*/}
					{/*	<input type="file" name="image"*/}
					{/*		   onChange={handleChange}*/}
					{/*		   required />*/}
					{/*</label>*/}


					<label className="note">* separate items using semicolon</label>
					<label className="note">^ optional</label>

					<div className="button-div">
						<button value="Save" type="submit">
							Save
						</button>
						<button value="Reset fields" type="reset" onClick={resetForm}>
							Reset Fields
						</button>
					</div>
				</form>

			</div>
		</div>
	);
}
