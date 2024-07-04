import SvgContainer, { SvgType } from "../svgContainer/SvgContainer";
// stroke="currentColor" fill="currentColor"
const SearchIcon = (props: SvgType) => {
	return (
		<SvgContainer
			width="14"
			height="14"
			viewBox="0 0 14 14"
			{...props}
		>
			    <circle cx="5" cy="5" r="4" stroke="currentColor" stroke-width="1" fill="none"/>
			    <line x1="8" y1="8" x2="13" y2="13" stroke="currentColor" stroke-width="1"/>
		</SvgContainer>
	)
}

export default SearchIcon;