import React from 'react';
import "./button.css";
export type ButtonProps = {
    text?: string;
    color?: string;
    onClick?: () => void;
};
export default function Button({ text, color, onClick, }?: ButtonProps): React.JSX.Element;
