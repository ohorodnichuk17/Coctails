import React, { useState } from "react";

export const CoctailsContext = React.createContext(null);

export default function CoctailsContextProvider({ children }) {

    const [contextCoctails, setContextCoctails] = useState(false);

    return (
        <CoctailsContext.Provider value={{
            contextCoctails, setContextCoctails
        }} >
            {children}
        </CoctailsContext.Provider>
    );
}