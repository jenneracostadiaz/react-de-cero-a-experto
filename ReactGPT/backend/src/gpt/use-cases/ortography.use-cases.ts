import OpenAI from "openai";

interface Options {
    prompt: string;
}

export const orthographyCheckUseCase = async (openai: OpenAI, options: Options) => {

    const { prompt } = options;

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `
                    Te serán proveídos textos con posibles errores ortográficos y gramaticales.
                    Debes de responder en formato JSON,
                    tu tarea es corregirlos y retornar información sobre los errores encontrados.
                    también deber de dar un porcentaje de acierto por el usuario.

                    Si no hay errores, deber retornar un mensaje de felicitaciones.

                    Ejemplo de salida:
                    {
                        userScore: number,
                        errors: string[], //[ 'error -> solución' ]
                        message: string, // Usa emojis y texto para felicitar al usuario
                    }
                `
            },
            {
                role: "user",
                content: prompt,
            }
        ],
        model: "gpt-4o",
        temperature: 0.3,

    });

    const jsonResp = JSON.parse(completion.choices[0].message.content);
    return jsonResp;
}