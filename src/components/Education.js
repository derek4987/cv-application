// education.js component

import React, { useState } from 'react';
import './styles/education.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function Education(props) {

    return (
    	<>
    	<div className='componentTitle'>{props.title}</div>
    	<div className='labelInput'>
				<label className='labels'>Name of institution:</label>
				<input type='text' />
    	</div>
			<div>
				<div className='labels'>Years attended:</div>
				<div className='labelInput'>
					<label className='labels'>From:</label>
					<input type='month' />
					<label className='labels'>To:</label>
					<input type='month' />
				</div>
    	</div>
			<div className='labelInput'>
				<label className='labels'>Field of study:</label>
				<input type='text' />
			</div>
			<div className='labelCheckbox'>
				<label className='labels'>Did you graduate?</label>
				<input type='checkbox' />
			</div>
			<div className='buttonsDiv'>
				<EditButton title="Edit" />
				<SubmitButton title="Submit" />
			</div>
    	</> 
    );
}

export default Education;