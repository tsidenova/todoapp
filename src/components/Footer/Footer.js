import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

const Footer = ({ count, allActive, allDone, onClickFilter }) => {
		return (
			<div className={styles.footer}>
				<Fab
		         	variant="extended"
		          	size="small"
		          	color="primary"
		          	aria-label="add"
		          	onClick={() => onClickFilter('all')}
		          	>
					all { count } 
		        </Fab>
		        <Fab
		        	variant="extended"
		          	size="small"
		          	color="primary"
		          	aria-label="add"
		          	onClick={() => onClickFilter('active')}
		          	>
					active { allActive }
		        </Fab>
		        <Fab
		         	variant="extended"
		          	size="small"
		          	color="primary"
		          	aria-label="add"
		          	onClick={() => onClickFilter('done')}
		          	>
					done { allDone }
		        </Fab>
			</div>
		);
	
}



export default Footer;