import { Fragment, useState } from 'react';
import Demos from './Demos';
// import logo from './logo.svg'
import './App.css';
const BR = () => (
    <Fragment>
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        <br aria-hidden="true" />
    </Fragment>
);
function App() {
    return (
        <Fragment>
            <main>
                <br aria-hidden="true" />
                <header className="flex">
                    <h1> Print layouts made easy </h1>
                    <a href="https://github.com/">Docs</a>
                </header>
                <br aria-hidden="true" />
                <br aria-hidden="true" />
                <Demos kind="b" badge="Demo A" />
                {/* <br />
                <p>Compose your own version</p>
                <Demos kind="d" /> */}
                {/* <br />
                <p>Provide only one array of items</p>
                <Demos kind="e" /> */}
                <BR />
                <Demos kind="a" badge="Demo B" />
                <BR />
                <Demos kind="c" badge="Demo C" />
            </main>
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            <footer>
                <h2>
                    <a href="https://polmoneys.com">🙏🏽</a>
                </h2>
            </footer>
            <br aria-hidden="true" />
            <br aria-hidden="true" />
        </Fragment>
    );
}

export default App;
