import { SVGProps } from 'react';
export interface SvgType extends SVGProps<SVGSVGElement>{
	data: string
	ariaHidden?: boolean
}

const SvgContainer = ({
	width = '100%',
	height = '100%',
	color = 'currentColor',
	className = '',
	ariaHidden=true,
	data,
	...props
}: SvgType) => {
	return (
		<svg
			width={width}
			height={height}
			color={color}
			className={className}
			aria-hidden={ariaHidden}
			{...props}
		>
			<path
				d={data}
				fill={color}
			/>

			
		</svg>
	)
}

export default SvgContainer;