import React, {useEffect, useMemo, useRef, useState} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import useLinkService from "../../services/LinkService";
import Options from "../../pages/Options";
import Test from "../../pages/Test";
import Result from "../../pages/Result";
import NoPage from "../../pages/NoPage";
import About from "../../pages/About";
import FormOptions from "../../pages/FormOptions";
import "./app.css";
import useTestService from "../../services/TestService";

const App = () => {
    const linkService = useLinkService();
    const [links, setLinks] = useState({value: [], loading: true, error: false});
    const subjectService = useTestService();
    const [optionSubjects, setOptionSubjects] = useState({value: [], loading: true, error: false});
    const formService = useTestService();
    const [forms, setForms] = useState({value: [], loading: true, error: false});
    const subjectListService = useTestService();
    const [subjectList, setSubjectList] = useState({value: [], loading: true, error: false});

    const [subjectOption, setSubjectOption] = useState({})
    const [formOption, setFormOption] = useState("");
    const [nameOption, setNameOption] = useState("");
    const [surnameOption, setSurnameOption] = useState("");

    const [burgerActive, setBurgerActive] = useState(true);
    const [activeTab, setActiveTab] = useState(window.location.pathname);

    const testService = useTestService();
    const [test, setTest] = useState({value: {}, loading: testService.loading, error: testService.error});

    useEffect( () => {
        async function fetchData() {
            return await linkService.getLinks();
        }

        fetchData().then(res => setLinks({
            value: res,
            loading: false,
            error: false,
        }));
    }, []);

    useEffect(() => {
        async function fetchData() {
            return await subjectListService.getSubjects();
        }

        fetchData().then(res => setSubjectList({
            value: res.all,
            loading: false,
            error: false,
        }));
    }, []);

    useEffect(() => {
        async function fetchData() {
            return await formService.getForms();
        }

        fetchData().then(res => setForms({
            value: res.forms,
            loading: false,
            error: false,
        }));
    }, []);

    useEffect(() => {
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
    }, [formOption]);

    const memoizedLinks = useMemo(() => links, [links]);
    const memoizedSubjectList = useMemo(() => subjectList, [subjectList]);
    const memoizedForms = useMemo(() => forms, [forms]);
    const memoizedSubjects = useMemo(() => optionSubjects, [optionSubjects]);

    const fetchTest = async () => {
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

    return (

        <div className="app-wrapper">
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={
                        <Options links={memoizedLinks}
                                 subjectList={memoizedSubjectList}
                                 subjects={memoizedSubjects}
                                 forms={memoizedForms}
                                 burgerActive={burgerActive} setBurgerActive={setBurgerActive}
                                 formOption={formOption} setFormOption={setFormOption}
                                 subjectOption={subjectOption} setSubjectOption={setSubjectOption}
                                 activeTab={activeTab} setActiveTab={setActiveTab}
                                 nameOption={nameOption} setNameOption={setNameOption}
                                 surnameOption={surnameOption} setSurnameOption={setSurnameOption}
                                 fetchTest={fetchTest}
                        />
                    }/>
                    <Route path="/test" element={
                        <Test test={memoizedTest}/>
                    }/>
                    <Route path="/about" element={
                        <About links={memoizedLinks}
                               activeTab={activeTab}
                               setActiveTab={setActiveTab}
                        />
                    }/>
                    <Route path="/forms" element={
                        <FormOptions links={memoizedLinks}
                                     activeTab={activeTab}
                                     setActiveTab={setActiveTab}
                        />
                    }/>
                    <Route path="/result" element={
                        <Result />
                    }/>
                    <Route path="/*" element={
                        <NoPage />
                    }/>
                </Routes>
            </BrowserRouter>
        </div>

    )
}
// git push -u origin main

export default App;