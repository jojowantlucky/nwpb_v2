import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Backdrops from './Pages/Backdrops';
import PhotoBooths from './Pages/PhotoBooths';
import CustomPrints from './Pages/CustomPrints';
import PhotoBooks from './Pages/PhotoBooks';

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
						<Route path='/backdrops' element={<Backdrops />} />
						<Route path='/photobooths' element={<PhotoBooths />} />
						<Route path='/customprints' element={<CustomPrints />} />
						<Route path='/custom-prints' element={<CustomPrints />} />
						<Route path='/photobooks' element={<PhotoBooks />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
