import React, {useEffect, useMemo, useState} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import useLinkService from "../../services/LinkService";
import Options from "../../pages/Options";
import Test from "../../pages/Test";
import Result from "../../pages/Result";
import NoPage from "../../pages/NoPage";
import About from "../../pages/About";
import FormOptions from "../../pages/FormOptions";
import "./app.css";
import "../../styles/styles.css";
import useTestService from "../../services/TestService";
import Header from "../header/Header";

const App = () => {
    const linkService = useLinkService();
    const [links, setLinks] = useState({
        value: [],
        loading: linkService.loading,
        error: linkService.error
    });

    const subjectService = useTestService();
    const [optionSubjects, setOptionSubjects] = useState({
        value: [],
        loading: subjectService.loading,
        error: subjectService.error
    });

    const formService = useTestService();
    const [forms, setForms] = useState({
        value: [],
        loading: formService.loading,
        error: formService.error
    });

    const subjectListService = useTestService();
    const [subjectList, setSubjectList] = useState({
        value: [],
        loading: subjectListService.loading,
        error: subjectListService.error
    });

    const formsBySubjectService = useTestService();
    const [formsBySubjects, setFormsBySubjects] = useState({
        value: [],
        loading: formsBySubjectService.loading,
        error: formsBySubjectService.error
    });

    const [subjectOption, setSubjectOption] = useState({})
    const [formOption, setFormOption] = useState("");
    const [nameOption, setNameOption] = useState("");
    const [surnameOption, setSurnameOption] = useState("");

    const [burgerActive, setBurgerActive] = useState(true);
    const [firstSession, setFirstSession] = useState(true);

    const testService = useTestService();
    const [test, setTest] = useState({value: {}, loading: testService.loading, error: testService.error});

    const [testResult, setTestResult] = useState({
        value: {points: null, skipped: null, wrong: null, name: null, surname: null, subject: null, form: null},
        loading: true
    });

    useEffect(() => {
        try {
            async function fetchData() {
                return await linkService.getLinks();
            }

            fetchData().then(res => setLinks({
                value: res,
                loading: false,
                error: false,
            }));
        } catch (err) {
            throw "Links list error occurred: " + err;
        }

    }, []);

    useEffect(() => {
        try {
            async function fetchData() {
                return await subjectListService.getSubjects();
            }

            fetchData().then(res => setSubjectList({
                value: res.all,
                loading: false,
                error: false,
            }));
        } catch (err) {
            throw "Option menu error occurred: " + err;
        }
    }, []);

    useEffect(() => {
        try {
            async function fetchData() {
                return await formService.getForms();
            }

            fetchData().then(res => setForms({
                value: res.forms,
                loading: false,
                error: false,
            }));
        } catch (err) {
            throw "Forms list error occurred: " + err;
        }
    }, []);

    useEffect(() => {
        try {
            if (formOption) {
                async function fetchData() {
                    return await subjectService.getSubjects();
                }

                fetchData().then(res => setOptionSubjects({
                    value: res[formOption],
                    loading: false,
                    error: false,
                }));
            }
        } catch (err) {
            throw "Subject list error occurred: " + err;
        }

    }, [formOption]);

    const clearForm = () => {
        setNameOption("");
        setSurnameOption("");
        setFormOption("");
        setSubjectOption({});
    }

    const memoizedLinks = useMemo(() => links, [links]);
    const memoizedSubjectList = useMemo(() => subjectList, [subjectList]);
    const memoizedForms = useMemo(() => forms, [forms]);
    const memoizedSubjects = useMemo(() => optionSubjects, [optionSubjects]);

    const fetchTest = async (formOption, subjectOption) => {
        setTest({
            value: [],
            loading: true,
            error: false,
        })

        await testService.getTest(formOption, subjectOption).then(res => {
            setTest({
                value: res,
                loading: false,
                error: false,
            })
        });

    }

    const memoizedTest = useMemo(() => test, [test]);

    const HeaderComponent = () => {
        const location = useLocation();
        return location.pathname !== "/test" && <Header links={memoizedLinks} location={location.pathname}/>;
    };

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderComponent/>
                <Routes>
                    <Route exact path="/" element={
                        <Options subjectList={memoizedSubjectList}
                                 subjects={memoizedSubjects}
                                 forms={memoizedForms}
                                 setFormsBySubjects={setFormsBySubjects}
                                 getFormsBySubject={formsBySubjectService.getFormsBySubject}
                                 burgerActive={burgerActive} setBurgerActive={setBurgerActive}
                                 formOption={formOption} setFormOption={setFormOption}
                                 subjectOption={subjectOption} setSubjectOption={setSubjectOption}
                                 nameOption={nameOption} setNameOption={setNameOption}
                                 surnameOption={surnameOption} setSurnameOption={setSurnameOption}
                                 fetchTest={fetchTest} clearForm={clearForm}
                        />
                    }/>
                    <Route exact path="/forms" element={
                        <FormOptions subjectList={memoizedSubjectList}
                                     subjectOption={subjectOption} setSubjectOption={setSubjectOption}
                                     burgerActive={burgerActive} setBurgerActive={setBurgerActive}
                                     formOption={formOption} setFormOption={setFormOption}
                                     formsBySubjects={formsBySubjects} setFormsBySubjects={setFormsBySubjects}
                                     getFormsBySubject={formsBySubjectService.getFormsBySubject}
                                     fetchTest={fetchTest}
                        />
                    }/>
                    <Route exact path="/about" element={
                        <About links={memoizedLinks}/>
                    }/>
                    <Route exact path="/test" element={
                        <Test test={memoizedTest} setTestResult={setTestResult}
                              formOption={formOption} subjectOption={subjectOption}
                              nameOption={nameOption} surnameOption={surnameOption}
                              setFirstSession={setFirstSession}
                        />
                    }/>
                    <Route exact path="/result" element={
                        !firstSession ?
                            <Result testResult={testResult}
                                    formOption={formOption} subjectOption={subjectOption}
                                    fetchTest={fetchTest}
                            /> : <NoPage/>

                    }/>
                    <Route exact path="/*" element={
                        <NoPage/>
                    }/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}
// git push -u origin main

export default App;