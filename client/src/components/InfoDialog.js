import "../css/infoDialog.css";

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
	const handleClick = () => {
		props.toggle();
	};

	return (
		<div className="modal">
			<div className="modal_content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
				<h2>{props.title.toUpperCase()}</h2>

				<h3>Ingredients</h3>
				<ol>
					{props.ingredients.split(";").map((ingredient) => (
						<Ingredient ingredient={ingredient} />
					))}
				</ol>

				<h3>Instructions</h3>
				<ol>
					{props.instructions.split(";").map((instruction) => (
						<Instruction instruction={instruction} />
					))}
				</ol>

				<h3>Tips & Notes</h3>
				{props.tips.length !== 0 ? (
					<ul>
						{props.tips.split(";").map((tip) => (
							<Tip tip={tip} />
						))}
					</ul>) : (
						<p>N/A</p>
				)}

			</div>
		</div>
	);
}
