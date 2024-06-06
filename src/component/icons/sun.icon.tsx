import React from 'react';
import { SvgContainer } from "../svgContainer";
import { SvgType } from "../svgContainer/SvgContainer";

const SunIcon = (props: SvgType) => {
    return (
        <SvgContainer {...props} >
            <circle cx="8" cy="8" r="3.5" stroke="black"  fill="none" />
            <g stroke="black" >
                <line x1="8" y1="1" x2="8" y2="3" />
                <line x1="8" y1="13" x2="8" y2="15" />
                <line x1="1" y1="8" x2="3" y2="8" />
                <line x1="13" y1="8" x2="15" y2="8" />
                <line x1="2" y1="2" x2="4" y2="4" />
                <line x1="12" y1="12" x2="14" y2="14" />
                <line x1="2" y1="14" x2="4" y2="12" />
                <line x1="12" y1="4" x2="14" y2="2" />
            </g>
        </SvgContainer>
    );
};

export default SunIcon;
