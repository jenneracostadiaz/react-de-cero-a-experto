import { useCounter } from "../Hooks/useCounter";
import { useFetch } from "../Hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />

            {
                (isLoading)
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-2">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }
            <button className="btn btn-primary" disabled={ isLoading } onClick={ () => increment(1) }>Next quote</button>
        </>
    )
}
