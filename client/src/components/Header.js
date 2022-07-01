import React from "react";

const Header = () => {
	return (
		<div>
			<a href="/" className="item">
				Home
			</a>
			<a href="./recipes" className="item">
				Recipe
			</a>
			<a href="./about" className="item">
				About
			</a>
		</div>
	);
};

export default Header;
