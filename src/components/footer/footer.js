import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
        <div class="container footer-container">
            <div class="footer-content">
                <p class="footer-description">
                    © 2012-2020 Управляющая компания Объединенной сети «Лагуна Хотелс»
                </p>
                <p class="footer-description">
                    Представленная на сайте информация носит справочный характер и не является публичной офертой
                </p>
                <a href="#" class="footer-link">Пользовательское соглашение</a>
            </div>
            <div class="footer-content">
                <p class="footer-description">
                    11710,улица Юности, дом 5, строение 4, офис 2
                </p>
               <div class="footer-link-contact">
                <a href="tel:+74995356434" class="number footer-link">
                    +7 (499) 535-64-34
                   </a>
               <a href="tel:+74950050544" class="number footer-link">
                   +7 (495) 005-05-44
               </a>
               <a href="mailto:lg.oona@mail.ru" class="mail footer-link">
                    lg.oona@mail.ru
               </a>
               <a href="mailto:hotels.ln@mail.ru" class="mail footer-link">
                    hotels.ln@mail.ru
               </a>
               </div>
            </div>
            <div class="footer-links">
                <a href="" class="sova">
                    <svg width="25" height="25" viewbox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M17.1779 11.7844C16.3343 11.7844 15.6441 12.449 15.6441 13.2926C15.6441 14.1362 16.3343 14.8263 17.1523 14.8263C17.9959 14.8263 18.6605 14.1362 18.6605 13.3182C18.6861 12.449 18.0214 11.7844 17.1779 11.7844ZM17.1779 14.0595C16.7433 14.0595 16.411 13.7272 16.411 13.2926C16.411 12.858 16.7433 12.5257 17.1779 12.5257C17.6124 12.5257 17.9447 12.8836 17.9447 13.2926C17.9447 13.7272 17.5869 14.0595 17.1779 14.0595Z" fill="#999999"/>
                        <path d="M7.7965 9.58598C5.77707 9.56042 4.01327 11.2475 4.06439 13.3948C4.08996 15.3886 5.75151 17.1013 7.84762 17.0757C9.89261 17.0502 11.5542 15.3886 11.5542 13.3436C11.5542 11.2731 9.89261 9.58598 7.7965 9.58598ZM7.84762 15.6187C6.49282 15.6698 5.39364 14.5962 5.39364 13.2925C5.39364 11.9633 6.49282 10.9408 7.71981 10.9663C8.99793 10.9663 10.046 11.9888 10.046 13.2925C10.0715 14.5962 9.04905 15.5676 7.84762 15.6187Z" fill="#999999"/>
                        <path d="M12.5 0C5.59815 0 0 5.59815 0 12.5C0 19.4018 5.59815 25 12.5 25C19.4018 25 25 19.4018 25 12.5C25 5.59815 19.4018 0 12.5 0ZM19.683 17.3568C18.9161 17.8425 18.0726 18.0726 17.1779 18.0726C16.7945 18.0726 16.411 18.0215 16.0532 17.9192C15.1585 17.6891 14.3916 17.229 13.7525 16.5644C13.6759 16.4877 13.5992 16.3855 13.4969 16.2832C13.1646 16.7945 12.8323 17.2801 12.5 17.7914C12.1677 17.2801 11.8354 16.7945 11.5031 16.3088C11.4775 16.3088 11.4775 16.3343 11.4775 16.3343L11.4519 16.3599C10.6851 17.2801 9.71369 17.817 8.53782 18.0215C7.8732 18.1237 7.23414 18.0981 6.59509 17.9192C5.7004 17.6636 4.93353 17.2035 4.29447 16.4877C3.68098 15.7975 3.3231 15.0051 3.16973 14.0849C3.01636 13.2413 3.19529 12.4233 3.24642 12.2188C3.39979 11.6309 3.62985 11.1196 3.98773 10.6339C4.01329 10.6084 4.01329 10.5317 4.01329 10.5061C3.88548 9.99488 3.62985 9.53475 3.34867 9.07463C3.27198 8.97238 3.19529 8.87013 3.11861 8.74232V8.71676C3.14417 8.71676 3.14417 8.71676 3.16973 8.71676C4.11554 8.71676 5.06134 8.71676 6.00715 8.71676C6.05828 8.71676 6.08384 8.6912 6.13496 8.66564C6.79958 8.23108 7.51533 7.89876 8.25664 7.64314C8.79345 7.4642 9.33026 7.31083 9.89263 7.20858C10.4294 7.10633 10.9662 7.02964 11.5286 7.00408C12.8579 6.90183 13.9315 7.02964 14.6472 7.13189C15.184 7.20858 15.6953 7.33639 16.2065 7.48977C17.1012 7.77095 17.9192 8.15439 18.7116 8.64007C18.7628 8.66564 18.8394 8.6912 18.9161 8.6912C19.8364 8.6912 20.7566 8.6912 21.6769 8.6912C21.7536 8.6912 21.8302 8.6912 21.9069 8.6912C21.9069 8.71676 21.9069 8.71676 21.9069 8.71676C21.8558 8.79345 21.8302 8.84457 21.7791 8.92126C21.4724 9.40694 21.1912 9.89263 21.0378 10.455C21.0122 10.5061 21.0122 10.5572 21.0634 10.6339C21.8814 11.8098 22.137 13.1135 21.8047 14.5194C21.4468 15.7208 20.7566 16.6667 19.683 17.3568Z" fill="#999999"/>
                        <path d="M7.71982 11.7844C6.90182 11.7844 6.21164 12.4746 6.21164 13.2926C6.21164 14.1362 6.90182 14.8008 7.74538 14.8008C8.56338 14.8008 9.25356 14.1106 9.25356 13.267C9.25356 12.449 8.58894 11.7844 7.71982 11.7844ZM7.74538 14.085C7.31082 14.085 6.95295 13.7527 6.95295 13.2926C6.95295 12.858 7.28526 12.5257 7.71982 12.5257C8.15438 12.5257 8.48669 12.858 8.51225 13.2926C8.53781 13.7272 8.17994 14.0595 7.74538 14.085Z" fill="#999999"/>
                        <path d="M17.1012 9.61152C15.0562 9.66264 13.4458 11.2986 13.4202 13.3436C13.4202 15.4142 15.1073 17.1268 17.1779 17.1013C19.2484 17.1013 20.9356 15.4397 20.9356 13.3436C20.9356 11.1964 19.1718 9.56039 17.1012 9.61152ZM17.2801 15.6187C15.9253 15.6698 14.8517 14.5962 14.8517 13.2925C14.8517 11.9633 15.9509 10.9408 17.1779 10.9663C18.456 10.9663 19.5041 11.9888 19.5041 13.2925C19.5041 14.5706 18.4816 15.5675 17.2801 15.6187Z" fill="#999999"/>
                        <path d="M13.9826 9.86723C14.8006 9.10035 15.7975 8.71692 16.9223 8.61467C15.593 8.02674 14.1871 7.77111 12.73 7.74555C11.094 7.71999 9.48361 7.95005 7.97543 8.58911C9.12574 8.6658 10.1227 9.04923 10.9662 9.8161C11.8098 10.583 12.2955 11.5543 12.4744 12.6791C12.6789 11.5799 13.1646 10.6341 13.9826 9.86723Z" fill="#999999"/>
                        </g>
                        <defs>
                        <clippath id="clip0">
                        <rect width="25" height="25" fill="white"/>
                        </clippath>
                        </defs>
                        </svg>
                </a>
                <a href="" class="twitter">
                    <svg width="25" height="25" viewbox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M12.5 0C5.59815 0 0 5.59815 0 12.5C0 19.4018 5.59815 25 12.5 25C19.4018 25 25 19.4018 25 12.5C25 5.59815 19.4018 0 12.5 0ZM20.0409 9.15132C20.0409 9.30469 20.0409 9.45807 20.0409 9.58588C20.0409 14.9284 15.9765 20.4499 9.17688 20.4499C7.10633 20.4499 5.08691 19.8619 3.3231 18.7372C3.29754 18.7116 3.27198 18.6605 3.29754 18.635C3.3231 18.5838 3.34867 18.5583 3.39979 18.5838C3.68098 18.6094 3.98773 18.635 4.29447 18.635C5.9049 18.635 7.43864 18.1237 8.74232 17.1779C7.18302 17.0501 5.85378 16.002 5.36809 14.4939C5.36809 14.4683 5.36809 14.4172 5.39366 14.3916C5.41922 14.366 5.44478 14.366 5.47034 14.366C5.9049 14.4427 6.33946 14.4427 6.74846 14.3916C5.13803 13.9059 4.01329 12.3977 4.01329 10.6851V10.6339C4.01329 10.6084 4.03885 10.5828 4.06441 10.5572C4.08998 10.5317 4.11554 10.5317 4.16666 10.5572C4.57566 10.7873 5.03578 10.9407 5.52147 10.9918C4.60122 10.2505 4.06441 9.15132 4.06441 7.94989C4.06441 7.25971 4.24335 6.59509 4.60122 6.00715C4.62678 5.98159 4.65235 5.95603 4.67791 5.95603C4.70347 5.95603 4.72903 5.95603 4.7546 5.98159C6.64621 8.2822 9.40694 9.71369 12.3722 9.89263C12.3211 9.637 12.2955 9.38138 12.2955 9.12576C12.2955 6.97852 14.0337 5.24028 16.181 5.24028C17.229 5.24028 18.2515 5.67484 18.9673 6.41615C19.7853 6.23721 20.5777 5.95603 21.2934 5.52147C21.319 5.4959 21.3701 5.4959 21.3957 5.52147C21.4212 5.54703 21.4468 5.59815 21.4212 5.62372C21.1656 6.39059 20.7055 7.05521 20.0664 7.54089C20.6799 7.43864 21.2679 7.25971 21.8047 7.00408C21.8302 6.97852 21.8814 7.00408 21.9069 7.02964C21.9325 7.05521 21.9325 7.10633 21.9069 7.13189C21.4212 7.97545 20.7822 8.61451 20.0409 9.15132Z" fill="#999999"/>
                        </g>
                        <defs>
                        <clippath id="clip0">
                        <rect width="25" height="25" fill="white"/>
                        </clippath>
                        </defs>
                        </svg>
                        
                </a>
                <a href="" class="fb">
                    <svg width="25" height="25" viewbox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M12.5 0C5.59815 0 0 5.59815 0 12.5C0 19.4018 5.59815 25 12.5 25C19.4018 25 25 19.4018 25 12.5C25 5.59815 19.4018 0 12.5 0ZM17.2546 6.36502H15.5163C14.1615 6.36502 13.9059 7.00408 13.9059 7.94989V10.0204H17.1268V13.2924H13.9059V21.6769H10.5572V13.2924H7.74539V10.046H10.5572V7.64314C10.5572 4.85685 12.2699 3.3231 14.7495 3.3231H17.2801L17.2546 6.36502Z" fill="#999999"/>
                        </g>
                        <defs>
                        <clippath id="clip0">
                        <rect width="25" height="25" fill="white"/>
                        </clippath>
                        </defs>
                        </svg>
                        
                </a>
                <a href="" class="vk">
                    <svg width="25" height="25" viewbox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M12.5 0C5.59815 0 0 5.59815 0 12.5C0 19.4018 5.59815 25 12.5 25C19.4018 25 25 19.4018 25 12.5C25 5.59815 19.4018 0 12.5 0ZM18.8394 13.8548C19.4274 14.4172 20.0409 14.954 20.5521 15.593C20.7822 15.8742 21.0122 16.1554 21.1656 16.4877C21.3957 16.9478 21.1912 17.4591 20.7822 17.4846H18.226C17.5613 17.5358 17.0501 17.2801 16.59 16.82C16.2321 16.4622 15.8998 16.0787 15.5675 15.6953C15.4397 15.5419 15.2863 15.3885 15.1073 15.2863C14.7495 15.0562 14.4427 15.1329 14.2638 15.4908C14.0593 15.8742 14.0082 16.2832 13.9826 16.6922C13.957 17.3057 13.7781 17.4591 13.1646 17.4846C11.8609 17.5358 10.6339 17.3568 9.50919 16.6922C8.51226 16.1043 7.71983 15.3118 7.05521 14.3916C5.72597 12.6022 4.72903 10.6339 3.80879 8.61451C3.60429 8.15439 3.75767 7.92433 4.26891 7.89876C5.11247 7.8732 5.93046 7.8732 6.77402 7.89876C7.10633 7.89876 7.33639 8.10326 7.46421 8.41001C7.92433 9.50919 8.46114 10.5828 9.15132 11.5542C9.33026 11.8098 9.53475 12.0654 9.79038 12.2699C10.0971 12.4744 10.3016 12.3977 10.455 12.0654C10.5317 11.8609 10.5828 11.6309 10.6084 11.4008C10.6851 10.6339 10.6851 9.86707 10.5572 9.10019C10.4806 8.58895 10.2249 8.2822 9.73925 8.17995C9.48363 8.12883 9.53476 8.05214 9.637 7.89876C9.8415 7.6687 10.046 7.51533 10.4294 7.51533H13.318C13.7781 7.61758 13.8804 7.79652 13.9315 8.25664V11.4775C13.9315 11.6564 14.0082 12.1932 14.3405 12.2955C14.5961 12.3722 14.775 12.1677 14.9284 12.0143C15.6186 11.273 16.1043 10.4039 16.5644 9.50919C16.7689 9.10019 16.9223 8.6912 17.1012 8.2822C17.229 7.97545 17.408 7.82208 17.7658 7.82208H20.5521C20.6288 7.82208 20.7055 7.82208 20.8078 7.84764C21.2679 7.92433 21.3957 8.12883 21.2679 8.58895C21.0378 9.30469 20.6033 9.91819 20.1687 10.5061C19.7086 11.1452 19.1973 11.7587 18.7372 12.4233C18.2771 13.0368 18.3026 13.3435 18.8394 13.8548Z" fill="#999999"/>
                        </g>
                        <defs>
                        <clippath id = "clip0">
                        <rect width="25" height="25" fill="white"/>
                        </clippath>
                        </defs>
                        </svg>
                        
                </a>
                <a href="" class="inst">
                    <svg width="25" height="25" viewbox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1074 12.5C10.1074 13.8214 11.1786 14.8926 12.5 14.8926C13.8214 14.8926 14.8926 13.8214 14.8926 12.5C14.8926 11.1786 13.8214 10.1074 12.5 10.1074C11.1786 10.1074 10.1074 11.1786 10.1074 12.5Z" fill="#999999"/>
                        <path d="M6.9046 8.26691C7.01962 7.95525 7.2031 7.67316 7.44152 7.4416C7.67307 7.20319 7.95498 7.0197 8.26683 6.90469C8.51974 6.80646 8.89969 6.68954 9.59949 6.65768C10.3565 6.62316 10.5835 6.61572 12.5 6.61572C14.4167 6.61572 14.6437 6.62297 15.4005 6.65749C16.1003 6.68954 16.4804 6.80646 16.7332 6.90469C17.045 7.0197 17.3271 7.20319 17.5585 7.4416C17.7969 7.67316 17.9804 7.95506 18.0956 8.26691C18.1938 8.51983 18.3107 8.89996 18.3426 9.59977C18.3771 10.3566 18.3846 10.5836 18.3846 12.5003C18.3846 14.4168 18.3771 14.6438 18.3426 15.4008C18.3107 16.1006 18.1938 16.4805 18.0956 16.7334C17.9804 17.0453 17.7971 17.3272 17.5587 17.5588C17.3271 17.7972 17.0452 17.9807 16.7334 18.0957C16.4804 18.1941 16.1003 18.311 15.4005 18.3429C14.6437 18.3774 14.4169 18.3846 12.5002 18.3846C10.5833 18.3846 10.3563 18.3774 9.59969 18.3429C8.89988 18.311 8.51974 18.1941 8.26683 18.0957C7.64084 17.8542 7.14607 17.3594 6.9046 16.7334C6.80637 16.4805 6.68945 16.1006 6.65741 15.4008C6.62289 14.6438 6.61564 14.4168 6.61564 12.5003C6.61564 10.5836 6.62289 10.3566 6.65741 9.59977C6.68926 8.89996 6.80618 8.51983 6.9046 8.26691ZM12.5 16.1858C14.5357 16.1858 16.186 14.5358 16.186 12.5001C16.186 10.4644 14.5357 8.81432 12.5 8.81432C10.4645 8.81432 8.81424 10.4644 8.81424 12.5001C8.81424 14.5358 10.4645 16.1858 12.5 16.1858ZM8.66852 9.52996C9.14421 9.52996 9.52988 9.1443 9.52988 8.6686C9.52988 8.19291 9.14421 7.80724 8.66852 7.80724C8.19283 7.80724 7.80716 8.19291 7.80716 8.6686C7.80735 9.1443 8.19283 9.52996 8.66852 9.52996Z" fill="#999999"/>
                        <path d="M12.5 0C19.4025 0 25 5.5975 25 12.5C25 19.4025 19.4025 25 12.5 25C5.5975 25 0 19.4025 0 12.5C0 5.5975 5.5975 0 12.5 0ZM5.36556 15.4593C5.40028 16.2233 5.52177 16.745 5.69916 17.2016C6.07204 18.1658 6.83422 18.928 7.79839 19.3008C8.25481 19.4782 8.77666 19.5995 9.54056 19.6344C10.306 19.6693 10.5505 19.6777 12.4998 19.6777C14.4493 19.6777 14.6936 19.6693 15.4593 19.6344C16.2231 19.5995 16.745 19.4782 17.2014 19.3008C17.6805 19.1206 18.1143 18.8381 18.4729 18.4729C18.8379 18.1145 19.1204 17.6805 19.3007 17.2016C19.478 16.7452 19.5995 16.2233 19.6342 15.4594C19.6695 14.6938 19.6777 14.4493 19.6777 12.5C19.6777 10.5507 19.6695 10.3062 19.6344 9.54075C19.5997 8.77666 19.4784 8.255 19.301 7.79839C19.1208 7.31945 18.8381 6.88553 18.4729 6.52714C18.1145 6.16188 17.6805 5.8794 17.2016 5.69916C16.745 5.52177 16.2233 5.40047 15.4593 5.36556C14.6938 5.33066 14.4493 5.32227 12.5 5.32227C10.5507 5.32227 10.3062 5.33066 9.54075 5.36575C8.77666 5.40047 8.255 5.52177 7.79839 5.69897C7.31945 5.87921 6.88553 6.16188 6.52695 6.52714C6.16188 6.88572 5.87921 7.31945 5.69916 7.79839C5.52158 8.255 5.40028 8.77666 5.36537 9.54075C5.33047 10.3062 5.32227 10.5507 5.32227 12.5C5.32227 14.4493 5.33047 14.6938 5.36556 15.4593Z" fill="#999999"/>
                        </svg>
                </a>
                
            </div>
        </div>
    </footer>
    )
}