// submitButton.js component

import React, { useState } from 'react';
import './styles/submitButton.css';

function SubmitButton(props) {

    return <button type='button'>{props.title}</button>
}

export default SubmitButton;