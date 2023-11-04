import React, {useEffect, useMemo, useRef, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import useLinkService from "../../services/LinkService";
import Options from "../../pages/Options";
import Test from "../../pages/Test";
import Result from "../../pages/Result";
import NoPage from "../../pages/NoPage";
import "./app.css";
import useTestService from "../../services/TestService";

const App = () => {
    const linkService = useLinkService();
    const subjectService = useTestService();
    const formService = useTestService();
    const [links, setLinks] = useState({value: [], loading: true, error: false});
    const [subjects, setSubjects] = useState({value: [], loading: true, error: false});
    const [forms, setForms] = useState({value: [], loading: true, error: false});
    const [burgerActive, setBurgerActive] = useState(true);

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
            return await subjectService.getTestInfo();
        }

        fetchData().then(res => setSubjects({
            value: res.tests,
            loading: false,
            error: false,
        }));
    }, []);

    useEffect(() => {
        async function fetchData() {
            return await formService.getTestInfo();
        }

        fetchData().then(res => setForms({
            value: res.forms,
            loading: false,
            error: false,
        }));
    }, []);

    const memoizedLinks = useMemo(() => links, [links]);
    const memoizedSubjects = useMemo(() => subjects, [subjects]);
    const memoizedForms = useMemo(() => forms, [forms]);


    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={
                        <Options links={memoizedLinks}
                                 subjects={memoizedSubjects}
                                 forms={memoizedForms}
                                 burgerActive={burgerActive}
                                 setBurgerActive={setBurgerActive}
                        />
                    }/>
                    <Route path="/test" element={
                        <Test />
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