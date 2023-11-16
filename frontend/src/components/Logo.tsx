import { DarkModeCapable } from './utils';
import React from 'react';

const image = require("../images/Logo.png")
const image_dark = require("../images/LogoDark.png")

export function Logo({ isDarkMode }: DarkModeCapable) : JSX.Element {
    return (
        <img src={isDarkMode ? image_dark : image} alt="logo" style={{height: '100px', width: '100px', padding: '5px'}}/>
    );
}