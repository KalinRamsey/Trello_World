import Card from "../Card/Card";
import { mapCardOrder } from "../../utilities/sort";
import { Container, Draggable } from "react-smooth-dnd";

import "./Column.scss";

interface CardInfo {
	id: string;
	boardId: string;
	columnId: string;
	title: string;
	image: string | null;
	description?: string;
	subTasks?: string[];
}

interface Category {
	id: string;
	boardId: string;
	title: string;
	cardOrder: Array<string>;
	cards: Array<CardInfo>;
}

const Column = (props: { column: Category; onCardDrop: Function }) => {
	const { column, onCardDrop } = props;
	const cards = mapCardOrder(column.cards, column.cardOrder, "id");

	return (
		<>
			<div className='column'>
				<header className='column-drag-handle'>{column.title}</header>
				<div className='card-list'>
					{/* @ts-ignore */}
					<Container
						groupName='col'
						onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
						getChildPayload={(index) => cards[index]}
						dragClass='card-ghost'
						dropClass='card-ghost-drop'
						dragHandleSelector='.card-drag-handle'
						dropPlaceholder={{
							animationDuration: 150,
							showOnTop: true,
							className: "card-drop-preview",
						}}
						dropPlaceholderAnimationDuration={200}>
						{cards &&
							cards.length > 0 &&
							cards.map((card, index) => {
								return (
									// @ts-ignore
									<Draggable key={card.id}>
										<Card card={card} />
									</Draggable>
								);
							})}
					</Container>
				</div>
				<footer>
					<div className='footer-action'>
						<i className='fa fa-plus icon'></i>New Card
					</div>
				</footer>
			</div>
		</>
	);
};

export default Column;
