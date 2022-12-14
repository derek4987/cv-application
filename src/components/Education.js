// education.js component

import React, { useState } from 'react';
import './styles/education.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function Education(props) {

    return (
    	<>
    	<div className='componentTitle'>{props.title}</div>
    	<div>
				<label>Name of institution:</label>
				<input type='text' />
    	</div>
			<div>
				<div>Years attended:</div>
				<div>
					<label>From:</label>
					<input type='month' />
					<label>To:</label>
					<input type='month' />
				</div>
    	</div>
			<div>
				<label>Field of study:</label>
				<input type='text' />
			</div>
			<div>
				<label>Did you graduate?</label>
				<input type='checkbox' />
			</div>
			<div>
				<EditButton title="Edit" />
				<SubmitButton title="Submit" />
			</div>
    	</> 
    );
}

export default Education;