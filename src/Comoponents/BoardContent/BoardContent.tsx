import { useEffect, useState } from "react";
import _ from "lodash";
import Column from "../Column/Column";
import { mockData } from "../../actions/mockData";
import { mapColumnOrder } from "../../utilities/sort";
import { Container, Draggable } from "react-smooth-dnd";

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
		console.log(">>> inside onColumnDrop: ", dropResult);
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
									<Column column={column} />
								</Draggable>
							);
						})}
				</Container>
			</div>
		</>
	);
};

export default BoardContent;
