import { Box, Flex, FlexItem, Button, H1, H4, Panel } from '@bigcommerce/big-design';
import styled from 'styled-components';
import ErrorMessage from '../components/error';
import Loading from '../components/loading';
// import { useProducts } from '../lib/hooks';
// import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useSession } from '../context/session';
import jwt_decode from "jwt-decode";
import { authSlice } from "../redux/authRedux";
// import http from "http";
import { bigcommerceProductsSlice } from "../redux/bigcommerceProductsRedux";
import { bigcommerceCategoriesSlice } from "../redux/bigcommerceCategoriesRedux";

const Index = () => {
    const logTitle = " main -> Index() ";
    console.log(logTitle, "EXECUTED!");
    const dispatch = useDispatch();
    const { context } = useSession();
    const authState = useSelector((state:any) => state.auth);
    const bigcommerceProductsState = useSelector((state:any) => state.bigcommerceProducts);
    // const bigcommerceCategoriesState = useSelector((state:any)=> state.bigcommerceCategories);
    let decodedContext = ""
    if (context) {
        decodedContext = context ? jwt_decode(context) : "";
        if (!authState.value.authInfo) {
            getAndSetAuthInfo(decodedContext, dispatch);
        }
    }
    
    
    const bigComProductsArray = bigcommerceProductsState.value.productsArray;
    const metaData = bigcommerceProductsState.value.metaData;
    if (bigComProductsArray.length <= 0) fetchBigCommerceProductsInfo(authState, dispatch, decodedContext);
    console.log(logTitle+"bigComProductsArray",bigComProductsArray);
    console.log(logTitle+"metaData",metaData);
    
    // const bigComCategoriesArray = bigcommerceCategoriesState.value.categoriesArray;
    // const bigComCategoriesMapObj = bigcommerceCategoriesState.value.categoriesMappingObject
    // if (bigComCategoriesArray && bigComCategoriesArray.length <= 0) fetchBigCommerceCategoriesInfo(authState, dispatch, decodedContext);
    // fetch("/api/netsuite/get_auth", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
    //     },
    //     body: JSON.stringify({
    //         method: "sendTestHttpRequest"
    //     })
    // })
    // .then(response => response.json())
    // .then(responseObj => {
    //     console.log(logTitle+"responseObj", responseObj);
    // })
    // .catch(e => {
    //     console.error("ERROR IN"+logTitle, error)
    // });

    // const { error, isLoading, summary } = useProducts();
    // if (isLoading) return <Loading />;
    // if (error.name) return <ErrorMessage error={error} />;

    // const [score, setScore] = useState(0);
    // const increaseScore = () => setScore(score + 1);
    // const decreaseScore = () => setScore(score - 1);

    return (
        <div>
            {/* <p><strong>Your Access Token is:</strong> {authState.value.authInfo ? authState.value.authInfo.access_token : "N/A"}</p>
            <p><strong>Your Store Hash is:</strong> {authState.value.authInfo ? authState.value.authInfo.storeHash : "N/A"}</p> */}

            {/* <p>Your Store Hash is: {authState.value}</p> */}
            {/* <button onClick={increaseScore}>+</button>
            <button onClick={decreaseScore}>-</button> */}
            <Panel header="Homepage" id="home">
                <Flex>
                    <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
                            marginBottom="small"
                            variant="primary" 
                            onClick={
                                () => {
                                    fetchBigCommerceProductsInfo(authState, dispatch, decodedContext);
                                }
                            }
                        >
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/2048px-Refresh_icon.svg.png' width='25px'/>
                        </Button>
                    </FlexItem>
                </Flex>
                <Flex>
                    <StyledBox border="box" borderRadius="normal" marginRight="xLarge" padding="medium">
                        <H4>Inventory count</H4>
                        <H1 marginBottom="none">{metaData && metaData.totalInventoryCount ? metaData.totalInventoryCount : 0}</H1>
                        {/* {summary.inventory_count} */}
                    </StyledBox>
                    <StyledBox border="box" borderRadius="normal" marginRight="xLarge" padding="medium">
                        <H4>Variant count</H4>
                        <H1 marginBottom="none">{metaData && metaData.totalVariantsCount ? metaData.totalVariantsCount : 0}</H1>
                        {/* {summary.variant_count} */}
                    </StyledBox>
                    <StyledBox border="box" borderRadius="normal" padding="medium">
                        <H4>Primary category</H4>
                        <H1 marginBottom="none">{metaData && metaData.primaryCategory ? metaData.primaryCategory : ""}</H1>
                        {/* {summary.primary_category_name} */}
                    </StyledBox>
                </Flex>
            </Panel>
        </div>
    );
};

const getAndSetAuthInfo = (decodedContext, dispatch) => {
    const logTitle = " getAndSetAuthInfo() ";
    console.log(logTitle, "<--- EXECUTED! --->")
    fetch("/api/netsuite/get_auth", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
        },
        body: JSON.stringify(decodedContext)
    })
    .then(response => response.json())
    .then(responseObj => {
        console.log(logTitle+"responseObj", responseObj);
        if(responseObj?.data?.authInfoJson) dispatch(authSlice.actions.setStoreAuthInfo({authInfo: responseObj.data.authInfoJson}));
    });
}

const StyledBox = styled(Box)`
    min-width: 10rem;
`;


const fetchBigCommerceProductsInfo = (authState, dispatch, decodedContext) => {
    const logTitle = " fetchBigCommerceProductsInfo() ";
    try {
        if (decodedContext) {
            fetch("/api/bigcommerce/get_products", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
                },
                body: JSON.stringify(authState.value.authInfo)
            })
            .then(response => response.json())
            .then(getProductsResponseObj => {
                
                if (getProductsResponseObj?.title == "Unauthorized") {
                    getAndSetAuthInfo(decodedContext, dispatch)
                } else {
                    let bigcommerceProductsArray = [];
                    let bigcommerceProductsMappingObject = {};
                    let metaData = {
                        totalInventoryCount: 0,
                        totalVariantsCount: 0,
                        primaryCategory: "N/A"
                    };

                    // let categoryCountMapObj = {}
                    getProductsResponseObj.data.map(dataObj => {
                        // let productObj:any = {};
                        // productObj.id = dataObj.id;
                        // productObj.name = dataObj.name;
                        // productObj.description = dataObj.description;
                        // productObj.price = dataObj.price;
                        // productObj.inventory_level = dataObj.inventory_level;
                        bigcommerceProductsArray.push(dataObj);
                        if (!bigcommerceProductsMappingObject[dataObj.id]) bigcommerceProductsMappingObject[dataObj.id] = dataObj;
                        
                        // metaData.totalInventoryCount += dataObj.inventory_level;
                        // for (let index1 in dataObj.variants) metaData.totalVariantsCount++;
                        // for (let index2 in dataObj.categories) {
                        //     var categoryId = dataObj.categories[index2];
                        //     if (!categoryCountMapObj[categoryId]) categoryCountMapObj[categoryId] = 0;
                        //     categoryCountMapObj[categoryId]++;
                        // }
                    });
                    // metaData.primaryCategoryId = Object.keys(categoryCountMapObj).reduce((a, b) => categoryCountMapObj[a] > categoryCountMapObj[b] ? a : b);
                    
                    // console.log( logTitle + "metaData.primaryCategoryId", metaData.primaryCategoryId );

                    fetch("/api/bigcommerce/get_catalog_summary", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
                        },
                        body: JSON.stringify(authState.value.authInfo)
                    })
                    .then(response => response.json())
                    .then(getCatalogSummaryResponseObj => {
                        console.log(logTitle+"getCatalogSummaryResponseObj", getCatalogSummaryResponseObj);
                        if (getCatalogSummaryResponseObj?.title == "Unauthorized") {
                            getAndSetAuthInfo(decodedContext, dispatch)
                        } else {
                            if (getCatalogSummaryResponseObj.data) {
                                metaData.primaryCategory = getCatalogSummaryResponseObj.data.primary_category_name
                                metaData.totalInventoryCount = getCatalogSummaryResponseObj.data.inventory_count;
                                metaData.totalVariantsCount = getCatalogSummaryResponseObj.data.variant_count;
                                dispatch(bigcommerceProductsSlice.actions.setProductsInfo({
                                    productsArray: bigcommerceProductsArray,
                                    productsMappingObject: bigcommerceProductsMappingObject,
                                    metaData
                                }));
                            }
                        }
                    })
                }
            });
        }

    } catch(e){  
        console.error("ERROR IN"+logTitle, e)
    }
}

const fetchBigCommerceCategoriesInfo = (authState, dispatch, decodedContext) => {
    const logTitle = " fetchBigCommerceCategoriesInfo() ";
    if (decodedContext) {
        fetch("/api/bigcommerce/get_categories", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
            },
            body: JSON.stringify(authState.value.authInfo)
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle+"responseObj", responseObj);
            if(responseObj && responseObj.data){
                let bigComCategoriesArray = [];
                let bigComCategoriesMapObj = {};
                for (let index in responseObj.data) {
                    const categoryDataObj = responseObj.data[index];
                    bigComCategoriesArray.push(categoryDataObj);
                    if(!bigComCategoriesMapObj[categoryDataObj.id]) bigComCategoriesMapObj[categoryDataObj.id] = categoryDataObj;
                }
                console.log(logTitle+"bigComCategoriesArray", bigComCategoriesArray)
                console.log(logTitle+"bigComCategoriesMapObj", bigComCategoriesMapObj)

                dispatch(bigcommerceCategoriesSlice.actions.setCategoriesInfo({
                    categoriesArray: bigComCategoriesArray,
                    categoriesMappingObject: bigComCategoriesMapObj
                }));
            }
        });
    }
}

export default Index;
