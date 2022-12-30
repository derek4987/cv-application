// education.js component

import React, { useState } from 'react';
import './styles/education.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function Education(props) {

	document.addEventListener('click', function (e) {

		if (e.target.matches('#eduSubmit')) {
			const inputNodeList = document.querySelectorAll('.input-edu');
			for (const input of inputNodeList) {
				input.classList.add('readonly');
			}
		}

		if (e.target.matches('#eduEdit')) {
			const inputNodeList = document.querySelectorAll('.input-edu');
			for (const input of inputNodeList) {
				input.classList.remove('readonly');
			}
		}

	}, false);

    return (
    	<>
    	<div className='componentTitle'>{props.title}</div>
    	<div className='labelInput'>
				<label className='labels'>Name of institution:</label>
				<input type='text' className='input-edu' />
    	</div>
			<div>
				<div className='labels'>Years attended:</div>
				<div className='labelInput'>
					<label className='labels'>From:</label>
					<input type='month' className='input-edu' />
					<label className='labels'>To:</label>
					<input type='month' className='input-edu' />
				</div>
    	</div>
			<div className='labelInput'>
				<label className='labels'>Field of study:</label>
				<input type='text' className='input-edu' />
			</div>
			<div className='labelCheckbox'>
				<label className='labels'>Did you graduate?</label>
				<input type='checkbox' className='input-edu' />
			</div>
			<div className='buttonsDiv'>
				<EditButton title="Edit" id="eduEdit" />
				<SubmitButton title="Submit" id="eduSubmit" />
			</div>
    	</> 
    );
}

export default Education;