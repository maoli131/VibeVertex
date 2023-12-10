import React, { useState, useEffect } from 'react';
import { getSecondaryPageStyles } from './Styles';

const serverAPIPath = 'http://192.168.1.66:3001/api/';

function SecondaryPage({ colorTheme, path }) {

	const styles = getSecondaryPageStyles(colorTheme);

	const [isLoading, setIsLoading] = useState(true);
	const [jsonData, setJsonData] = useState({
		title: '真心话',
		messages: ['AI正在努力思考题目...',],
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
			<h1 style={styles.title}>{jsonData.title}</h1>
			<p style={styles.paragraph}>{jsonData.messages[currentMessageIndex]}</p>
			<button style={styles.button} onClick={handleNext} disabled={isLoading}>{isLoading ? "加载中.." : "换一个"}</button>
		</div>
	);
}

export default SecondaryPage;