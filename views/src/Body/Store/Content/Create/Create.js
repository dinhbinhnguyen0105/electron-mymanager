
import { Link, } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faShirt, faPlane, faUtensils} from "@fortawesome/free-solid-svg-icons"
import styles from "./Create.module.css";

function Create() {
    return (
        <div className={styles.create}>
            <h3 className={styles.createTitle}>Choose listing type</h3>
            <ul className={styles.createItems}>
                <li className={styles.createItem}>
                    <Link to="real-estate" className={styles.createItemLink}>
                        <FontAwesomeIcon icon={faBuilding} className={styles.createItemIcon} style={{color: "#EF7C8E", background: "#FAE8E0"}}/>
                        <span className={styles.createItemLabel}>
                            Real estate
                        </span>
                    </Link>
                </li>
                <li className={styles.createItem}>
                    <Link to="fashion" className={styles.createItemLink} >
                        <FontAwesomeIcon icon={faShirt}className={styles.createItemIcon} style={{color: "#AA1945", background: "#F9CCD3"}}/>
                        <span className={styles.createItemLabel}>
                            Fashion
                        </span>
                    </Link>
                </li>
                <li className={styles.createItem}>
                    <Link to="food" className={styles.createItemLink}>
                        <FontAwesomeIcon icon={faUtensils}className={styles.createItemIcon} style={{color: "#F86F15", background: "#FAC218"}}/>
                        <span className={styles.createItemLabel}>
                            Food
                        </span>
                    </Link>
                </li>
                <li className={styles.createItem}>
                    <Link to="travel" className={styles.createItemLink}>
                        <FontAwesomeIcon icon={faPlane}className={styles.createItemIcon} style={{color: "#54627B", background: "#ECD5BB"}}/>
                        <span className={styles.createItemLabel}>
                            Travel
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Create;