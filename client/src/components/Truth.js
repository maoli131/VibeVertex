import React, { useState, useEffect } from 'react';

function Truth() {

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3001/api/truth')
			.then(response => response.json())
			.then(data => {
				setData(data);
			})
			.catch(error => {
				console.error('Error fetching data: ', error);
			});
	}, []);

	return (
		<div>
			<h1>真心话</h1>
			{data && <p>{data.message}</p>}
		</div>
	);
}

export default Truth;