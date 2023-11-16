import { Image } from 'antd';
import React from 'react';
import { DarkModeCapable } from './utils';

const img = require("../images/BrandText.png");
const img_dark = require("../images/BrandTextDark.png");

export function BrandText({ isDarkMode } : DarkModeCapable) : JSX.Element {
    return (
        <img src={ isDarkMode ? img_dark : img } alt="figlet" style={{height: '100px', width: '400px', padding: '5px'}}/>
    )
}