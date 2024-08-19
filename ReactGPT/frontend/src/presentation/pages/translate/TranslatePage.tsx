import { useState } from 'react';
import {
    GptMessage,
    MyMessage,
    TextMessageBoxSelect,
    TypingLoader,
} from '../../components';
import { translateTextUseCase } from '../../../core/use-cases';

interface Message {
    text: string;
    isGpt: boolean;
}

const languages = [
    { id: "alemán", text: "Alemán" },
    { id: "arabe", text: "Árabe" },
    { id: "chino", text: "Chino" },
    { id: "español", text: "Español" },
    { id: "francés", text: "Francés" },
    { id: "japonés", text: "Japonés" },
    { id: "inglés", text: "Inglés" },
    { id: "italiano", text: "Italiano" },
    { id: "portugués", text: "Portugués" },
    { id: "ruso", text: "Ruso" },
];

export const TranslatePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);

    const handlePost = async (text: string, selectedOption: string) => {
        setIsLoading(true);

        const newMessage = `Traducir "${text}" al idioma ${selectedOption}`;

        setMessages((prev) => [...prev, { text: newMessage, isGpt: false }]);

        const { ok, message } = await translateTextUseCase(text, selectedOption);

        if (!ok) {
            return alert(message);
        }
        setMessages((prev) => [...prev, { text: message, isGpt: true }]);

        setIsLoading(false);
        //TODO: Añadir el mensaje de isGPT en true
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="grid grid-cols-12 gap-y-2">
                    {/* Bienvenida */}
                    <GptMessage text="¡Hola! Que tal, ¿Qué quieres traducir hoy?" />

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

            <TextMessageBoxSelect
                onSendMessage={handlePost}
                placeholder="Escribe tu mensaje..."
                options={languages}
            />
        </div>
    );
};
