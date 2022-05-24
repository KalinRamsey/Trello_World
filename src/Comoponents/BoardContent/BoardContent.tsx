import { useEffect, useState } from "react";
import _ from "lodash";
import Column from "../Column/Column";
import { mockData } from "../../actions/mockData";
import { mapColumnOrder } from "../../utilities/sort";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag } from "../../utilities/dragDrop";

import "./BoardContent.scss";

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

interface Board {
	id: string;
	columnOrder: string[];
	columns: Category[];
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

	const onColumnDrop = (dropResult: any) => {
		let newColumns = [...columns];
		newColumns = applyDrag(newColumns, dropResult);

		let newBoard = { ...(board as Board) };
		newBoard.columnOrder = newColumns.map((column) => column.id);
		newBoard.columns = newColumns;

		setColumns(newColumns);
		setBoard(newBoard);
	};

	const onCardDrop = (dropResult: any, columnId: string) => {
		if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
			console.log(
				">>> inside onCardDrop: ",
				dropResult,
				"with columnId- ",
				columnId
			);

			let newColumns = [...columns];
			let currentColumn = newColumns.find((column) => column.id === columnId);

			if (currentColumn) {
				currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
				currentColumn.cardOrder = currentColumn?.cards.map((card) => card.id);
			}

			setColumns(newColumns);
		}
	};

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
				{/* @ts-ignore */}
				<Container
					orientation='horizontal'
					onDrop={onColumnDrop}
					getChildPayload={(index) => columns[index]}
					dragHandleSelector='.column-drag-handle'
					dropPlaceholder={{
						animationDuration: 150,
						showOnTop: true,
						className: "column-drop-preview",
					}}>
					{columns &&
						columns.length > 0 &&
						columns.map((column, index) => {
							return (
								// @ts-ignore
								<Draggable key={column.id}>
									<Column column={column} onCardDrop={onCardDrop} />
								</Draggable>
							);
						})}
				</Container>
			</div>
		</>
	);
};

export default BoardContent;
