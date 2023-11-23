import {useState, useCallback} from "react";
import axios from "axios";

export const useHttp = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const request = useCallback(async (url) => {
        setLoading(true);

        try {
            const response = await axios.get(url);

            setLoading(false);

            return response.data;
        } catch (err) {
            setLoading(false);
            setError(true);
            throw "Something went wrong in " + err;
        }
    }, []);

    const clearError = () => {
        setError(false);
    }

    return { loading, error, request, clearError};
};



