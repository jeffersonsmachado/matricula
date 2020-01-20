import { useEffect, useState } from 'react';

export const useGET = (url) => {

    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(result => result.json())
            .then( data => {
                setState(data.data);
                setIsLoading(false);
            })
    }, [url]);

    return [ isLoading, state ];
}

export const usePOST = (url, data) => {

    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(result => result.json())
            .then(data => {
                setState(data.data);
                setIsLoading(false);
            })
    }, [url]);

    return [isLoading, state];
}