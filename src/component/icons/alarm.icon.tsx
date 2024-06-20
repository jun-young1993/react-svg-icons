import SvgContainer, { SvgType } from "../svgContainer/SvgContainer";

const AlarmIcon = (props: SvgType) => {
	return (
		<SvgContainer
			{...props}
		>
		    <circle cx="7" cy="7" r="5" stroke-width="0.5" stroke="currentColor" fill="currentColor" />
			<line x1="7" y1="7" x2="7" y2="4" stroke="black" stroke-width="0.5"/>
			<line x1="7" y1="7" x2="9" y2="8" stroke="black" stroke-width="0.5"/>
			<line x1="2" y1="1" x2="4" y2="3" stroke="black" stroke-width="0.5"/>
			<line x1="12" y1="1" x2="10" y2="3" stroke="black" stroke-width="0.5"/>	
		</SvgContainer>
	)
}

export default AlarmIcon;