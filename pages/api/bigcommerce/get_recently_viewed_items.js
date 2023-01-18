import NextCors from "nextjs-cors";
export default async function get_recently_viewed_items(req, res) {
    const logTitle = " get_recently_viewed_items() ";
    try {
        console.log(logTitle, "EXECUTED!")
        await NextCors(req, res, {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        });
        const requestBody = req.body;
        const {storeHash, accessToken, customerId} = requestBody;

        let responseObj = {};
        responseObj.status = "ERROR";
        responseObj.message = "Unexpected error!";

        if (storeHash && accessToken) {
            if (customerId) {
                let productsCatalogMapObj = {};
                getProductsCatalog(storeHash, accessToken)
                .then(response => response.json())
                .then(getProductsCatalogResponseObj => {
                    if(getProductsCatalogResponseObj && getProductsCatalogResponseObj.data && getProductsCatalogResponseObj.data.length > 0) {
                        let productsMapObj = {};
                        for (let index1 in getProductsCatalogResponseObj.data) {
                            const productDataObj = getProductsCatalogResponseObj.data[index1];
                            if (productDataObj.id && !productsMapObj[productDataObj.id]) productsMapObj[productDataObj.id] = productDataObj;
                        }
                        console.log(logTitle + "productsMapObj", productsMapObj);
                        getCustomerById(storeHash, accessToken, customerId)
                        .then(response => response.json())
                        .then(getCustomerResponseObj => {
                            let recentlyViewedProductsDataMapObj = {};
                            if(getCustomerResponseObj && getCustomerResponseObj.id) {
                                let recentlyViewedProductsMapObj = getCustomerResponseObj.notes ? JSON.parse(getCustomerResponseObj.notes) : {};
                                console.log(logTitle+"recentlyViewedProductsMapObj", recentlyViewedProductsMapObj);
                                for (let dateString in recentlyViewedProductsMapObj) {
                                    const recentlyViewedProductIds = recentlyViewedProductsMapObj[dateString];
                                    for (let index2 in recentlyViewedProductIds) {
                                        let recentlyViewedProductId = recentlyViewedProductIds[index2];
                                        recentlyViewedProductIds[index2] = productsMapObj[recentlyViewedProductId]
                                    }
                                }
                                responseObj.status = "SUCCESS";
                                responseObj.message = "Fetched products!";
                                responseObj.data = {
                                    recentlyViewedProductsMapObj
                                }
                                // responseObj.otherResponse = getProductsCatalogResponseObj;
                                res.json(responseObj);
                            }
                        });
                    }
                });
            } else {
                responseObj.message = "Customer ID not found! Please also provide Customer ID.";
                res.json(responseObj);
            }
        } else {
            responseObj.message = "Please provide account auth info!";
            res.json(responseObj);
        }
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}

function getCustomerById(storeHash, accessToken, customerId) {
    const logTitle = " getCustomerById() ";
    try {
        const requestUrl = "https://api.bigcommerce.com/stores/"+storeHash+"/v2/customers/"+customerId;
        const requestHeaders = {
            "X-Auth-Token": accessToken,
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        return fetch(requestUrl, {
            method: "GET",
            headers: requestHeaders
        });
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}

function getProductsCatalog(storeHash, accessToken) {
    const logTitle = " getProductsCatalog() ";
    try {
        const requestUrl = "https://api.bigcommerce.com/stores/"+storeHash+"/v3/catalog/products?include=images";
        //https://api.bigcommerce.com/stores/{store_hash}/v3/catalog/products
        const requestHeaders = {
            "host": "api.bigcommerce.com",
            "X-Auth-Token": accessToken,
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        return fetch(requestUrl, {
            method: "GET",
            headers: requestHeaders
        });
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}
