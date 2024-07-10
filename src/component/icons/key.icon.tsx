import { SvgContainer } from "../svgContainer";
import { SvgType } from "../svgContainer/SvgContainer";

const KeyIcon = (props: SvgType) => {
    return (
        <SvgContainer {...props}>
      <text x="0.5" y="6" font-family="Arial" font-size="6" fill="currentColor" font-weight="bold">{props.children ?? "Key"}</text>
        </SvgContainer>
    );
};

export default KeyIcon;
