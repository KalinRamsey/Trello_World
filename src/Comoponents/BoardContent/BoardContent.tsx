import { useEffect, useState } from "react";
import _ from "lodash";
import Column from "../Column/Column";
import { mockData } from "../../actions/mockData";
import { mapColumnOrder } from "../../utilities/sort";

import "./BoardContent.scss";

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

const BoardContent = () => {
	const [board, setBoard] = useState({});
	const [columns, setColumns] = useState<Array<Category>>([]);

	useEffect(() => {
		const boardMockData = mockData.boards.find((item) => item.id === "board-1");
		if (boardMockData) {
			setBoard(boardMockData);

			// sort columns
			setColumns(
				mapColumnOrder(boardMockData.columns, boardMockData.columnOrder, "id")
			);
		}
	}, []);

	if (_.isEmpty(board)) {
		return (
			<>
				<div className='not-found'>Board not found</div>
			</>
		);
	}

	return (
		<>
			<div className='trelloColumns'>
				{columns &&
					columns.length > 0 &&
					columns.map((column, index) => {
						return <Column key={column.id} column={column} />;
					})}
			</div>
		</>
	);
};

export default BoardContent;
