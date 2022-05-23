import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
	return (
		<div className='trelloWorld'>
			<nav className='navbar app'>
				<h1>Trello World</h1>
			</nav>
			<nav className='navbar board'>Board Bar</nav>
			<div className='trelloColumns'>
				<div className='column'>
					<header>To Do:</header>
					<ul>
						<li>
							<img src='https://picsum.photos/256/128' alt='alt text' />
							Design & Research
						</li>
						<li>Second</li>
						<li>Third</li>
						<li>Fourth</li>
						<li>Fifth</li>
						<li>Sixth</li>
						<li>Seventh</li>
						<li>Eigth</li>
						<li>Ninth</li>
						<li>Tenth</li>
						<li>Eleventh</li>
					</ul>
					<footer>+ New Card</footer>
				</div>
				<div className='column'>
					<header>In progress:</header>
					<ul>
						<li>
							<img src='https://picsum.photos/256/128' alt='alt text' />
							Design & Research
						</li>
						<li>Second</li>
						<li>Third</li>
					</ul>
					<footer>+ New Card</footer>
				</div>
				<div className='column'>
					<header>In progress:</header>
					<ul>
						<li>
							<img src='https://picsum.photos/256/128' alt='alt text' />
							Design & Research
						</li>
						<li>Second</li>
						<li>Third</li>
					</ul>
					<footer>+ New Card</footer>
				</div>
				<div className='column'>
					<header>In progress:</header>
					<ul>
						<li>
							<img src='https://picsum.photos/256/128' alt='alt text' />
							Design & Research
						</li>
						<li>Second</li>
						<li>Third</li>
					</ul>
					<footer>+ New Card</footer>
				</div>
				<div className='column'>
					<header>In progress:</header>
					<ul>
						<li>
							<img src='https://picsum.photos/256/128' alt='alt text' />
							Design & Research
						</li>
						<li>Second</li>
						<li>Third</li>
					</ul>
					<footer>+ New Card</footer>
				</div>
				<div className='column'>
					<header>In progress:</header>
					<ul>
						<li>
							<img src='https://picsum.photos/256/128' alt='alt text' />
							Design & Research
						</li>
						<li>Second</li>
						<li>Third</li>
					</ul>
					<footer>+ New Card</footer>
				</div>
			</div>
		</div>
	);
}

export default App;
