import "./section.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

export function Section() {
    return (
        <section className="section">
            <div class="section section__nav">
                <div class="container-nav section__container-nav">
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
                            Обратная связь
                        </Link>
                        < Link to='/contacts' class="nav__nav-link">
                            Контакты
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}