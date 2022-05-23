import Card from "../Card/Card";
import "./Column.scss";

const Column = () => {
	return (
		<>
			<div className='column'>
				<header>To Do:</header>
				<ul className='card-list'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</ul>
				<footer>+ New Card</footer>
			</div>
		</>
	);
};

export default Column;
