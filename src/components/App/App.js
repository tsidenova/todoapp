import React from 'react';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuItem';
import MenuItem from '@material-ui/core/MenuItem';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Fab from '@material-ui/core/Fab';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import school from './img/school.png';



const App =() => 
	(<Router>
		<div className={styles.block}>
			<div className={styles.wrap}>
				<div className={styles.button}>
				<Fab variant="extended"><Link to='/' className={styles.link}>About me</Link></Fab>
				<Fab variant="extended"><Link to='/todo' className={styles.link}>Tasks</Link></Fab>
				</div>
				
				<Route path='/' exact component={About} />
				<Route path='/todo' component={Todo} />
			</div>
			<div>
				<p><img src={ school } alt='webhero'></img></p>			
			</div>
		</div>
	</Router>);
		
export default App;