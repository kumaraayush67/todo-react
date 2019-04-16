import React, { Component } from 'react';
import PropType from 'prop-types';

class TodoItem extends Component {

	getStyle = () => {
		return {
			background: '#323232',
			color: '#fff',
			fontSize: '1.3em',
			width: '600px',
			margin: 'auto',
			padding: '15px',
			borderBottom: '1px solid grey',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}


  render() {

  	const { id, title } = this.props.todo;

    return (
    	<div style={this.getStyle()}>
    		<p>
    			<input type='checkbox' onChange={this.props.markcomplete.bind(this, id)}/>
    			{ title }
    			<button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
    		</p>
    	</div>
    );
  }
}

TodoItem.propTypes = {
	todo: PropType.object.isRequired
}

const btnStyle = {
	color: '#fff',
	backgroundColor: 'red',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '5px',
	float: 'right',
	fontWeight: 'bold', 

}

export default TodoItem;
