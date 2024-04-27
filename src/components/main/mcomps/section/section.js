import "./section.css";
import News from "../../../sectcomps/news/news";
import About from "../../../sectcomps/adout/about";
import Contacts from "../../../sectcomps/contacts/contacts";
import Form from "../../../sectcomps/form/form";
import Service from "../../../sectcomps/service/service";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export function Section() {
    return (
        <section class="section">
                <BrowserRouter>
                <Routes>
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/service" element={<Service />} />
                </Routes>
            </BrowserRouter>
                 < About />
                < News />
                < Service />
                < Form />
                < Contacts />
        </section>
        
    );
}


