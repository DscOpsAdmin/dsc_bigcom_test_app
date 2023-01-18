import NextCors from "nextjs-cors";
export default async function set_recently_viewed_items(req, res) {
    const logTitle = " set_recently_viewed_items() ";
    try {
        console.log(logTitle, "EXECUTED!")
        await NextCors(req, res, {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        });
        
        const requestBody = req.body;
        // console.log(logTitle+"requestBody", requestBody);

        let {storeHash, accessToken, customerId, productId, todayDate} = requestBody;
        let responseObj = {};
        responseObj.status = "ERROR";
        responseObj.message = "Unexpected error!";
        if (storeHash && accessToken) {
            if (customerId) {
                if (productId) {
                    productId = +productId;
                    if (todayDate) {
                        getCustomerById(storeHash, accessToken, customerId)
                        .then(response => response.json())
                        .then(getCustomerResponseObj => {
                            if (getCustomerResponseObj && getCustomerResponseObj.id) {
                                let recentlyViewedProductsMapObj = getCustomerResponseObj.notes ? JSON.parse(getCustomerResponseObj.notes) : {};
                                // console.log(logTitle+"recentlyViewedProductsMapObj", recentlyViewedProductsMapObj);
                                if (!recentlyViewedProductsMapObj[todayDate]) {
                                    // console.log(logTitle+" :: !recentlyViewedProductsMapObj[todayDate]", "EXECUTED!");
                                    recentlyViewedProductsMapObj[todayDate] = [];
                                };
                                let productIndex = recentlyViewedProductsMapObj[todayDate].indexOf(productId);
                                // console.log(logTitle+"productIndex", productIndex)
                                if (productIndex != -1) {
                                    recentlyViewedProductsMapObj[todayDate].splice(productIndex, 1);
                                }
                                recentlyViewedProductsMapObj[todayDate] = [productId].concat(recentlyViewedProductsMapObj[todayDate]);
                                // console.log(logTitle+"recentlyViewedProductsMapObj", recentlyViewedProductsMapObj)
        
                                let updateCustomerRequestObj = {};
                                updateCustomerRequestObj.requestUrl = "https://api.bigcommerce.com/stores/"+storeHash+"/v2/customers/"+customerId;
                                updateCustomerRequestObj.requestBody = {
                                    "notes": JSON.stringify(recentlyViewedProductsMapObj)
                                };
                                updateCustomerRequestObj.requestHeaders = {
                                    "X-Auth-Token": requestBody.accessToken,
                                    "Content-Type": "application/json",
                                    "Accept": "application/json"
                                };
                                // console.log(logTitle+"updateCustomerRequestObj", updateCustomerRequestObj);
        
                                fetch(updateCustomerRequestObj.requestUrl, {
                                    method: "PUT",
                                    body: JSON.stringify(updateCustomerRequestObj.requestBody),
                                    headers: updateCustomerRequestObj.requestHeaders
                                })
                                .then(response => response.json())
                                .then(updateCustomerResponseObj => {
                                    console.log(logTitle+"updateCustomerResponseObj", updateCustomerResponseObj);
                                    if(updateCustomerResponseObj && updateCustomerResponseObj.id){
                                        responseObj.status = "SUCCESS";
                                        responseObj.message = "Updated Recently Viewed Products!";
                                        responseObj.data = updateCustomerResponseObj
                                        res.json(responseObj);
                                    }
                                });
                            }
                        }); //get data using "get customer" REST api
                    } else {
                        responseObj.message = "Today Date not found! Please also provide Today Date.";
                        res.json(responseObj);
                    }
                } else {
                    responseObj.message = "Product ID not found! Please also provide Product ID.";
                    res.json(responseObj);
                }
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
        })
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}