// contactInfo.js component

import React, { useState } from 'react';
import './styles/contactInfo.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function ContactInfo(props) {

    return (
    	<>
    	<div className='componentTitle'>{props.title}</div>
    	<div>
				<label>Name:</label>
				<input type='text' pattern='[a-zA-Z]*' />
    	</div>
			<div>
				<label>Email:</label>
				<input type='email' />
    	</div>
			<div>
				<label>Phone number:</label>
				<input type='number' minLength='10' maxLength='10'/>
    	</div>
			<div>
				<EditButton title="Edit" />
				<SubmitButton title="Submit" />
			</div>
    	</> 
    );
}

export default ContactInfo;