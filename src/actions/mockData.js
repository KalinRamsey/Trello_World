export const mockData = {
	boards: [
		{
			id: "board-1",
			columnOrder: ["col-1", "col-2", "col-3"],
			columns: [
				{
					id: "col-1",
					boardId: "board-1",
					title: "To Do:",
					cardOrder: ["card-1", "card-2", "card-3"],
					cards: [
						{
							id: "card-1",
							boardId: "board-1",
							columnId: "col-1",
							title: "Card Title #1",
							image: "https://picsum.photos/256/128",
						},
						{
							id: "card-2",
							boardId: "board-1",
							columnId: "col-1",
							title: "Card Title #2",
							image: null,
						},
						{
							id: "card-3",
							boardId: "board-1",
							columnId: "col-1",
							title: "Card Title #3",
							image: null,
						},
					],
				},
				{
					id: "col-2",
					boardId: "board-1",
					title: "In Progress:",
					cardOrder: ["card-4", "card-5", "card-6", "card-7", "card-8"],
					cards: [
						{
							id: "card-4",
							boardId: "board-1",
							columnId: "col-2",
							title: "Card Title #4",
							image: null,
						},
						{
							id: "card-5",
							boardId: "board-1",
							columnId: "col-2",
							title: "Card Title #5",
							image: "https://picsum.photos/256/128",
						},
						{
							id: "card-6",
							boardId: "board-1",
							columnId: "col-2",
							title: "Card Title #6",
							image: null,
						},
						{
							id: "card-7",
							boardId: "board-1",
							columnId: "col-2",
							title: "Card Title #7",
							image: "https://picsum.photos/256/128",
						},
						{
							id: "card-8",
							boardId: "board-1",
							columnId: "col-2",
							title: "Card Title #8",
							image: null,
						},
					],
				},
				{
					id: "col-3",
					boardId: "board-1",
					title: "Done:",
					cardOrder: ["card-9", "card-10"],
					cards: [
						{
							id: "card-9",
							boardId: "board-1",
							columnId: "col-3",
							title: "Card Title #9",
							image: null,
						},
						{
							id: "card-10",
							boardId: "board-1",
							columnId: "col-3",
							title: "Card Title #10",
							image: "https://picsum.photos/256/128",
						},
					],
				},
			],
		},
	],
};
