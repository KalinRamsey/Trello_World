import "./Card.scss";

interface CardInfo {
	id: string;
	boardId: string;
	columnId: string;
	title: string;
	image: string | null;
}

const Card = (props: { card: CardInfo }) => {
	const { card } = props;

	return (
		<>
			<li className='card-item'>
				<h5>{card.title}</h5>
				{card.image && (
					<img className='card-cover' src={card.image} alt='alt text' />
				)}
			</li>
		</>
	);
};

export default Card;
