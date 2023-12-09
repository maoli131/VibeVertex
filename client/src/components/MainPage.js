import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getMainPageStyles } from './Styles';

function MainPage() {

	const stylesLight = getMainPageStyles('light');
	const stylesDark = getMainPageStyles('dark');

	const navigate = useNavigate();
	const handleOnClick = (path) => {
		navigate(path);
	};

	return (
		<div>
			<div style={stylesDark.section} onClick={() => handleOnClick('/truth')}>
				真心话
			</div>
			<div style={stylesLight.section} onClick={() => handleOnClick('/dare')}>
				大冒险
			</div>
			<div style={stylesDark.section} onClick={() => handleOnClick('/game')}>
				小游戏
			</div>
		</div>
	);
}

export default MainPage;