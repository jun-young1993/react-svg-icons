import SvgContainer, { SvgType } from "../svgContainer/SvgContainer";

const RightArrowIcon = (props: SvgType) => {
	return (
		<SvgContainer
			{...props}
		>
		            <line x1="4" y1="2" x2="10" y2="7" stroke="currentColor" stroke-width="1" />
			    <line x1="4" y1="12" x2="10" y2="7" stroke="currentColor" stroke-width="1" />
		</SvgContainer>
	)
}

export default RightArrowIcon;