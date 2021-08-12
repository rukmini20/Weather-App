
import { CityI } from "../../interfaces"; 
import { FETCH_CITIES, ADD_CITY } from "../constants";

const addCity = (city: CityI) => async (dispatch: Function) => {

    dispatch({ payload: city, type: ADD_CITY });
};
const fetchCities = () => async (dispatch: Function) => {  

    dispatch({ type: FETCH_CITIES });
};
export { fetchCities, addCity, };
