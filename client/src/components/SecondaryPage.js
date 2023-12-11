import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSecondaryPageStyles } from './Styles';

const serverAPIPath = process.env.REACT_APP_SERVER_API_PATH;

function SecondaryPage({ colorTheme, path }) {

	const styles = getSecondaryPageStyles(colorTheme);
	const navigate = useNavigate();

	// states
	const [isLoading, setIsLoading] = useState(true);
	const [jsonData, setJsonData] = useState(() => {
		const savedData = sessionStorage.getItem(`jsonData-${path}`);
		return savedData ? JSON.parse(savedData) : {
			title: '请稍等',
			messages: ['AI智能生成中...',],
		}
	});
	const [currentMessageIndex, setCurrentMessageIndex] = useState(() => {
		const savedIndex = sessionStorage.getItem(`currentMessageIndex-${path}`);
		return savedIndex ? JSON.parse(savedIndex) : 0;
	});

	// request to API to get more data
	const fetchData = (path) => {
		setIsLoading(true);
		// Google Analytics: fetchd data event
		window.gtag("event", "fetch_data", {
			page_path: path
		});
		fetch(serverAPIPath + path)
			.then(response => response.json())
			.then(data => {
				const parsedData = JSON.parse(data);
				setJsonData(parsedData);
				sessionStorage.setItem(`jsonData-${path}`, JSON.stringify(parsedData));
				setCurrentMessageIndex(0); // Reset index to start from the new batch
				setIsLoading(false);
			})
			.catch(error => {
				setJsonData({
					title: 'Ops',
					messages: ['很抱歉，AI开小差了，请稍后再试。']
				});
				console.error(`Error fetching data with ${serverAPIPath}`, error);
			});
	}

	const handleNext = () => {
		// Check if the current message is the last one in the array
		if (currentMessageIndex >= jsonData.messages.length - 1) {
			// Fetch more messages
			fetchData(path);
		} else {
			// Go to the next message
			setCurrentMessageIndex(currentMessageIndex + 1);
		}
		// Google Analytics: click next button
		window.gtag("event", "click_next", {
			page_path: path
		});
	}

	// initial loading of data
	useEffect(() => {
		const savedData = sessionStorage.getItem(`jsonData-${path}`);
		if (!savedData) {
			fetchData(path);
		} else {
			setIsLoading(false);
		}
	}, [path]);

	// storing message index to session store
	useEffect(() => {
		sessionStorage.setItem(`currentMessageIndex-${path}`, JSON.stringify(currentMessageIndex));
	}, [currentMessageIndex, path]);

	return (
		<div style={styles.container}>
			<div style={styles.backText} onClick={() => { navigate('/') }}>返回</div>
			<h1 style={styles.title}>{jsonData.title}</h1>
			<p style={styles.paragraph}>{jsonData.messages[currentMessageIndex]}</p>
			<button style={styles.button} onClick={handleNext} disabled={isLoading}>{isLoading ? "加载中.." : "换一个"}</button>
		</div>
	);
}

export default SecondaryPage;