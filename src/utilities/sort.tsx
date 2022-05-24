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

export const mapColumnOrder = (
	array: Category[],
	order: string[],
	key: keyof Category
) => {
	array.sort(
		(a: Category, b: Category) =>
			order.indexOf(a[key] as string) - order.indexOf(b[key] as string)
	);
	return array;
};

export const mapCardOrder = (
	array: CardInfo[],
	order: string[],
	key: keyof CardInfo
) => {
	array.sort(
		(a: CardInfo, b: CardInfo) =>
			order.indexOf(a[key] as string) - order.indexOf(b[key] as string)
	);
	return array;
};
