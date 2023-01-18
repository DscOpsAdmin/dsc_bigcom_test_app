import { Box, Flex, FlexItem, H1, H4, Panel, Table, Button } from '@bigcommerce/big-design';
import { useSelector, useDispatch } from 'react-redux';
import { bigcommerceProductsSlice } from "../../redux/bigcommerceProductsRedux";
import { netsuiteProductsSlice } from "../../redux/netsuiteProductsRedux";
import { webhookSlice } from 'redux/webhookRedux';
import jwt_decode from "jwt-decode";
import Link from 'next/link';
import { useSession } from '../../context/session';
import { authSlice } from "../../redux/authRedux";
import { useState, useEffect } from "react";
import { TableItem } from '../../types';

const CustomDscPage = () => {
    const logTitle = " CustomDscPage() ";
    
    const dispatch = useDispatch();
    const { context } = useSession();
    console.log(logTitle, "EXECUTED!");
    const authState = useSelector((state:any) => state.auth);
    const bigcommerceProductsState = useSelector((state:any) => state.bigcommerceProducts);
    const netsuiteProductsState = useSelector((state:any) => state.netsuiteProducts);
    const webhookState = useSelector((state:any) => state.webhook);

    const bigComProductsArray = bigcommerceProductsState.value.productsArray;
    const netsuiteProductsArray = netsuiteProductsState.value.productsArray;

    

    let decodedContext = "";
    if(context) decodedContext = context ? jwt_decode(context) : "";

    let { subscribedEventsList }  = webhookState.value;
    if (bigComProductsArray.length <= 0) fetchBigCommerceProductsInfo(authState, dispatch, decodedContext);
    
    if (netsuiteProductsArray.length <= 0) fetchNetSuiteProductsInfo(dispatch);
    
    const renderName = (id: any, name: any): any => {
        return (
            <Link href={`/custom_dsc_page/${id}`}>{name}</Link>
        )
    };

    //BigCommerce Products
    const [currentBigcomProductsPage, setCurrentBigcomProductsPage] = useState(1);
    const [bigcomProductsPerPageOptions] = useState([10, 20, 30]);    
    const [bigcomProductsPerPage, setBigcomProductsPerPage] = useState(10);
    const [currentBigcomProducts, setCurrentBigcomProducts] = useState<TableItem[]>([]);

    const onBigComProductsPerPageChange = (newRange) => {
        console.log(logTitle+"BigCommerce Products : newRange", newRange)
        setCurrentBigcomProductsPage(1);
        setBigcomProductsPerPage(newRange);
    };

    //NetSuite Products
    const [currentNetSuiteProductsPage, setCurrentNetSuiteProductsPage] = useState(1);
    const [netSuiteProductsPerPageOptions] = useState([10, 20, 30]);  
    const [netSuiteProductsPerPage, setNetSuiteProductsPerPage] = useState(10);
    const [currentNetSuiteProducts, setCurrentNetSuiteProducts] = useState<TableItem[]>([]);

    const onNetSuiteProductsPerPageChange = (newRange) => {
        setCurrentNetSuiteProductsPage(1);
        setNetSuiteProductsPerPage(newRange);
    };

    useEffect(() => {
        //BigCommerce Products
        const maxBigComProducts = currentBigcomProductsPage * bigcomProductsPerPage;
        const lastBigComProduct = Math.min(maxBigComProducts, bigComProductsArray.length);
        const firstBigComProduct = Math.max(0, maxBigComProducts - bigcomProductsPerPage);
        setCurrentBigcomProducts(bigComProductsArray.slice(firstBigComProduct, lastBigComProduct));

        //NetSuite Products
        const maxNetSuiteProducts = currentNetSuiteProductsPage * netSuiteProductsPerPage;
        const lastNetSuiteProduct = Math.min(maxNetSuiteProducts, netsuiteProductsArray.length);
        const firstNetSuiteProduct = Math.max(0, maxNetSuiteProducts - netSuiteProductsPerPage);
        setCurrentNetSuiteProducts(netsuiteProductsArray.slice(firstNetSuiteProduct, lastNetSuiteProduct));    
    }, [currentBigcomProductsPage, bigcomProductsPerPage, currentNetSuiteProductsPage, netSuiteProductsPerPage]);
    
    if (currentBigcomProducts.length == 0 && bigComProductsArray.length > 0) {
        let initialBigComProductsArray = [...bigComProductsArray]
        setCurrentBigcomProducts(initialBigComProductsArray.splice(0, 10));
    }

    if (currentNetSuiteProducts.length == 0 && netsuiteProductsArray.length > 0) {
        let initialNetSuiteProductsArray = [...netsuiteProductsArray]
        setCurrentNetSuiteProducts(initialNetSuiteProductsArray.splice(0, 10));
    }

    console.log("before return","EXECUTED")

    return (
        <>
            <p><strong>Your Access Token is:</strong> {authState.value.authInfo ? authState.value.authInfo.access_token : "N/A"}</p>
            <p><strong>Your Store Hash is:</strong> {authState.value.authInfo ? authState.value.authInfo.storeHash : "N/A"}</p>
            
            <Panel header="BigCommerce Products" id="bigcommerce_products">
                <Flex>
                    <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
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
                <Table
                    columns={[
                        {
                            header: "Name",
                            hash: "name",
                            tooltip: "Product Name",
                            render: ({ id, name })=> renderName(id, name)
                        },
                        // {
                        //     header: "Description",
                        //     hash: "description",
                        //     tooltip: "Product Description",
                        //     render: ({ description }) => description
                        // },
                        {
                            header: "Price",
                            hash: "price",
                            tooltip: "Product Price",
                            render: ({ price })=> price
                        },
                        {
                            header: "In Stock",
                            hash: "inventory_level",
                            tooltip: "In Stock Quantity",
                            render: ({ inventory_level })=> inventory_level
                        }
                    ]}
                    items={currentBigcomProducts.length > 0 ? currentBigcomProducts : []}
                    itemName="BigCommerce Products"
                    pagination={{
                        currentPage: currentBigcomProductsPage,
                        totalItems: bigComProductsArray.length,
                        onPageChange: setCurrentBigcomProductsPage,
                        itemsPerPageOptions: bigcomProductsPerPageOptions,
                        onItemsPerPageChange: onBigComProductsPerPageChange,
                        itemsPerPage: bigcomProductsPerPage
                    }}
                />
            </Panel>

            <Panel header="NetSuite Products" id="netsuite_products">
                <Flex>
                    <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary" 
                            onClick={
                                () => {
                                    fetchNetSuiteProductsInfo(dispatch);
                                }
                            }
                        >
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/2048px-Refresh_icon.svg.png' width='25px'/>
                        </Button>
                    </FlexItem>
                </Flex>
                <Table
                    columns={[
                        {
                            header: "Name",
                            hash: "name",
                            tooltip: "Product Name",
                            render: ({ name })=> name
                        },
                        // {
                        //     header: "Description",
                        //     hash: "description",
                        //     tooltip: "Product Description",
                        //     render: ({ description }) => description
                        // },
                        {
                            header: "Price",
                            hash: "price",
                            tooltip: "Product Price",
                            render: ({ price })=> price
                        },
                        {
                            header: "In Stock",
                            hash: "inventory_level",
                            tooltip: "In Stock Quantity",
                            render: ({ inventory_level })=> inventory_level
                        },

                    ]}
                    items={currentNetSuiteProducts.length > 0 ? currentNetSuiteProducts : []}
                    itemName="NetSuite Products"
                    pagination={{
                        currentPage: currentNetSuiteProductsPage,
                        totalItems: netsuiteProductsArray.length,
                        onPageChange: setCurrentNetSuiteProductsPage,
                        itemsPerPageOptions: netSuiteProductsPerPageOptions,
                        onItemsPerPageChange: onNetSuiteProductsPerPageChange,
                        itemsPerPage: netSuiteProductsPerPage
                    }}
                />
            </Panel>

            <Panel header="Event Subscribtion Options" id="event_subscription_options">
                <Flex>
                    <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary" 
                            onClick={
                                () => {
                                    fetchSubscribedEvents(authState, dispatch, decodedContext);
                                }
                            }
                        >
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/2048px-Refresh_icon.svg.png' width='25px'/>
                        </Button>
                    </FlexItem>
                </Flex>
                <Flex>
                    <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary" 
                            onClick={
                                ()=> {
                                    subscribeToEvent(authState, dispatch, "store/customer/created")
                                }
                            }
                        >
                            Add Customer Create Listener
                        </Button>
                    </FlexItem>
                    <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary" 
                            onClick={
                                ()=> {
                                    subscribeToEvent(authState, dispatch, "store/customer/updated")
                                }
                            }
                        >
                            Add Customer Update Listener
                        </Button>
                    </FlexItem>
                    {/* <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary" 
                            onClick={
                                ()=> {
                                    subscribeToEvent(authState, dispatch, "store/customer/deleted")
                                }
                            }
                        >
                            Add Customer Delete Listener
                        </Button>
                    </FlexItem> */}
                </Flex>
                <Flex>
                    <FlexItem
                        marginRight="small"    
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary"
                            onClick={
                                () => {
                                    subscribeToEvent(authState, dispatch, "store/product/updated")
                                }
                            }
                        >
                            Add Products Update Listener
                        </Button>
                    </FlexItem>
                </Flex>
                {/* 
                <Flex>
                    <FlexItem
                        marginRight="small"    
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary"
                            onClick={
                                () => {
                                    fetchBigCommerceCustomers()
                                }
                            }
                        >
                            Get Customers
                        </Button>
                    </FlexItem>
                    <FlexItem
                        marginRight="small"    
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary"
                            onClick={
                                () => {
                                    getRecentlyViewedProducts("l1m6wbgej9", "hv0w0sza1ja3eel4gzajfahn6sq5rl7", "11", )
                                }
                            }
                        >
                            Get Recently Viewed Products
                        </Button>
                    </FlexItem>
                </Flex> 
                */}
                <Table
                    columns={[
                        {
                            header: "ID",
                            hash: "id",
                            tooltip: "Webhook ID",
                            render: ({ id })=> id
                        },
                        {
                            header: "Event Scope",
                            hash: "scope",
                            tooltip: "Webhook Event Scope",
                            render: ({ scope }) => scope
                        },
                        { 
                            header: 'Action', 
                            hideHeader: true, 
                            hash: 'delete_webhook', 
                            render: ({ id }) => renderDeleteButton(id, authState, dispatch) 
                        }
                    ]}
                    items={subscribedEventsList?.length > 0 ? subscribedEventsList : []}
                    itemName="Subscribed Events"
                ></Table>
            </Panel>
        </>
    )
}


const fetchBigCommerceCustomers = () => {
    const logTitle = " ";
    try{
        const requestBody = {
            storeHash: "l1m6wbgej9",
            accessToken: "t1v78525y56m540j8kx7rrzoa4cc32u"
        };
        
        fetch ("https://2889-119-153-103-211.ngrok.io/api/bigcommerce/get_customer", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Methods': 'PUT, POST, PATCH, DELETE, GET',
                'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log("responseObj - get_customer", responseObj)
        })
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}
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
            .then(responseObj => {
                console.log(logTitle + "responseObj", responseObj);

                if (responseObj?.title == "Unauthorized") {
                    getAndSetAuthInfo(decodedContext, dispatch)
                } else {
                    let bigcommerceProductsArray = [];
                    let bigcommerceProductsMappingObject = {};
                    // let metaData = {
                    //     totalInventoryCount: 0,
                    //     totalVariantsCount: 0,
                    //     primaryCategoryId: ""
                    // };
                    let categoryCountMapObj = {}
                    responseObj.data.map(dataObj => {
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

                    dispatch(bigcommerceProductsSlice.actions.setProductsInfo({
                        productsArray: bigcommerceProductsArray,
                        productsMappingObject: bigcommerceProductsMappingObject,
                        // metaData: metaData
                    }));
                }
            });
        }

    } catch(e){  
        console.error("ERROR IN"+logTitle, e)
    }
}

const fetchNetSuiteProductsInfo = (dispatch) => {
    const logTitle = " fetchNetSuiteProductsInfo() ";
    try {
        console.log(logTitle,"EXECUTED!")
        fetch("/api/netsuite/get_products", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
            }
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle+"responseObj", responseObj)
            let netsuiteProductsArray = [];
            let netsuiteProductsMappingObject = {}; 
            responseObj.data.map(dataObj => {
                netsuiteProductsArray.push(dataObj);
                if(!netsuiteProductsMappingObject[dataObj.id]){
                    netsuiteProductsMappingObject[dataObj.id] = dataObj
                }
            });
            dispatch(netsuiteProductsSlice.actions.setProductsInfo({
                productsArray: netsuiteProductsArray,
                productsMappingObject: netsuiteProductsMappingObject
            }));
        })
    } catch(e){
        console.error("ERROR IN"+logTitle, e);
    }
}

const fetchSubscribedEvents = (authState, dispatch, decodedContext) => {
    const logTitle = " fetchSubscribedEvents() ";
    try {

        getEventsList(authState);
        if (decodedContext) {
            const requestUrl = "/api/webhook/get_subscribed_events";
            const requestHeaders = {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
            };
            const requestBody = {
                authInfo: authState.value.authInfo,
            };
            fetch(requestUrl, {
                method: "POST",
                headers: requestHeaders,
                body: JSON.stringify(requestBody)
            })
            .then(response=> response.json())
            .then(responseObj => {
                console.log(logTitle+"responseObj", responseObj);
                if (responseObj?.title == "Unauthorized") {
                    getAndSetAuthInfo(decodedContext, dispatch)
                } else {
                    let subscribedEventsList = [];
                    if (responseObj?.data) {
                        responseObj.data.map(dataObj => {
                            subscribedEventsList.push(dataObj);
                        });
                        dispatch(webhookSlice.actions.setWebhooksInfo({ subscribedEventsList }));
                    }
                }
            });
        }
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}

const subscribeToEvent = (authState, dispatch, eventScope) => {
    const logTitle = " subscribeToEvent() ";
    try {
        const requestUrl = "/api/webhook";
        const requestHeaders = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
        };
        const requestBody = {
            authInfo: authState.value.authInfo,
            eventScope
        };
        fetch(requestUrl, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle+"responseObj", responseObj);
            if(responseObj.status == 422){
                alert(responseObj.title);
            } else {
                dispatch(webhookSlice.actions.addEventSubscription({newEventObj: responseObj.data}));
            }
        });
    } catch(e){
        console.error("ERROR IN"+logTitle, e);
    }
}

const renderDeleteButton = (webhookId, authState, dispatch) => {
    const logTitle = " renderDeleteButton() ";
    try{
        return (
            <Button 
                marginTop="small" 
                variant="secondary" 
                onClickCapture={()=> {
                    unsubscribeFromEvent(webhookId, authState, dispatch)
                }}
            >
                Delete
            </Button>
        )
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}

const unsubscribeFromEvent = (webhookId, authState, dispatch) => {
    const logTitle = " unsubscribeFromEvent() ";
    try {
        const requestUrl = "/api/webhook/unsubscribe_from_event";
        const requestHeaders = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
        };

        const requestBody = {
            authInfo: authState.value.authInfo,
            webhookId
        };

        fetch(requestUrl, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle + "responseObj", responseObj);
            dispatch(webhookSlice.actions.removeEventSubscription({oldEventObj: responseObj.data}));
        });
    }catch(e){
        console.error("ERROR IN"+logTitle, e);
    }

}

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
        if (responseObj?.data?.authInfoJson) dispatch(authSlice.actions.setStoreAuthInfo({authInfo: responseObj.data.authInfoJson}));
    });
}

const getEventsList = (authState) => {
    const logTitle = " getEventsList() ";
    try {
        const requestUrl = "/api/webhook/get_events";
        const requestHeaders = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
        };
        const requestBody = {
            authInfo: authState.value.authInfo
        }
        fetch(requestUrl, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle + "responseObj", responseObj);
        })
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}

function getRecentlyViewedProducts(storeHash, accessToken, customerId) {
    const logTitle = " setAsRecentViewedProduct() ";
    try {
        const requestUrl = "https://2889-119-153-103-211.ngrok.io/api/bigcommerce/get_recently_viewed_items";
        const requestHeaders = {
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Methods': 'PUT, POST, PATCH, DELETE, GET',
            'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'     
        }
        const requestBody = {
            storeHash,
            accessToken,
            customerId
        };
        fetch(requestUrl, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: requestHeaders
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle + "responseObj", responseObj);
        })
    } catch(e) {
        console.error("ERROR IN"+logTitle, e)
    }
}

export default CustomDscPage;