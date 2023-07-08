import React from 'react';
import { contrastColor } from 'contrast-color';
import "./button.css";

export type ButtonProps = {
    text?: string,
    color?: string,
    onClick?: () => void,
};

const defaultValues: ButtonProps = {
    text: "Click me!",
    color: "#000000",
    onClick: () => { },
};

export default function Button({
    text,
    color,
    onClick,
}: ButtonProps = defaultValues) {
    const styles: any = {};

    if(color && color !== 'undefined') {
        styles['background-color'] = color;
        styles['border-color'] = color;

        const foregroundColor = contrastColor({bgColor: color});
        styles['color'] = foregroundColor;
    }

    return (
        <button
            style={styles}
            onClick={onClick}
        >
            { text }
        </button>
    );
}