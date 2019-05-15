import { useEffect, useState, useContext } from "react";
import { GraphQLContext } from "../App";

function useData<T>(QUERY, VARS: any = undefined) {
    const { query } = useContext(GraphQLContext);
    const [data, setData] = useState<{ Data: T, Loading: boolean }>({ Data: {} as T, Loading: true });

    useEffect(() => {
        query({ query: QUERY, variables: VARS }).then(e => setData({ Data: e.data, Loading: false }));
    }, []);

    return data
}

export default useData