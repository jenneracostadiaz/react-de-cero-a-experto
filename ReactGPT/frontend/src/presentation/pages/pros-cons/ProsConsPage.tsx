import { useState } from 'react';
import { GptMessage, MyMessage, TextMessageBox, TypingLoader } from '../../components';
import { prosconsuseCase } from '../../../core/use-cases';

interface Message {
	text: string;
	isGpt: boolean;
}

export const ProsConsPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [messages, setMessages] = useState<Message[]>([]);

	const handlePost = async (text: string) => {
		setIsLoading(true);
		setMessages((prev) => [...prev, { text, isGpt: false }]);

		const { ok, content } = await prosconsuseCase(text);
		if (!ok) {
			setMessages((prev) => [...prev, { text: "No se pudo realizar la comparación", isGpt: false }]);
		} else {
			setMessages((prev) => [...prev, { text: content, isGpt: true }]);
		}

		setIsLoading(false);
		//TODO: Añadir el mensaje de isGPT en true
	};

	return (
		<div className="chat-container">
			<div className="chat-messages">
				<div className="grid grid-cols-12 gap-y-2">
					{/* Bienvenida */}
					<GptMessage text="Puedes escribirme lo que quieras que compare y te ayudaré a encontrar los pros y contras" />

					{messages.map((message, index) =>
						message.isGpt ? (
							<GptMessage key={index} text={message.text} />
						) : (
							<MyMessage key={index} text={message.text} />
						)
					)}

					{isLoading && (
						<div className="col-start-2 col-end-12 fade-in">
							<TypingLoader />
						</div>
					)}
				</div>
			</div>

			<TextMessageBox
				onSendMessage={handlePost}
				placeholder="Escribe algo..."
				disableCorrections={true}
			/>
		</div>
	);
};
