import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Delete from './img/delete.png';

class ItemList extends React.Component {
	render() {
		const { items, onClickDone, id, onClickDelete } = this.props;
		return (
			<ol className={styles.list}>
				{items.map(item => 
					<li className={styles.item} key={item.id}>
						<div className={styles.itemline}>
							<Item 
								value={item.value}
								isDone={item.isDone} 
								onClickDone={onClickDone}
								id={item.id} 
								/>
							<button	       						
	        					className={styles.button}
	        					onClick={() => onClickDelete(item.id)}>
	        					<img src={ Delete } alt='delete' className={styles.button__img}></img>
	     					</button>
     					</div>	
					</li>
						
					)}
			</ol>
		);
	}
}

export default ItemList;