import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Store from "./Store/Store";
import User from "./User/User";
import styles from "./Body.module.css";

function Body() {

    return (
        <div className={styles.body}>
            <Routes>
                <Route path="home/*" element={<Home />} />
                <Route path="store/*" element={<Store />} />
                <Route path="users/*" element={<User />} />
            </Routes>
        </div>
    );
}

export default Body;