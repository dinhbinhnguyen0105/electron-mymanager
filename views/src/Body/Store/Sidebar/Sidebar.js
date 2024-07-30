import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebarItems}>
                <li className={styles.sidebarItem}>
                    <Link to="create">Create new listing</Link>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;