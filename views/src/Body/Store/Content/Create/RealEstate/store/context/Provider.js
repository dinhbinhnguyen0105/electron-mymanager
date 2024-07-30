import { useReducer } from "react";
import Context from "./Context";
import { initState } from "../reducer/reducer";
import reducer from "../reducer/reducer";

function Provider({ children }) {
    const [state, dispath] = useReducer(reducer, initState);

    return (
        <Context.Provider value={[state, dispath]}>
            {children}
        </Context.Provider>
    );
}

export default Provider;