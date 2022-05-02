import React, {FC} from 'react';
import cs from "./Header.module.scss";

interface HeaderProps {
 title: string;
 logo?: string;
}

const Header:FC<HeaderProps> = ({title,logo}) => {
    return (
        <header className={cs.header}>
            <div className={cs.container}>
                <div className={cs.logo__container}>
                    <img  src={logo} alt="logo"/>
                </div>
                <h1>{title}</h1>
            </div>
        </header>
    );
};

export default Header;