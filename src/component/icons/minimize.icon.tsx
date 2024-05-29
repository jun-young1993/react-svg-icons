import { SvgContainer } from "../svgContainer";
import { SvgType } from "../svgContainer/SvgContainer";
const data = "M14.59 5.41L7 13l-3.59-3.59L2 11l5 5 7.59-7.59L14.59 5.41z";
function MinimizeIcon(props: SvgType) {
	return <SvgContainer 
	{...props}
	data={data}
/>
}
export default MinimizeIcon;