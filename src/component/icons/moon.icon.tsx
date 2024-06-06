import React from 'react';
import { SvgContainer } from "../svgContainer";
import { SvgType } from "../svgContainer/SvgContainer";

const MoonIcon = (props: SvgType) => {


    return <SvgContainer viewBox={"0 0 64 64"} {...props} >
        <path d="M44,32A20,20,0,1,1,24,12A16,16,0,1,0,44,32Z" fill="none" stroke="black" stroke-width="2"/>
    </SvgContainer>;
};

export default MoonIcon;