import { Box, Flex, FlexItem, H1, H4, Panel, Table, Button } from '@bigcommerce/big-design';
import { useSession } from '../../context/session';
import { useSelector, useDispatch } from 'react-redux';
import { authSlice } from "../../redux/authRedux";
import { bigcommerceWidgetsSlice } from "../../redux/bigcommerceWidgetsRedux";
import jwt_decode from "jwt-decode";

const DscWidgets = () => {
    const logTitle = " DscWidgets() ";
    const { context } = useSession();
    const dispatch = useDispatch();
    let decodedContext = "";
    if(context) decodedContext = context ? jwt_decode(context) : "";
    const authState = useSelector((state:any) => state.auth);
    const bigcommerceWidgetsState = useSelector((state:any) => state.bigcommerceWidgets);
    console.log(logTitle + "authState", authState);
    console.log(logTitle + "bigcommerceWidgetsState", bigcommerceWidgetsState);
    if (bigcommerceWidgetsState.value.widgetsArray.length <= 0) fetchBigCommerceWidgets(authState, dispatch);

    return (
        <>
            <Panel>
                
            </Panel>
        </>
    )
}

const fetchBigCommerceWidgets = (authState, dispatch) => {
    const logTitle = " DscEventListners() ";
    try {
        const requestUrl = "/api/bigcommerce/get_widgets";
        const requestHeaders = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
        };
        const requestBody = authState.value.authInfo;
        fetch(requestUrl, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle + "responseObj", responseObj);
            if (responseObj && responseObj.data) {
                let widgetsArray = responseObj.data;
                let widgetsMappingObject = {};
                widgetsArray.map(dataObj => {
                    if (dataObj.uuid && !widgetsMappingObject[dataObj.uuid]) widgetsMappingObject[dataObj.uuid] = dataObj;
                });
                dispatch(bigcommerceWidgetsSlice.actions.setWidgetsInfo({widgetsArray, widgetsMappingObject}))
            }
        });
    } catch(e) {
        console.log("ERROR IN"+logTitle, e);
    }
} 
export default DscWidgets;