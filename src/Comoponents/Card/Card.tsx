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
			<div className='card-item'>
				<h5 className='card-drag-handle'>{card.title}</h5>
				{card.image && (
					<img
						className='card-cover'
						src={card.image}
						alt={card.description}
						onMouseDown={(e) => e.preventDefault()}
					/>
				)}
				{card.subTasks && card.subTasks.length > 0 ? (
					<ul className='subList'>
						{card.subTasks.map((task, index) => {
							return <li>{task}</li>;
						})}
					</ul>
				) : null}
			</div>
		</>
	);
};

export default Card;
