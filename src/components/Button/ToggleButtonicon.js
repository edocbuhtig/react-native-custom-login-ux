import React, { Component } from 'React'
import { TouchableOpacity } from 'react-native'
import propTypes from 'prop-types' 

import Ionicon from 'react-native-vector-icons/Ionicons'

class ToggleButtonicon extends Component {
	constructor(props){
		super(props)

		const { defaultValue } = props

		this.state = {
			isActive: defaultValue || false
		}
	}

	handlePressicon = () => {

		this.setState({ isActive: !this.state.isActive })

	}

	render(){
		const {
			activeIconName,
			activeIconColor,
			inactiveIconName,
			inactiveIconColor,
			style,
			size
		} = this.props
		const { isActive } = this.state
		return (
			<TouchableOpacity
				style={style}
				onPress={this.handlePressicon}
			>
				<Ionicon 
					name={ isActive ? activeIconName : inactiveIconName }
					color={ isActive ? activeIconColor : inactiveIconColor }
					size={size}
				/>
			</TouchableOpacity>

		)
	}

}

ToggleButtonicon.propTypes = {
	defaultValue: propTypes.bool,
	activeIconName: propTypes.string,
	activeIconColor: propTypes.string,
	inactiveIconName: propTypes.string,
	inactiveIconColor: propTypes.string,
	style: propTypes.number,
	size: propTypes.number
}

export default ToggleButtonicon