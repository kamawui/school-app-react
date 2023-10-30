import React, {useEffect, useMemo, useState} from "react";
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
    const testService = useTestService();
    const [links, setLinks] = useState([]);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            return await linkService.getLinks();
        }

        fetchData().then(setLinks);
    }, []);

    useEffect(() => {
        async function fetchData() {
            return await testService.getTestInfo();
        }

        fetchData().then(res => setSubjects(res.tests));
    }, []);

    const memoizedLinks = useMemo(() => links, [links]);
    const memoizedSubjects = useMemo(() => subjects, [subjects]);

    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={
                        <Options links={memoizedLinks}
                                 linksError={linkService.error}
                                 linksLoading={linkService.loading}
                                 subjects={memoizedSubjects}
                                 subjectsError={testService.error}
                                 subjectsLoading={testService.loading}
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