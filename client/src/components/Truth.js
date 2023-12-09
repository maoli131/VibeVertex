import React, { useState, useEffect } from 'react';
import { getSecondaryPageStyles } from './Styles';

function Truth({ colorTheme }) {

	const styles = getSecondaryPageStyles(colorTheme);

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('http://192.168.1.66:3001/api/truth')
			.then(response => response.json())
			.then(data => {
				setData(data);
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	}, []);

	return (
		<div style={styles.container}>
			<h1 style={styles.title}>真心话</h1>
			{data && <p style={styles.paragraph}>{data.message}</p>}
		</div>
	);
}

export default Truth;