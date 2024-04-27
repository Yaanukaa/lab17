import "./article.css";
import News from "../../../sectcomps/news/news";
import About from "../../../sectcomps/adout/about";
import Contacts from "../../../sectcomps/contacts/contacts";
import Form from "../../../sectcomps/form/form";
import Service from "../../../sectcomps/service/service";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

export function Article() {
    return (
        <article className="article">
            <BrowserRouter>
            <div class="article article__nav">
                <div class="container-nav article__container-nav">
                    <nav class="nav container-nav__nav">
                        < Link to='/about' class="nav__nav-link">
                            О нас
                        </Link>
                        < Link to='/news' class="nav__nav-link">
                            Новости
                        </Link>
                        < Link to='/service' class="nav__nav-link">        
                            Размещение
                        </Link>
                        < Link to='/form' class="nav__nav-link">
                            Контакты
                        </Link>
                    </nav>
                </div>
            </div>
            </BrowserRouter>
        </article>
    );
}