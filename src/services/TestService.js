import {useHttp} from "../hooks/http.hook";

const useTestService = () => {
    const {loading, error, request, clearError} = useHttp();

    const getTest = async (testForm, testSubject) => {
        const path = `/data/tests/form${testForm}/${testSubject}.json`;

        return await request(path);
    }

    const getForms = async () => {
        const path = `/data/info/forms.json`;

        return await request(path);
    }

    const getSubjects = async () => {
        const path = `/data/info/subjects.json`;

        return await request(path);
    }

    return {loading, error, getTest, clearError, getForms, getSubjects};
}

export default useTestService;

