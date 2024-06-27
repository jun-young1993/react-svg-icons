import SvgContainer, { SvgType } from "../svgContainer/SvgContainer";

const LeftArrowIcon = (props: SvgType) => {
	return (
		<SvgContainer
			{...props}
		>
		        <line x1="10" y1="2" x2="4" y2="7" stroke="currentColor" stroke-width="1" />
			<line x1="10" y1="12" x2="4" y2="7" stroke="currentColor" stroke-width="1" />
		</SvgContainer>
	)
}

export default LeftArrowIcon;