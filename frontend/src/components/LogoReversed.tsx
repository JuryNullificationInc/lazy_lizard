import React from "react";
import { DarkModeCapable } from "./utils";

const image = require("../images/LogoReversed.png");
const image_dark = require("../images/LogoDarkReversed.png");

export default function LogoReversed({ isDarkMode } : DarkModeCapable) {
    return (
        <img src={ isDarkMode ? image_dark : image } alt="logo reversed" style={{height: '100px', width: '100px', padding: '5px'}}/>
    )
}