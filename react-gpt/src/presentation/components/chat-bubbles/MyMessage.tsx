interface Props {
	text: string;
}
export const MyMessage = ({ text }: Props) => {
	return (
		<div className="col-start-6 col-end-13 p-3 rounded-lg">
			<div className="flex items-start justify-start flex-row-reverse">
				<div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
					J
				</div>
				<div className="relative mr-3 text-sm bg-black bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl">
					{/* <Markdown>{text}</Markdown> */}
					{text}
				</div>
			</div>
		</div>
	);
};
