import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

function App() {
	let theme = createTheme({
		palette: {
			background: {
				default: '#555',
				button: {
					main: 'rgba(252, 193, 223, 0.55)',
					secondary: 'rgba(193, 242, 252, 0.5)',
				},
				menu: '#555',
			},
		},
	});

	theme = responsiveFontSizes(theme);

	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes>
						<Route path='/index' element={<Home />} />
						<Route path='/' element={<Home />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
