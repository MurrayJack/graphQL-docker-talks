import { useContext } from "react";
import { GraphQLContext } from "../App";

function useMutation(MUTATION) {
    const { mutate } = useContext(GraphQLContext);

    const runMutation = (VARS) => {
        mutate({ mutation: MUTATION, variables: VARS });
    }

    return [ runMutation ];
}

export default useMutation