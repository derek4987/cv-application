// contactInfo.js component

import React, { useState } from 'react';
import './styles/contactInfo.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function ContactInfo(props) {

	document.addEventListener('click', function (e) {

		if (e.target.matches('#ciSubmit')) {
			const inputNodeList = document.querySelectorAll('.input-ci');
			for (const input of inputNodeList) {
				input.classList.add('readonly');
			}
		}

		if (e.target.matches('#ciEdit')) {
			const inputNodeList = document.querySelectorAll('.input-ci');
			for (const input of inputNodeList) {
				input.classList.remove('readonly');
			}
		}

	}, false);

    return (
    	<>
    	<div className='componentTitle'>{props.title}</div>
    	<div className='labelInput'>
				<label className='labels'>Name:</label>
				<input id='ciName' className='input-ci' type='text' pattern='[a-zA-Z]*' />
    	</div>
			<div className='labelInput'>
				<label className='labels'>Email:</label>
				<input id='ciEmail' className='input-ci' type='email' />
    	</div>
			<div className='labelInput'>
				<label className='labels'>Phone:</label>
				<input id='ciNumber' className='input-ci' type='number' minLength='10' maxLength='10'/>
    	</div>
			<div className='buttonsDiv'>
				<EditButton title="Edit" id="ciEdit" />
				<SubmitButton title="Submit" id="ciSubmit" />
			</div>
    	</> 
    );
}

export default ContactInfo;