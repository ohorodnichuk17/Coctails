import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams
} from "react-router-dom";
import Header from './components/header/header';
import Home from './components/home/home';
import Coctails from './components/coctails/coctails';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from './components/button/button';
import Error from './components/error/error';
import { CoctailsContext } from './services/contexts/coctailscontext';

export default function App() {

	function Coctail() {

		let history = useHistory();

		let { id } = useParams();

		const [source, setsource] = useState('');

        const { contextCoctails, setContextCoctails } = useContext(CoctailsContext);

		useEffect(() => {
            setsource(contextCoctails.find(coctail => coctail.idDrink === id).strDrinkThumb);
		}, [])

		function handleClick() {
			history.push('/coctails')
		}

		return (
			<>
				<div className='cardCoctail'>
					<img src={source} alt="" />
					<p>
						Coctail id: {id}
					</p>
				</div>
				<Button text='<--- Назад' handleClick={handleClick} />
			</>
		)
	}

	return (
		<Router>
			<Header />

			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>

				<Route path='/coctails' exact>
					<Coctails />
				</Route>

				<Route path='/coctail/:id' exact>
					<Coctail />
				</Route>

				<Route path='/'>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}