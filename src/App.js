import React from 'react';
import './App.css';
import Loading from './components/loading';
import Home from './components/Home';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

function App() {

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: '#6200ea',
				light: '#9d46ff',
				dark: '#0a00b6',
				contrastText: '#fff'
			},
			secondary: {
				main: '#ede7f6',
				light: '#fff',
				dark: '#bbb5c3',
				contrastText: '#000'
			}
		}
	})

	let content = <Loading />;

	content = <Home/>;

	return (
		<ThemeProvider theme={theme}>
			{content}
		</ThemeProvider>
	);
}

export default App;
