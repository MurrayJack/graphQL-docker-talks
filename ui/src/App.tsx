import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import React, { createContext } from "react";
import { ApolloProvider } from "react-apollo";
import './App.css';
import EntrySelectorRenderProps from "./1.EntrySelector/EntrySelectorRenderProps";
import EntrySelectorHOC from "./2.EntrySelector/EntrySelectorHOC";
import EntrySelectorHooks from "./3.EntrySelector/EntrySelectorHooks";
import EntryEditorHooks from "./EntryEditor/EntryEditor";
import Grid from "./Grid/Grid";
import StarRez from "./__Components/StarRez";
import AllTogether from "./AllTogether/AllTogether";

const image = require("./__Assets/Screen.png")

const client = new ApolloClient({
    link: new HttpLink({
        uri: "http://localhost:2000",
    }),
    cache: new InMemoryCache(),
});

export const GraphQLContext = createContext<any>(undefined, undefined);

const App: React.FC = () => {
    return (
        // <img src={image} />

        <StarRez>

            <ApolloProvider client={client}>
                <GraphQLContext.Provider value={client}>
                    {/* <div style={{ padding: "50px" }} > */}
                        {/* Examples  */}

                        {/*  */}
                        {/* <EntrySelectorRenderProps /> */}

                        {/* HOC version of the entry selector */}
                        {/* <EntrySelectorHOC /> */}

                        {/* Hooks example */}
                        {/* <EntrySelectorHooks /> */}

                        {/* Mutation */}
                        {/* <EntryEditorHooks EntryId={1} /> */}

                        {/* Grids */}
                        {/* <Grid EntryId={1} /> */}
                    {/* </div> */}

                    {/* All In */}
                    <AllTogether />

                </GraphQLContext.Provider>
            </ApolloProvider>
        </StarRez>
    );
}

export default App;
