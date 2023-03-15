import React from "react";
import ReactDOM from "react-dom/client";
import DestinationIndex from "./Components/DestinationIndex";
import Header from "./Layout/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <DestinationIndex />
    </React.StrictMode>
);
