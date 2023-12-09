import React, { useState, useEffect } from 'react';
import { getSecondaryPageStyles } from './Styles';

const serverAPIPath = 'http://192.168.1.66:3001/api/';

function SecondaryPage({ colorTheme, path }) {

	const styles = getSecondaryPageStyles(colorTheme);

	const [data, setData] = useState({
		title: '糟糕',
		message: '服务器挂了，程序员正在加班抢修.'
	});

	useEffect(() => {
		fetch(serverAPIPath + path)
			.then(response => response.json())
			.then(data => {
				setData(data);
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	}, [path]);

	return (
		<div style={styles.container}>
			<h1 style={styles.title}>{data.title}</h1>
			<p style={styles.paragraph}>{data.message}</p>
		</div>
	);
}

export default SecondaryPage;