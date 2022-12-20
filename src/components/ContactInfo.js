// contactInfo.js component

import React, { useState } from 'react';
import './styles/contactInfo.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function ContactInfo(props) {

    return (
    	<>
    	<div className='componentTitle'>{props.title}</div>
    	<div className='labelInput'>
				<label className='labels'>Name:</label>
				<input id='ciName' type='text' pattern='[a-zA-Z]*' />
    	</div>
			<div className='labelInput'>
				<label className='labels'>Email:</label>
				<input id='ciEmail' type='email' />
    	</div>
			<div className='labelInput'>
				<label className='labels'>Phone:</label>
				<input id='ciNumber' type='number' minLength='10' maxLength='10'/>
    	</div>
			<div className='buttonsDiv'>
				<EditButton title="Edit" />
				<SubmitButton title="Submit" />
			</div>
    	</> 
    );
}

export default ContactInfo;