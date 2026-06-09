import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import Character from './pages/Character';
import Favorites from './pages/Favorites';

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache()
})

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
     
                <ApolloProvider client={client}>
                    <App />
                </ApolloProvider>
   
    );
} else {
    console.error("Root container not found");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
