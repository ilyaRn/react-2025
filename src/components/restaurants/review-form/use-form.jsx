    import { useReducer } from "react";

    const DEFAULT_FORM_VALUE = {
        name: "",
        text: "",
        clearCounter: 0,
    };

    const SET_NAME_ACTION = "SET_NAME";
    const SET_TEXT_ACTION = "SET_TEXT";
    const CLEAR_ACTION = "CLEAR_ACTION";

    const reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_NAME_ACTION:
            return { ...DEFAULT_FORM_VALUE, name: payload };
        case SET_TEXT_ACTION:
            return { ...state, text: payload };
        case CLEAR_ACTION:
            return { ...DEFAULT_FORM_VALUE, clearCounter: state.clearCounter + 1 };
        default:
            return state;
    }
    };

    export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const setName = (name) => {
        dispatch({ type: SET_NAME_ACTION, payload: name });
    };

    const setText = (text) => {
        dispatch({ type: SET_TEXT_ACTION, payload: text });
    };

    const clear = () => {
        dispatch({ type: CLEAR_ACTION });
    };

    return {
        form,
        setName,
        setText,
        clear,
    };
};