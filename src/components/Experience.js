// experience.js component

import React, { useState } from 'react';
import './styles/experience.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function Experience(props) {

	document.addEventListener('click', function (e) {

		if (e.target.matches('#exSubmit')) {
			const inputNodeList = document.querySelectorAll('.input-ex');
			for (const input of inputNodeList) {
				input.classList.add('readonly');
			}
		}

		if (e.target.matches('#exEdit')) {
			const inputNodeList = document.querySelectorAll('.input-ex');
			for (const input of inputNodeList) {
				input.classList.remove('readonly');
			}
		}

	}, false);

    return (
    	<>
    	<div className='componentTitle'>{props.title}</div>
			<div className='labels'>Enter your three most recent positions</div>

    	<div className='labelInput'>
				<label className='labels'>Company name:</label>
				<input type='text' className='input-ex' />
    	</div>
			<div>
				<div className='labels'>Dates attended:</div>
				<div className='labelInput'>
					<label className='labels'>From:</label>
					<input type='month' className='input-ex' />
					<label className='labels'>To:</label>
					<input type='month' className='input-ex' />
				</div>
    	</div>
			<div className='labelTextarea'>
				<label className='labels'>Description of role:</label>
				<textarea className='input-ex' />
    	</div>

			<div className='labelInput'>
				<label className='labels'>Company name:</label>
				<input type='text' className='input-ex' />
    	</div>
			<div>
				<div className='labels'>Dates attended:</div>
				<div className='labelInput'>
					<label className='labels'>From:</label>
					<input type='month' className='input-ex' />
					<label className='labels'>To:</label>
					<input type='month' className='input-ex' />
				</div>
    	</div>
			<div className='labelTextarea'>
				<label className='labels'>Description of role:</label>
				<textarea className='input-ex' />
    	</div>

			<div className='labelInput'>
				<label className='labels'>Company name:</label>
				<input type='text' className='input-ex' />
    	</div>
			<div>
				<div className='labels'>Dates attended:</div>
				<div className='labelInput'>
					<label className='labels'>From:</label>
					<input type='month' className='input-ex' />
					<label className='labels'>To:</label>
					<input type='month' className='input-ex' />
				</div>
    	</div>
			<div className='labelTextarea'>
				<label className='labels'>Description of role:</label>
				<textarea className='input-ex' />
    	</div>
			
			<div className='buttonsDiv'>
				<EditButton title="Edit" id="exEdit" />
				<SubmitButton title="Submit" id="exSubmit" />
			</div>
    	</> 
    );
}

export default Experience;