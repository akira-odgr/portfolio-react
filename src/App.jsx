import { Header } from "./component/header/Header";
import { Hero } from "./component/hero/Hero";
import "./App.scss";
import { About } from "./component/about/About";

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
        </>
    );
};
