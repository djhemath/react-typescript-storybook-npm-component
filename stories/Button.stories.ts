import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src';
import '../src/components/Button/button.css';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    argTypes: {
        text: { type: 'string', description: 'Text to display in the button', control: 'text' },
        color: { type: 'string', description: 'Hex color code for the button', control: 'color' },
        onClick: { type: 'function', description: 'Callback function called on clicking the button' },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ZeroConfig: Story = {
    args: {  },
};

export const CustomText: Story = {
    args: {
        text: 'Touch me!',
    },
}

export const CustomColor: Story = {
    args: {
        ...CustomText.args,
        color: '#6c0b99',
    },
};

export const CustomOnClick: Story = {
    args: {
        ...CustomText.args,
        onClick: action('Clicked!'),
    },
};