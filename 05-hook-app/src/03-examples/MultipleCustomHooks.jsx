import { useFetch } from "../Hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1');
    
    
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
            <button className="btn btn-primary">Next quote</button>
        </>
    )
}
