import { StyledButton } from './button-styles.js';
import React from 'react';


const Button = ({ title, onClick }) => {
    return (
        <StyledButton onClick={onClick}>{title}</StyledButton>
    );
};

export default Button;