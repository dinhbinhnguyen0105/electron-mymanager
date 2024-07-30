import { Route, Routes, } from "react-router-dom";

import styles from "./Content.module.css";
// import Create from "./Create/Create";
import List from "./List/List";

import { Create, RealEstate } from "./Create";

function Content() {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="create" element={<Create />} />
                <Route path="create/real-estate" element={<RealEstate />} />
                <Route path="list" element={<List />} />
            </Routes>
        </div>
    );
}

export default Content;