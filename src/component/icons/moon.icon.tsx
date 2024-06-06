import React from 'react';
import { SvgContainer } from "../svgContainer";
import { SvgType } from "../svgContainer/SvgContainer";

const MoonIcon = (props: SvgType) => {


    return <SvgContainer  {...props} >
        <path d="M10,7A5,5,0,1,1,7,3.5A4,4,0,1,0,10,7Z" fill="none" stroke="black" stroke-width="0.5"/>
    </SvgContainer>;
};

export default MoonIcon;