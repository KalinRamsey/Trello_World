import Card from "../Card/Card";
import { mapCardOrder } from "../../utilities/sort";
import "./Column.scss";

interface CardInfo {
	id: string;
	boardId: string;
	columnId: string;
	title: string;
	image: string | null;
}

interface Category {
	id: string;
	boardId: string;
	title: string;
	cardOrder: Array<string>;
	cards: Array<CardInfo>;
}

const Column = (props: { column: Category }) => {
	const { column } = props;
	const cards = mapCardOrder(column.cards, column.cardOrder, "id");

	return (
		<>
			<div className='column'>
				<header>{column.title}</header>
				<ul className='card-list'>
					{cards &&
						cards.length > 0 &&
						cards.map((card, index) => {
							return <Card key={card.id} card={card} />;
						})}
				</ul>
				<footer>+ New Card</footer>
			</div>
		</>
	);
};

export default Column;
