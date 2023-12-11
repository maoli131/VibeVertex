import { React, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getMainPageStyles } from './Styles';

function MainPage() {

	const location = useLocation();

	const stylesLight = getMainPageStyles('light');
	const stylesDark = getMainPageStyles('dark');

	const navigate = useNavigate();
	const handleOnClick = (path) => {
		// Google Analytics: secondary page view
		window.gtag("event", "page_view", {
			page_path: path,
		})
		navigate(path);
	};

	// Google Analytics: main page view
	useEffect(() => {
		window.gtag("event", "page_view", {
			page_path: location.pathname,
		})
	}, [location.pathname]);

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