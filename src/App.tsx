import AppBar from "./Comoponents/AppBar/AppBar";
import BoardBar from "./Comoponents/BoardBar/BoardBar";
import BoardContent from "./Comoponents/BoardContent/BoardContent";

import "./App.scss";

function App() {
	return (
		<div className='trelloWorld'>
			<AppBar />
			<BoardBar />
			<BoardContent />
		</div>
	);
}

export default App;
