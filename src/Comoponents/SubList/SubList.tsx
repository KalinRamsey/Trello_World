import "./SubList.scss";

const SubList = (props: { sublist: string[] }) => {
	const { sublist } = props;

	return (
		<>
			<ul className='subList'>
				{sublist &&
					sublist.length > 0 &&
					sublist.map((item, index) => {
						return (
							<li key={item + index} className='listItem'>
								<input type='checkbox' />
								<label>{item}</label>
							</li>
						);
					})}
			</ul>
		</>
	);
};

export default SubList;
