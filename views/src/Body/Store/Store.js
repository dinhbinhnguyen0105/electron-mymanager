import styles from "./Store.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

function Store() {

    return (
        <div className={styles.store}>
            <Sidebar />
            <Content />
        </div>
    );
}

export default Store;