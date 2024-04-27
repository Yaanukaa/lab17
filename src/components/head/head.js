import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./head.css";

export default function Head() {
    return (
        <header className="header">
            {/*<BrowserRouter>
                <Link to='/news'>Новости</Link>
                <Link to='/contacts'>Контакты</Link>
                <Link to='/about'>О проекте</Link>
            </BrowserRouter>*/ }
            
                <div class="container header__container">
                    <div class="head header__head">
                        <a href="" class="head__logo-link">
                            <img src="/image/Logo.png" alt="Lagoona Сеть отелей" class="head__logo" />
                        </a>  
                    </div>
                    
                </div>
            </header>
    );
}