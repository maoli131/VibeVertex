import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSecondaryPageStyles } from './Styles';

const serverAPIPath = 'http://192.168.1.66:3001/api/';

function SecondaryPage({ colorTheme, path }) {

	const styles = getSecondaryPageStyles(colorTheme);
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(true);
	const [jsonData, setJsonData] = useState({
		title: '请稍等',
		messages: ['AI智能生成中...',],
	});
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);


	// request to API to get more data
	const fetchData = (path) => {
		setIsLoading(true);
		fetch(serverAPIPath + path)
			.then(response => response.json())
			.then(data => {
				setJsonData(JSON.parse(data));
				setCurrentMessageIndex(0); // Reset index to start from the new batch
				setIsLoading(false);
			})
			.catch(error => {
				setJsonData({
					title: 'Ops',
					messages: ['很抱歉，AI开小差了，请稍后再试。']
				});
				console.error('Error fetching data: ', error);
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
	}

	// initial loading of data
	useEffect(() => {
		fetchData(path);
	}, [path]);

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