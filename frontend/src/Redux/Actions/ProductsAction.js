import axios from 'axios';

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        });
        let link = `/api/product/products`;
        const data = await axios.get(link);
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
};


