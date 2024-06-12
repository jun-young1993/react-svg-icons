import React from 'react';
import { SvgContainer } from "../svgContainer";
import { SvgType } from "../svgContainer/SvgContainer";

const MoonIcon = (props: SvgType) => {


    return <SvgContainer  {...props} >
        <path d="M12.5,10A5,5,0,1,1,10,2.5A5.5,5.5,0,1,0,12.5,10Z" fill="currentColor" stroke="black" />
    </SvgContainer>;
};

export default MoonIcon;