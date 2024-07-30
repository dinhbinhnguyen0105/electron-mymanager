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
 } from "./constants";

const initState = {
    type: "sell",
    category: "house",
    province: "lamdong",
    district: "dalat",
    ward: "1",
    street: "",
    buildingLine: "car",
    area: "",
    construction: "",
    function: "1PK, 1 bếp, ",
    furniture: "none",
    legal: "sxdr",
    description: "",
    price: "",
    ownerName: "",
};

function reducer(state, action) {
    // console.log(state, action);
    switch (action.type) {
        case SET_TYPE:
            return {
                ...state,
                type: action.payload,
            };
        case SET_CATEGORY: 
            return {
                ...state,
                category: action.payload,
            };
        case SET_PROVINCE:
            return {
                ...state,
                province: action.payload,
            };
        case SET_DISTRICT:
            return {
                ...state,
                district: action.payload,
            };
        case SET_WARD:
            return {
                ...state,
                ward: action.payload,
            };
        case SET_STREET:
            return {
                ...state,
                street: action.payload,
            };
        case SET_BUILDING_LINE:
            return {
                ...state,
                buildingLine: action.payload,
            };
        case SET_AREA:
            return {
                ...state,
                area: action.payload,
            };
        case SET_CONSTRUCTION:
            return {
                ...state,
                construction: action.payload,
            };
        case SET_FUNCTION:
            return {
                ...state,
                function: action.payload,
            };
        case SET_FURNITURE:
            return {
                ...state,
                furniture: action.payload,
            };
        case SET_LEGAL:
            return {
                ...state,
                legal: action.payload,
            };
        case SET_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            };
        case SET_PRICE:
            return {
                ...state,
                price: action.payload,
            };
        case SET_OWNERNAME:
            return {
                ...state,
                ownerName: action.payload,
            };
            
        default:
            throw new Error("Invalid action");
    };
};

export { initState };
export default reducer;