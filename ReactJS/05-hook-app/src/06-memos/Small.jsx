import { memo } from 'react';

export const Small = memo(({ value }) => {
	console.log(' Me volvia a generar :c');
	return <small>{value}</small>;
});
