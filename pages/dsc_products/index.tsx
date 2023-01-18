import { Box, Flex, FlexItem, H1, H4, Panel, Table, Button } from '@bigcommerce/big-design';
import Link from 'next/link';
import { useSession } from '../../context/session';
import { useState, useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { authSlice } from "../../redux/authRedux";
import { bigcommerceProductsSlice } from "../../redux/bigcommerceProductsRedux";
import { netsuiteProductsSlice } from "../../redux/netsuiteProductsRedux";
import jwt_decode from "jwt-decode";
import { TableItem } from '../../types';

const DscProducts = () => {
    const logTitle = " DscProducts() ";
    console.log(logTitle, "EXECUTED!");

    const { context } = useSession();
    let decodedContext = "";
    if(context) decodedContext = context ? jwt_decode(context) : "";
    
    const dispatch = useDispatch();
    const authState = useSelector((state:any) => state.auth);
    //BigCommerce Products Code - START 
    const bigcommerceProductsState = useSelector((state:any) => state.bigcommerceProducts);
    const bigComProductsArray = bigcommerceProductsState.value.productsArray;
    if (bigComProductsArray.length <= 0) fetchBigCommerceProductsInfo(authState, dispatch, decodedContext);

    const [currentBigcomProductsPage, setCurrentBigcomProductsPage] = useState(1);
    const [bigcomProductsPerPageOptions] = useState([10, 20, 30]);    
    const [bigcomProductsPerPage, setBigcomProductsPerPage] = useState(10);
    const [currentBigcomProducts, setCurrentBigcomProducts] = useState<TableItem[]>([]);

    const onBigComProductsPerPageChange = (newRange) => {
        console.log(logTitle+"BigCommerce Products : newRange", newRange)
        setCurrentBigcomProductsPage(1);
        setBigcomProductsPerPage(newRange);
    };
    //BigCommerce Products Code - END
    
    //NetSuite Products Code - START
    const netsuiteProductsState = useSelector((state:any) => state.netsuiteProducts);
    const netsuiteProductsArray = netsuiteProductsState.value.productsArray;
    if (netsuiteProductsArray.length <= 0) fetchNetSuiteProductsInfo(dispatch);
    
    const [currentNetSuiteProductsPage, setCurrentNetSuiteProductsPage] = useState(1);
    const [netSuiteProductsPerPageOptions] = useState([10, 20, 30]);  
    const [netSuiteProductsPerPage, setNetSuiteProductsPerPage] = useState(10);
    const [currentNetSuiteProducts, setCurrentNetSuiteProducts] = useState<TableItem[]>([]);

    const onNetSuiteProductsPerPageChange = (newRange) => {
        setCurrentNetSuiteProductsPage(1);
        setNetSuiteProductsPerPage(newRange);
    };
    //NetSuite Products Code - END



    const renderName = (id: any, name: any): any => {
        return (
            <Link href={`/dsc_products/bigcommerce/${id}`}>{name}</Link>
        )
    };

    useEffect(() => {
        //BigCommerce Products Code
        const maxBigComProducts = currentBigcomProductsPage * bigcomProductsPerPage;
        const lastBigComProduct = Math.min(maxBigComProducts, bigComProductsArray.length);
        const firstBigComProduct = Math.max(0, maxBigComProducts - bigcomProductsPerPage);
        setCurrentBigcomProducts(bigComProductsArray.slice(firstBigComProduct, lastBigComProduct));

        //NetSuite Products Code
        const maxNetSuiteProducts = currentNetSuiteProductsPage * netSuiteProductsPerPage;
        const lastNetSuiteProduct = Math.min(maxNetSuiteProducts, netsuiteProductsArray.length);
        const firstNetSuiteProduct = Math.max(0, maxNetSuiteProducts - netSuiteProductsPerPage);
        setCurrentNetSuiteProducts(netsuiteProductsArray.slice(firstNetSuiteProduct, lastNetSuiteProduct));    
    }, [currentBigcomProductsPage, bigcomProductsPerPage, currentNetSuiteProductsPage, netSuiteProductsPerPage]);

     //BigCommerce Products Code
    if (currentBigcomProducts.length == 0 && bigComProductsArray.length > 0) {
        let initialBigComProductsArray = [...bigComProductsArray]
        setCurrentBigcomProducts(initialBigComProductsArray.splice(0, 10));
    }

    //NetSuite Products Code
    if (currentNetSuiteProducts.length == 0 && netsuiteProductsArray.length > 0) {
        let initialNetSuiteProductsArray = [...netsuiteProductsArray]
        setCurrentNetSuiteProducts(initialNetSuiteProductsArray.splice(0, 10));
    }
    return (
        <>
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
        </>
    );
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

export default DscProducts;