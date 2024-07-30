import { useContext, useEffect } from "react";
import Context from "../../store/context/Context"
import { 
    setBuildingLine,
    setArea,
    setConstruction,
    setFunction,
    setFurniture,
    setLegal,
    setDescription,
    setPrice,
    setOwnerName,
} from "../../store/reducer/actions";


import styles from "./DetailInfo.module.css";

function DetailInfo() {
    const [state, setState] = useContext(Context);
    useEffect(() => {
        Object.keys(state).forEach(key => {
            console.log(`${key}: ${state[key]}`);
        })
    }, [state]);
    return (
        <div className={styles.detailInfos}>
            {
                state.category !== "apartment" ? (
                    <div className={`${styles.detailInfoBuildingLine} ${styles.detailInfo}`}>
                        <label htmlFor="building-line" className={`${styles.detailInfosBuildingLineLabel} ${styles.label}`}>
                            Giao thông
                        </label>
                        <select id="building-line" name="building-line" className={`${styles.detailInfosBuildingLineSelect} ${styles.select}`} onChange={e => setState(setBuildingLine(e.target.value))} value={state.buildingLine}>
                            <option value="car">Đường xe hơi</option>
                            <option value="motorbike">Đường xe máy</option>
                        </select>
                    </div>
                ) : <></>
            }
            {
                state.type !== "rent" || state.category === "land" ? (
                    <div className={`${styles.detailInfoArea} ${styles.detailInfo}`}>
                        <label htmlFor="area" className={`${styles.detailInfoAreaLabel} ${styles.label}`}>
                            Diện tích
                        </label>
                        <input type="text" id="area" className={`${styles.detailInfoAreaInput} ${styles.textInput}`} onChange={e => setState(setArea(e.target.value))} value={state.area}/>
                    </div>
                ): <></>
            }
            {
                state.category !== "apartment" && state.category !== "land" ? (
                    <div className={`${styles.detailInfoConstructionL} ${styles.detailInfo}`}>
                        <label htmlFor="construction" className={`${styles.detailInfoConstructionLabel} ${styles.label}`}>
                            Kết cấu
                        </label>
                        <input type="text" id="construction" className={`${styles.detailInfoConstructionInput} ${styles.textInput}`} onChange={e => setState(setConstruction(e.target.value))} value={state.construction}/>
                    </div>
                ) : <></>
            }
            {
                state.category !== "land" ? (
                    <>
                        <div className={`${styles.detailInfoFunction} ${styles.detailInfo}`}>
                            <label htmlFor="function" className={`${styles.detailInfoFunctionLabel} ${styles.label}`}>
                                Công năng
                            </label>
                            <input type="text" id="function" className={`${styles.detailInfoFunctionInput} ${styles.textInput}`} onChange={e => setState(setFunction(e.target.value))} value={state.function}/>
                        </div>
                        <div className={`${styles.detailInfoFurniture} ${styles.detailInfo}`}>
                            <label htmlFor="furniture" className={`${styles.detailInfoFurnitureLabel} ${styles.label}`}>
                                Nội Thất
                            </label>
                            <select id="furniture" name="furniture" className={`${styles.detailInfoFurnitureSelect} ${styles.select}`} onChange={e => setState(setFurniture(e.target.value))} value={state.furniture}>
                                <option value="none">Không nội thất</option>
                                <option value="basic">Nội thất cơ bản</option>
                                <option value="full">Đầy đủ nội thất</option>
                            </select>
                        </div>
                    </>
                ): <></>
            }

            <div className={`${styles.detailInfoLegal} ${styles.detailInfo}`}>
                <label htmlFor="legal" className={`${styles.detailInfoLegalLabel} ${styles.label}`}>
                    Pháp lý
                </label>
                <select id="legal" name="legal" className={`${styles.detailInfoLegalSelect} ${styles.select}`} onChange={e => setState(setLegal(e.target.value))} value={state.legal}>
                    <option value="sxdr">Sổ xây dựng riêng</option>
                    <option value="sxdpq">Sổ xây dựng phân quyền</option>
                    <option value="sxdc">Sổ xây dựng chung</option>
                    <option value="snnr">Sổ nông nghiệp riêng</option>
                    <option value="snnpq">Sổ nông nghiệp phân quyền</option>
                    <option value="snnc">Sổ nông nghiệp chung</option>
                </select>
            </div>
            
            <div className={`${styles.detailInfoDescription}`}>
                <label htmlFor="description" className={`${styles.detailInfoDescriptionLabel} ${styles.label}`}>
                    Mô tả
                </label>
                <textarea type="text" id="description" className={`${styles.detailInfoDescriptionInput} ${styles.textInput}`} onChange={e => setState(setDescription(e.target.value))} value={state.description}></textarea>
            </div>

            <div className={`${styles.detailInfoPrice} ${styles.detailInfo}`}>
                <label htmlFor="price" className={`${styles.detailInfoPriceLabel} ${styles.label}`}>
                    Giá
                </label>
                <input type="text" id="price" className={`${styles.detailInfoPriceInput} ${styles.textInput}`} onChange={e => setState(setPrice(e.target.value))} value={state.price}/>
            </div>
        </div>
    );
}

export default DetailInfo;