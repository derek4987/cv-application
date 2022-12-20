// experience.js component

import React, { useState } from 'react';
import './styles/experience.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function Experience(props) {

    return (
    	<>
    	<div className='componentTitle'>{props.title}</div>
			<div className='labels'>Enter your three most recent positions</div>

    	<div className='labelInput'>
				<label className='labels'>Company name:</label>
				<input type='text' />
    	</div>
			<div>
				<div className='labels'>Dates attended:</div>
				<div className='labelInput'>
					<label className='labels'>From:</label>
					<input type='month' />
					<label className='labels'>To:</label>
					<input type='month' />
				</div>
    	</div>
			<div className='labelTextarea'>
				<label className='labels'>Description of role:</label>
				<textarea />
    	</div>

			<div className='labelInput'>
				<label className='labels'>Company name:</label>
				<input type='text' />
    	</div>
			<div>
				<div className='labels'>Dates attended:</div>
				<div className='labelInput'>
					<label className='labels'>From:</label>
					<input type='month' />
					<label className='labels'>To:</label>
					<input type='month' />
				</div>
    	</div>
			<div className='labelTextarea'>
				<label className='labels'>Description of role:</label>
				<textarea />
    	</div>

			<div className='labelInput'>
				<label className='labels'>Company name:</label>
				<input type='text' />
    	</div>
			<div>
				<div className='labels'>Dates attended:</div>
				<div className='labelInput'>
					<label className='labels'>From:</label>
					<input type='month' />
					<label className='labels'>To:</label>
					<input type='month' />
				</div>
    	</div>
			<div className='labelTextarea'>
				<label className='labels'>Description of role:</label>
				<textarea />
    	</div>
			
			<div className='buttonsDiv'>
				<EditButton title="Edit" />
				<SubmitButton title="Submit" />
			</div>
    	</> 
    );
}

export default Experience;