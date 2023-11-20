import {useHttp} from "../hooks/http.hook";
import useTestService from "./TestService";

const useTester = () => {
    const {loading, error, request, clearError} = useHttp();


    const getTest = async (form, subject) => {
        const path = `/data/tests/form${form}/${subject}.json`;

        const response = await request(path);
        const { questions } = response;

        return questions;
    }

    const checkForDuplicates = (test) => {
        let isClear = true;
        let count = 0;
        for (let i = 0; i < test.length; i++) {
            for (let j = i + 1; j < test.length; j++) {
                if (JSON.stringify(test[i]) === JSON.stringify(test[j])) {
                    isClear = false;
                    console.log(test[i]);
                    console.log(j)
                }
            }
            count++;
        }
        if (isClear) {
            console.log("clear");
        }
        console.log("Total count: " + count);
        console.log("--------------------------------------------------------");
    }

    return {loading, error, clearError, getTest, checkForDuplicates};
}

export default useTester;