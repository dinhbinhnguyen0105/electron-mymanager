import { useContext, useEffect } from "react";
import Context from "../../store/context/Context";
import { setType, setCategory } from "../../store/reducer/actions";
import styles from "./BasicInfo.module.css";

function BasicInfo() {
    const [state, setState] = useContext(Context);
    const handleSetType = e => {
        const valueElm = e.target.closest(`.${styles.basicInfoType}`)
        setState(setType(valueElm.getAttribute("value")));
    }
    useEffect(() => {
        const basicInfoTypeElms = document.getElementsByClassName(styles.basicInfoType);
        [...basicInfoTypeElms].forEach(elm => {
            if(elm.getAttribute("value") === state.type) elm.classList.add(styles.selected);
            else elm.classList.remove(styles.selected);
        });
    }, [state.type]);
    return (
        <div className={styles.basicInfo}>
            <div className={styles.basicInfoTypes}>
                <div className={styles.basicInfoType} value="sell" onClick={(e) => handleSetType(e)}><span >Bán</span></div>
                <div className={styles.basicInfoType} value="rent" onClick={(e) => handleSetType(e)}><span >Cho thuê</span></div>
            </div>
            <div className={styles.basicInfoCatories}>
                <label htmlFor="category" className={`${styles.basicInfoCatoriesLabel} ${styles.label}`}>
                    Loại bất động sản
                </label>
                <select id="category" name="category" className={`${styles.basicInfoCatoriesSelect} ${styles.select}`} onChange={e => setState(setCategory(e.target.value))} value={state.category}>
                    <option className={styles.basicInfoCatoriesOption} value="house">Nhà phố</option>
                    <option className={styles.basicInfoCatoriesOption} value="villa">Villa</option>
                    <option className={styles.basicInfoCatoriesOption} value="apartment">Căn hộ chung cư</option>
                    <option className={styles.basicInfoCatoriesOption} value="land">Đất</option>
                    <option className={styles.basicInfoCatoriesOption} value="hotel">Khách sạn</option>
                    <option className={styles.basicInfoCatoriesOption} value="homestay">Homestay</option>
                </select>
            </div>
        </div>
    );
}

export default BasicInfo;