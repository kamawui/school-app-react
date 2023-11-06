import {useHttp} from "../hooks/http.hook";

const useTestService = () => {
    const {loading, error, request, clearError} = useHttp();

    const getTest = async (testForm, testSubject) => {
        const path = `/data/tests/form${testForm}/${testSubject.tag}.json`;

        const response = await request(path);
        const { questions } = response;

        return {
            title: testSubject.title,
            questions: getRandomQuestions(questions)
        };
    }

    const getForms = async () => {
        const path = `/data/info/forms.json`;

        return await request(path);
    }

    const getSubjects = async () => {
        const path = `/data/info/subjects.json`;

        return await request(path);
    }

    const getRandomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getRandomQuestions = (questions) => {
        const randomQuestions = [];

        for (let i = 1; i <= 12 && questions.length > 0; i++) {
            let randomQuestion = questions.splice(getRandomNum(0, questions.length - 1), 1)[0];

            randomQuestion.index = i;

            randomQuestions.push(randomQuestion);
        }

        return randomQuestions;
    }

    return {loading, error, getTest, clearError, getForms, getSubjects};
}

export default useTestService;

