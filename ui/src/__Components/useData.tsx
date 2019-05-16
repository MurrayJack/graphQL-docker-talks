import { useEffect, useState, useContext } from "react";
import { GraphQLContext } from "../App";

function useData<T>(QUERY, VARS: any = undefined, CACHEKEY: any = undefined) {
    const { query } = useContext(GraphQLContext);
    const [data, setData] = useState<{ Data: T, Loading: boolean }>({ Data: {} as T, Loading: true });

    useEffect(() => {
        const fetchData = async () => {
            const result = await query({ query: QUERY, variables: VARS })
            setData({ Data: result.data, Loading: false });
        };

        fetchData();
    }, [CACHEKEY]);

    return data
}

export default useData