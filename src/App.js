import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/index' element={<Home />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
