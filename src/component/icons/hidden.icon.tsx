import { SvgContainer } from "../svgContainer";
import { SvgType } from "../svgContainer/SvgContainer";
const data = "M0 7C0 6.84087 0.063214 6.68826 0.175736 6.57574C0.288258 6.46321 0.44087 6.4 0.6 6.4H13.4C13.5591 6.4 13.7117 6.46321 13.8243 6.57574C13.9368 6.68826 14 6.84087 14 7C14 7.15913 13.9368 7.31174 13.8243 7.42426C13.7117 7.53679 13.5591 7.6 13.4 7.6H0.6C0.44087 7.6 0.288258 7.53679 0.175736 7.42426C0.063214 7.31174 0 7.15913 0 7Z";
function HiddenIcon(props:SvgType){
	return <SvgContainer 
		{...props}
		data={data}
	/>
      }
export default HiddenIcon;