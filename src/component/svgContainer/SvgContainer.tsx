import {ReactNode, SVGAttributes, SVGProps} from 'react';
export interface SvgType extends SVGProps<SVGSVGElement>{
	data?: string
	ariaHidden?: boolean
	strokeColor?: string;
	strokeWidth?: string;
	strokeWidth2?: string;
	strokeWidth3?: string;
	strokeFill?: string;
	fillColor?: string;
	fillColor2?: string;
	fillColor3?: string;
	fillColor4?: string;
	fillColor5?: string;
	fillColor6?: string;
	fillColor7?: string;
	imageWidth?: string;
	imageHeight?: string;
	width?: string;
	height?: string;
	rotateCenter?: number;
	className?: string;
	className2?: string;
	className3?: string;
	className4?: string;
	className5?: string;
	children?: ReactNode
}

const SvgContainer = ({
	width = '14',
	height = '14',
  	viewBox="0 0 24 24",
	color = 'currentColor',
	className = '',
	ariaHidden=true,
	data,
	children,
	...props
}: SvgType) => {
	return (
		<svg
			width={width}
			height={height}
			color={color}
			className={className}
			aria-hidden={ariaHidden}
			viewBox={viewBox}
			{...props}
		>
			{children
			? children
			: <path
					d={data}
					stroke="currentColor" fill="currentColor"
				/>}
		</svg>
	)
}

export default SvgContainer;