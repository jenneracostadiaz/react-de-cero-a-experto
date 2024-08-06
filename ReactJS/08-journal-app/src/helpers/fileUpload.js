export const fileUpload = async (file) => {
	if (!file) throw new Error('No se ha seleccionado un archivo');

	const cloudUrl = 'https://api.cloudinary.com/v1_1/dircgvwjj/upload?';

	const formData = new FormData();
	formData.append('upload_preset', 'react-journal');
	formData.append('file', file);

	try {
		const resp = await fetch(cloudUrl, {
			method: 'POST',
			body: formData,
		});

		if (!resp.ok) throw new Error('Error al subir la imagen');

		const cloudResp = await resp.json();

		return cloudResp.secure_url;
	} catch (error) {
		console.error(error);
		throw new Error(error.message);
	}
};
