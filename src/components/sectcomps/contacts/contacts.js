export default function Contacts() {
    return (
        <section class="contacts">
        <div class="container ">
            <h2 class="main-heading">
                Контакты
            </h2>
            <div class="container-contacts">
                <img src="image/Contact_photo.png" alt="" class="contacts-img" />
                <div>
                    <div class="contacts-box">
                        <ul class="contacts-content">
                            <il>
                                <h3 class="contacts-heading">
                                    Адрес
                                </h3>
                            </il>
                            <il class="column adress">
                                <p class="contacts-description-text">
                                    Москва, улица Юности, дом 5 строение 4, офис 2
                                </p>
                            </il>
                        </ul>
                        <ul class="contacts-content">
                            <il>
                                <h3 class="contacts-heading">
                                    Телефоны
                                </h3>
                            </il>
                            <il class="column number1 contacts-description-text">
                                <a href="tel:+74995356434" class="number contacts-number-link">
                                    +7 (499) 535-64-34
                                </a>
                                <a href="tel:+74950050544" class="number contacts-number-link">
                                    +7 (495) 005-05-44
                                </a>
                            </il>
                        </ul>
                        <ul class="contacts-content">
                            <il>
                                <h3 class="contacts-heading">
                                    E-mail
                                </h3>
                            </il>
                            <il class="column mail1 contacts-description-text">
                                <a href="mailto:lg.oona@mail.ru" class="mail contacts-mail-link">
                                    lg.oona@mail.ru
                                </a>
                                <p class="contacts-mail-description">
                                    по вопросам бранирования
                                </p>
                                <a href="mailto:hotels.ln@mail.ru" class="mail contacts-mail-link">
                                    hotels.ln@mail.ru
                                </a>
                                <p class="contacts-mail-description">
                                    по вопросам сотрудничества
                                </p>
                            </il>
                        </ul>
                        <ul class="contacts-content">
                            <il>
                                <h3 class="contacts-heading">
                                    График
                                </h3>
                            </il>
                            <il class="column chart">
                                <p class="contacts-description-text">  
                                    Понедельник - Пятница, с 10:00 до 19:00
                                </p>
                            </il>
                        </ul>
                    </div>
                    <a href="#" class="button contacts-link">
                        Построить маршрут
                </a> 
                </div>
            </div>
        </div>
    </section>
    );
   }
   