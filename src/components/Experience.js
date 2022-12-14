// experience.js component

import React, { useState } from 'react';
import './styles/experience.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function Experience(props) {

    return (
    	<>
    	<div className='componentTitle'>{props.title}</div>
			<div>Enter your three most recent positions</div>

    	<div>
				<label>Company name:</label>
				<input type='text' />
    	</div>
			<div>
				<div>Dates attended:</div>
				<div>
					<label>From:</label>
					<input type='month' />
					<label>To:</label>
					<input type='month' />
				</div>
    	</div>
			<div>
				<label>Description of role:</label>
				<textarea />
    	</div>

			<div>
				<label>Company name:</label>
				<input type='text' />
    	</div>
			<div>
				<div>Dates attended:</div>
				<div>
					<label>From:</label>
					<input type='month' />
					<label>To:</label>
					<input type='month' />
				</div>
    	</div>
			<div>
				<label>Description of role:</label>
				<textarea />
    	</div>

			<div>
				<label>Company name:</label>
				<input type='text' />
    	</div>
			<div>
				<div>Dates attended:</div>
				<div>
					<label>From:</label>
					<input type='month' />
					<label>To:</label>
					<input type='month' />
				</div>
    	</div>
			<div>
				<label>Description of role:</label>
				<textarea />
    	</div>
			
			<div>
				<EditButton title="Edit" />
				<SubmitButton title="Submit" />
			</div>
    	</> 
    );
}

export default Experience;