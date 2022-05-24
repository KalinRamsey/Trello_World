import "./BoardBar.scss";

const BoardBar = () => {
	return (
		<>
			<nav className='navbar-board'>
				<div className='add-new-column'>
					<i className='fa fa-plus icon'></i>
					<h3>New Column</h3>
				</div>
			</nav>
		</>
	);
};

export default BoardBar;
