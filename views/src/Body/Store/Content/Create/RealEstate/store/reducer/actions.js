import {
    SET_TYPE, 
    SET_CATEGORY, 
    SET_PROVINCE, 
    SET_DISTRICT, 
    SET_WARD, 
    SET_STREET,
    SET_BUILDING_LINE,
    SET_AREA,
    SET_CONSTRUCTION,
    SET_FUNCTION,
    SET_FURNITURE,
    SET_LEGAL,
    SET_DESCRIPTION,
    SET_PRICE,
    SET_OWNERNAME,
 } from "./constants"

const setType = (payload) => ({
    type: SET_TYPE,
    payload,
})
const setCategory = payload => ({
    type: SET_CATEGORY,
    payload,
})
const setProvince = payload => ({
        type: SET_PROVINCE,
    payload,
})
const setDistrict = payload => ({
    type: SET_DISTRICT,
    payload,
})
const setWard = payload => ({
    type: SET_WARD,
    payload,
})
const setStreet = payload => ({
    type: SET_STREET,
    payload,
})

const setBuildingLine = payload => ({
    type: SET_BUILDING_LINE,
    payload
})
const setArea = payload => ({
    type: SET_AREA,
    payload
})
const setConstruction = payload => ({
    type: SET_CONSTRUCTION,
    payload
})
const setFunction = payload => ({
    type: SET_FUNCTION,
    payload
})
const setFurniture = payload => ({
    type: SET_FURNITURE,
    payload
})
const setLegal = payload => ({
    type: SET_LEGAL,
    payload
})
const setDescription = payload => ({
    type: SET_DESCRIPTION,
    payload
})
const setPrice = payload => ({
    type: SET_PRICE,
    payload
})

const setOwnerName = payload => ({
    type: SET_OWNERNAME,
    payload
})




export {
    setType,
    setCategory,
    setProvince,
    setDistrict,
    setWard,
    setStreet,
    setBuildingLine,
    setArea,
    setConstruction,
    setFunction,
    setFurniture,
    setLegal,
    setDescription,
    setPrice,
    setOwnerName,
};