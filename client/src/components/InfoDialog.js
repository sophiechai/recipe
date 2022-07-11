import "../css/infoDialog.css";
import {useState} from "react";

// function Instruction(props) {
// 	return <li key={props.index}>{props.instruction}</li>;
// }
//
// function Ingredient(props) {
// 	return <li key={props.index}>{props.ingredient}</li>;
// }
//
// function Tip(props) {
// 	return <li key={props.index}>{props.tip}</li>;
// }

export default function InfoDialog(props) {

	const [inputs, setInputs] = useState({
		title: props.obj.title,
		ingredients: props.obj.ingredients,
		instructions: props.obj.instructions,
		tips: props.obj.tips,
	});

	const handleClick = () => {
		props.toggle();
	};

	return (
		<div className="modal">
			<div className="modal_content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
				<h2>{inputs.title.toUpperCase()}</h2>

				<h3>Ingredients</h3>
				<ol>
					{inputs.ingredients.split(";").map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
						// <Ingredient ingredient={ingredient} index={index} />
					))}
				</ol>

				<h3>Instructions</h3>
				<ol>
					{inputs.instructions.split(";").map((instruction, index) => (
						<li key={index}>{instruction}</li>
						// <Instruction instruction={instruction} index={index} />
					))}
				</ol>

				<h3>Tips & Notes</h3>
				{inputs.tips !== undefined ? (
					<ul>
						{inputs.tips.split(";").map((tip, index) => (
							<li key={index}>{tip}</li>
							// <Tip tip={tip} index={index} />
						))}
					</ul>) : (
						<p>N/A</p>
				)}

			</div>
		</div>
	);
}
