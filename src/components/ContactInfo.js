// contactInfo.js component

import React, { useState } from 'react';
import './styles/contactInfo.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function ContactInfo(props) {

    return (
    	<>
    	<div className='ciComponentTitle'>{props.title}</div>
    	<div>
				<label className='ciLabel'>Name:</label>
				<input id='ciName' type='text' pattern='[a-zA-Z]*' />
    	</div>
			<div>
				<label className='ciLabel'>Email:</label>
				<input id='ciEmail' type='email' />
    	</div>
			<div>
				<label className='ciLabel'>Phone number:</label>
				<input id='ciNumber' type='number' minLength='10' maxLength='10'/>
    	</div>
			<div>
				<EditButton title="Edit" />
				<SubmitButton title="Submit" />
			</div>
    	</> 
    );
}

export default ContactInfo;