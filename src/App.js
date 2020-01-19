import React from 'react';
import './App.css';
import Loading from './components/loading';
import Home from './components/Home';

function App() {

	let content = <Loading />;

	content = <Home/>;

	return (
		<div className="App">
			{content}
		</div>
	);
}

export default App;
