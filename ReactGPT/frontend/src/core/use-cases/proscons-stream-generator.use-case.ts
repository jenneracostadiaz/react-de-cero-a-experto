export async function* prosconsStreamGeneratorUseCase(prompt: string, abortSignal: AbortSignal) {
    try {

        const resp = await fetch(`${import.meta.env.VITE_GPT_API}/pros-cons-discusser-stream`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
            signal: abortSignal,
        });

        if (!resp.ok) throw new Error('Error en la comparación de pros y contras');

        const reader = resp.body?.getReader();

        if (!reader) {
            console.log('No se pudo generar el reader');
            return null;
        }


        const decoder = new TextDecoder('utf-8');

        let text = '';

        while (true) {
            const { value, done } = await reader.read();
            if (done) {
                break;
            }

            const decodedChunk = decoder.decode(value, { stream: true });
            text += decodedChunk;
            console.log(text);
            yield text;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}