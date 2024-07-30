import { useContext } from "react";

import Context from "../../store/context/Context"
import { setProvince, setDistrict, setWard, setStreet} from "../../store/reducer/actions";
import styles from "./LocationInfo.module.css";

function LocationInfo() {
    const [state, setState] = useContext(Context);
    return (
        <div className={styles.locationInfos}>
                <div className={`${styles.locationInfoProvince} ${styles.locationInfo}`}>
                    <label htmlFor="province" className={`${styles.locationInfoProvinceLabel} ${styles.label}`}>
                        Tỉnh, thành phố
                    </label>
                    <select id="province" name="province" className={`${styles.locationInfoProvinceSelect} ${styles.select}`} onChange={e => setState(setProvince(e.target.value))} value={state.province}>
                        <option value="lamdong">Lâm Đồng</option>
                    </select>

                </div>
                <div className={`${styles.locationInfoDistrict} ${styles.locationInfo}`}>
                    <label htmlFor="district" className={`${styles.locationInfoDistrictLabel} ${styles.label}`}>
                        Quận, huyện
                    </label>
                    <select id="district" name="district" className={`${styles.locationInfoDistrictSelect} ${styles.select}`} onChange={e => setState(setDistrict(e.target.value))} value={state.district}>
                        <option value="dalat">Đà Lạt</option>
                    </select>
                </div>
                <div className={`${styles.locationInfoWard} ${styles.locationInfo}`}>
                    <label htmlFor="ward" className={`${styles.locationInfoWardLabel} ${styles.label}`}>
                        Phường,xã
                    </label>
                    <select id="ward" name="ward" className={`${styles.locationInfoWardSelect} ${styles.select}`} onChange={e => setState(setWard(e.target.value))} value={state.ward}>
                        <option value="1">Phường 1</option>
                        <option value="2">Phường 2</option>
                        <option value="3">Phường 3</option>
                        <option value="4">Phường 4</option>
                        <option value="5">Phường 5</option>
                        <option value="6">Phường 6</option>
                        <option value="7">Phường 7</option>
                        <option value="8">Phường 8</option>
                        <option value="9">Phường 9</option>
                        <option value="10">Phường 10</option>
                        <option value="11">Phường 11</option>
                        <option value="12">Phường 12</option>
                        <option value="tanung">Xã Tà Nung</option>
                        <option value="tramhanh">Xã Trạm Hành</option>
                        <option value="xuantruong">Xã Xuân Trường</option>
                        <option value="xuantho">Xã Xuân Thọ</option>
                    </select>
                </div>
                <div className={`${styles.locationInfoStreet} ${styles.locationInfo}`}>
                    <label htmlFor="street" className={`${styles.locationInfoStreetLabel} ${styles.label}`}>
                        Đường, phố
                    </label>
                    <input id="street" type="text" className={`${styles.locationInfoStreetInput} ${styles.textInput}`} onChange={e => setState(setStreet(e.target.value))} value={state.street}/>
                </div>
            </div>
    );
}
export default LocationInfo;