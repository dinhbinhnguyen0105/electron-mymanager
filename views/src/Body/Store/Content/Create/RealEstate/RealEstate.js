import Provider from "./store/context/Provider";

import ImagesInfo from "./SubComp/ImageInfo/ImageInfo";
import BasicInfo from "./SubComp/BasicInfo/BasicInfo";
import LocationInfo from "./SubComp/LocationInfo/LocationInfo";
import DetailInfo from "./SubComp/DetailInfo/DetailInfo";
import styles from "./RealEstate.module.css";



function RealEstate() {
    return (
        <Provider>
            <div className={styles.realEstate}>
                <ImagesInfo />
                <BasicInfo />
                <LocationInfo />
                <DetailInfo />
            </div>
        </Provider>
    );
}

export default RealEstate;

/**
 * basic-info
 *  Images
 *  Type
 *  Category
 * location-info
 *  Province/City
 *  District
 *  Ward/Commune
 *  Street
 * 
 */
