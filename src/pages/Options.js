import React, {useEffect, useMemo, useState} from "react";
import useTestService from "../services/TestService";
import Header from "../components/header/Header";
import OptionsMenu from "../components/options-menu/OptionsMenu";
import Intro from "../components/intro/Intro";
import TestOptions from "../components/test-options/TestOptions";
import Footer from "../components/footer/Footer";

function Options({links, linksError, linksLoading, subjects, subjectsError, subjectsLoading}) {

    return (
        <div className="options-wrapper">
            <Header links={links} error={linksError} loading={linksLoading}/>
            <div className="home-components-group">
                <OptionsMenu subjects={subjects} error={subjectsError} loading={subjectsLoading}/>
                <div className="home-components">
                    <Intro />
                    <TestOptions />
                    {/*<Footer links={links} error={linksError} loading={linksLoading}/>*/}
                </div>
            </div>
        </div>
    )
}

export default Options;