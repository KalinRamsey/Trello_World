import Column from "../Column/Column";

import "./BoardContent.scss";

const BoardContent = () => {
	return (
		<>
			<div className='trelloColumns'>
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
			</div>
		</>
	);
};

export default BoardContent;
