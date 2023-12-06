import React from 'react';
import { useNavigate } from 'react-router-dom';

const sectionStyle = (colorTheme) => {
	const isLight = colorTheme === 'light';
	const lightColor = '#FEF2F4';
	const darkColor = '#FCC8D1';
	return {
		height: '40vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: isLight ? lightColor : darkColor,
		color: isLight ? darkColor : lightColor,
		fontSize: '6em',
		fontWeight: 200,
	};
};

function MainPage() {

	const navigate = useNavigate();
	const handleOnClick = (path) => {
		navigate(path);
	};

	return (
		<div>
			<div style={sectionStyle('dark')} onClick={() => handleOnClick('/truth')}>
				真心话
			</div>
			<div style={sectionStyle('light')} onClick={() => handleOnClick('/dare')}>
				大冒险
			</div>
			<div style={sectionStyle('dark')} onClick={() => handleOnClick('/game')}>
				小游戏
			</div>
		</div>
	);
}

export default MainPage;