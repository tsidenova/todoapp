import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';


class Item extends React.Component {
	
	render() {
		const { value, isDone, onClickDone, id} = this.props;
		return (
			<span 
				className={
					classnames({
						[styles.item]: true,
						[styles.done]: isDone
					})
				} 	
				onClick={() => onClickDone(id)}
				>  {value} </span>
			);
	}
}

Item.defaultProps = {
	value: 'nothing to do',
	isDone: false
};

Item.propTypes ={
	value: PropTypes.string,
	isDone: PropTypes.bool,
	id: PropTypes.number,
	count: PropTypes.number
}

export default Item;