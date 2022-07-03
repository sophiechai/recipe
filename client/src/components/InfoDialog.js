import "../css/infoDialog.css";
import {useState} from "react";

function Instruction(props) {
	return <li>{props.instruction}</li>;
}

function Ingredient(props) {
	return <li>{props.ingredient}</li>;
}

function Tip(props) {
	return <li>{props.tip}</li>;
}

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
					{inputs.ingredients.split(";").map((ingredient) => (
						<Ingredient ingredient={ingredient} />
					))}
				</ol>

				<h3>Instructions</h3>
				<ol>
					{inputs.instructions.split(";").map((instruction) => (
						<Instruction instruction={instruction} />
					))}
				</ol>

				<h3>Tips & Notes</h3>
				{inputs.tips !== undefined ? (
					<ul>
						{inputs.tips.split(";").map((tip) => (
							<Tip tip={tip} />
						))}
					</ul>) : (
						<p>N/A</p>
				)}

			</div>
		</div>
	);
}
