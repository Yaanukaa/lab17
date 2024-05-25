import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./head.css";

export default function Head() {
    return (
        <header className="header">
                <div class="container header__container">
                    <div class="head header__head">
                        < Link to="/" class="head__logo-link">
                            <img src="/image/Logo.png" alt="Lagoona Сеть отелей" class="head__logo" />
                        </Link>  
                    </div>
                    
                </div>
            </header>
    );
}