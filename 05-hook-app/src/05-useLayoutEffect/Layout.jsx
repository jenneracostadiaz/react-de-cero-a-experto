import { useCounter, useFetch } from "../Hooks";
import { LoadignQuote, Quote } from "../03-examples";

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />

            {
                (isLoading)
                    ?  <LoadignQuote />
                    : <Quote quote={quote} author={author} />
            }
            <button className="btn btn-primary" disabled={ isLoading } onClick={ () => increment(1) }>Next quote</button>
        </>
    )
}
