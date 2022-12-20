// editButton.js component

import React, { useState } from 'react';
import './styles/editButton.css';

function EditButton(props) {

    return <button className='buttons' type='button'>{props.title}</button>
}

export default EditButton;