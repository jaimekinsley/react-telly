import React, { useState } from 'react'
import { StyledButton } from './Button.styles'


type Props = {
	title: string
}


export const Button: React.FC<Props> = ( { title } ) => {
	const defaultStyle = {width: '500px'}
	const [ style, setStyle ] = useState(defaultStyle)

	const onHover = () => {
		const newStyle = {...style}
		newStyle.width = '1000px'
		setStyle(newStyle)
	}

	return (
		<StyledButton role={'button'} style={style} onMouseEnter={onHover} onMouseLeave={(() => setStyle(defaultStyle))}>
			{ title }
		</StyledButton>
	)
}

