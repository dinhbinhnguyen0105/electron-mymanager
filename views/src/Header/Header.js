import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserGroup, faStore } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";


function Header() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const navbarItemElms = document.getElementsByClassName(styles.navbarItem);
        [...navbarItemElms].forEach(navbarItemElm => {
            const linkElm = navbarItemElm.getElementsByTagName("a")[0];
            if(currentPath.includes(linkElm.getAttribute("href")))
                navbarItemElm.classList.add(styles.activated);
            else navbarItemElm.classList.remove(styles.activated);
        });
    }, [currentPath]);
    
    return (
        <div className={styles.header}>
            <div className={styles.headerNav}>
                <ul className={styles.navbarItems}>
                    <li className={styles.navbarItem} onClick={() => setCurrentPath(window.location.pathname)}>
                        <Link to="home" className={styles.navbarItemLink}>
                            <FontAwesomeIcon icon={faHouse} className={styles.navbarItemIcon}/>
                        </Link>
                    </li>
                    <li className={styles.navbarItem} onClick={() => setCurrentPath(window.location.pathname)}>
                        <Link to="users" className={styles.navbarItemLink}>
                            <FontAwesomeIcon icon={faUserGroup} className={styles.navbarItemIcon}/>
                        </Link>
                    </li>
                    <li className={styles.navbarItem} onClick={() => setCurrentPath(window.location.pathname)}>
                        <Link to="store" className={styles.navbarItemLink}>
                            <FontAwesomeIcon icon={faStore} className={styles.navbarItemIcon}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;