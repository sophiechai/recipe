import "../css/cards.css";
import { useSelector, useDispatch } from "react-redux";
import InfoDialog from "./InfoDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {getRecipesAsync, deleteRecipeAsync, sortRecipeAsync, deleteRecipesAsync} from "../redux/recipes/thunks";
import EditDialog from "./EditDialog";

export default function Cards() {
	const currentRecipe = useSelector((state) => state.recipes.list);

	const [seenInfoDialog, setSeenInfoDialog] = useState(false);
	const [seenEditDialog, setSeenEditDialog] = useState(false);

	const [selectedRecipe, setSelectedRecipe] = useState({});
	const [query, setQuery] = useState("");

	useEffect(() => {
		dispatch(getRecipesAsync());
	}, []);

	const dispatch = useDispatch();

	const toggleInfoDialog = (props) => {
		setSeenInfoDialog(!seenInfoDialog);
		if (!seenInfoDialog) {
			setSelectedRecipe(props);
		}
	};

	const toggleEditDialog = (props) => {
		setSeenEditDialog(!seenEditDialog);
		if (!seenEditDialog) {
			setSelectedRecipe(props);
		}
	};

	const handleDelete = async (props) => {
		await dispatch(deleteRecipeAsync({"id": props._id}));
	};

	const handleDeleteAll = async () => {
		await dispatch(deleteRecipesAsync());
	};

	const handleSort = async (event) => {
		await dispatch(sortRecipeAsync({"sortBy": event.target.id}));
	};

	return (
		<div className="grid-container">
			<div className="searchbox">
				<div className="iconbox">
					<FontAwesomeIcon icon={faMagnifyingGlass}/>
				</div>

				<input
					type="search"
					placeholder="Search"
					onChange={(event) => setQuery(event.target.value)}
				/>
			</div>

			<div className="checkbox-container">
				<div className="filter-container">
					<p>Sort By:</p>
					<input type="radio" id="time" name="sort" onClick={handleSort}/>
					<label>&nbsp;Time</label><br/>
					<input type="radio" id="name" name="sort" onClick={handleSort}/>
					<label>&nbsp;Name</label><br/>
				</div>
        		<span className="close" id="delete-all-sign" onClick={handleDeleteAll}>
          		&times; delete all
        		</span>
			</div>

			{currentRecipe
				.filter((post) => {
					if (query === "") {
						return post;
					} else if (post.title.toLowerCase().includes(query.toLowerCase())) {
						return post;
					}
				})
				.map((recipe, index) => (
					<div className="grid-item" key={index}>
						<span className="edit" id={"edit-sign-" + index} onClick={() => toggleEditDialog(recipe)}>edit</span>
            			<span className="close" id={"delete-sign-" + index} onClick={() => handleDelete(recipe)}>&times; delete</span>
						<br />
						<h2>{recipe.title.toUpperCase()}</h2>
						{/*<img src={recipe.image} alt={recipe.title} />*/}
						<h4>Time taken: {recipe.time} minutes</h4>
						<button className="show-more" onClick={() => toggleInfoDialog(recipe)}>
							See More
						</button>
					</div>
				))}
			{seenInfoDialog ? (
				<InfoDialog
					toggle={toggleInfoDialog}
					obj={selectedRecipe}
				/>
			) : null}

			{seenEditDialog ? (
				<EditDialog
					toggle={toggleEditDialog}
					obj={selectedRecipe}
				/>
			) : null}
		</div>
	);
}
