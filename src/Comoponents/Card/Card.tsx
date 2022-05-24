import SubList from "../SubList/SubList";
import "./Card.scss";

interface CardInfo {
	id: string;
	boardId: string;
	columnId: string;
	title: string;
	image: string | null;
	description?: string;
	subTasks?: string[];
}

const Card = (props: { card: CardInfo }) => {
	const { card } = props;

	return (
		<>
			<div className='card-item card-drag-handle'>
				<header className='card-drag-handle'>
					<h5>{card.title}</h5>
				</header>
				{card.image && (
					<img
						className='card-cover'
						src={card.image}
						alt={card.description}
						onMouseDown={(e) => e.preventDefault()}
					/>
				)}
				{card.subTasks && card.subTasks.length > 0 ? (
					<SubList sublist={card.subTasks} />
				) : null}
			</div>
		</>
	);
};

export default Card;
