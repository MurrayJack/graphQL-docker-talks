import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";
import React, { createContext } from "react";
import { ApolloProvider } from "react-apollo";
import './App.css';
import EntrySelectorRenderProps from "./1.EntrySelector/EntrySelectorRenderProps";
import EntrySelectorHOC from "./2.EntrySelector/EntrySelectorHOC";
import EntrySelectorHooks from "./3.EntrySelector/EntrySelectorHooks";
import EntryEditorHooks from "./EntryEditor/EntryEditor";

const client = new ApolloClient({
    link: new HttpLink({
        uri: "http://localhost:2000",
    }),
    cache: new InMemoryCache(),
});

export const GraphQLContext = createContext<any>(undefined, undefined);

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <GraphQLContext.Provider value={client}>

                {/* Picture ! */}

                {/* Examples  */}

                {/*  */}
                <EntrySelectorRenderProps />

                {/* HOC version of the entry selector */}
                <EntrySelectorHOC />

                {/* Hooks example */}
                <EntrySelectorHooks />

                {/* Mutation */}
                <EntryEditorHooks EntryId={1} />

                {/* Grids */}

                {/* All In */}


                
            </GraphQLContext.Provider>
        </ApolloProvider>
    );
}

export default App;
