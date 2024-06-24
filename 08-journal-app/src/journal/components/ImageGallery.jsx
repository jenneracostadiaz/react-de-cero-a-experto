import { Box, ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images }) => {
	return (
		<Box sx={{ width: '100%', height: 800, overflowY: 'scroll' }}>
			<ImageList variant="masonry" cols={4} gap={12}>
				{images.map((img) => (
					<ImageListItem key={img}>
						<img
							srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							src={`${img}?w=248&fit=crop&auto=format`}
							alt="Imagen de la nota"
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};
