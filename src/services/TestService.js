import {useHttp} from "../hooks/http.hook";

const useTestService = () => {
    const {loading, error, request, clearError} = useHttp();

    const getTest = async (testForm, testSubject) => {
        const path = `/data/tests/form${testForm}/${testSubject}/test.json`;

        return await request(path);
    }

    const getTestInfo = async () => {
        const path = `/data/tests/info/info.json`;

        return await request(path);
    }

    return {loading, error, getTest, clearError, getTestInfo};
}

export default useTestService;

