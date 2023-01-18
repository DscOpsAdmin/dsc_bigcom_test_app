import { getStoreAuthInfoFromNs } from "../../../crud/netsuite/authCrud";

export default async function listener(req, res) {
    const logTitle = " listener() ";
    try {
        console.log(logTitle, "EXECUTED");
        console.log(logTitle+"req.body", req.body);
        
        if (req.body.scope == "store/customer/created" || req.body.scope == "store/customer/updated") {
            
            const bigcomCustomerId = req?.body?.data?.id;
            let requestBody:any = {};
            requestBody.context = req?.body?.producer ? req.body.producer.split("stores/")[1] : "";
            getStoreAuthInfoFromNs(requestBody)
            .then(response => response.json())
            .then(responseObj1 => {
                console.log(logTitle+"responseObj1", responseObj1);
                if (responseObj1.status == "SUCCESS") {
                    const { authInfoJson } = responseObj1?.data;
                    const {access_token, storeHash} = authInfoJson;
                    getActiveEvents(access_token, storeHash)
                    .then(response => response.json())
                    .then(getActiveEventsResponse => {
                        let activeEventScopes = [];
                        if(getActiveEventsResponse && getActiveEventsResponse.data){
                            for (let index in getActiveEventsResponse.data){
                                const eventObj = getActiveEventsResponse.data[index];
                                if (eventObj && eventObj.scope) activeEventScopes.push(eventObj.scope);
                            }
                            console.log(logTitle+"activeEventScopes", activeEventScopes);
                            console.log(logTitle+"req.body.scope", req.body.scope);
                            console.log(logTitle+"activeEventScopes.includes(req.body.scope)", activeEventScopes.includes(req.body.scope));
                            if (activeEventScopes.includes(req.body.scope)) {
                                getCustomerRecord(access_token, storeHash, bigcomCustomerId)
                                .then(response2 => response2.json())
                                .then(responseObj2 => {
                                    console.log(logTitle + "responseObj2", responseObj2);
                                    const requestBody2 = {
                                        customer: responseObj2,
                                        storeHash
                                    };
                                    createNsCustomer(requestBody2)
                                    .then(response3 => response3.json())
                                    .then(responseObj3 => {
                                        console.log(logTitle + "responseObj3", responseObj3);
                                    });
                                });
                            }
                        }
                    })
                }
            });
        }
    } catch(e) {
        console.error("ERROR IN"+logTitle,e);
    }
}

function getActiveEvents(access_token, storeHash) {
    const logTitle = " getCustomerRecord() ";
    try {
        const requestUrl = "https://api.bigcommerce.com/stores/"+storeHash+"/v3/hooks";
        const requestHeaders = {
            "X-Auth-Token": access_token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        return fetch(requestUrl, {
            method:"GET",
            headers: requestHeaders
        })
    } catch(e) {
        console.error("ERROR IN"+logTitle,e);
    }
}
function getCustomerRecord(access_token, storeHash, bigcomCustomerId){
    const logTitle = " getCustomerRecord() ";
    try {
        const requestUrl = "https://api.bigcommerce.com/stores/"+storeHash+"/v2/customers/"+bigcomCustomerId;
        const requestHeaders = {
            "X-Auth-Token": access_token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        return fetch(requestUrl, {
            method:"GET",
            headers: requestHeaders
        })
    } catch(e) {
        console.error("ERROR IN"+logTitle,e);
    }
}

function createNsCustomer(requestBody) {
    const logTitle = " createNsCustomer() ";
    try {
        const requestUrl = "https://tstdrv2683572.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1680&deploy=1&compid=TSTDRV2683572&h=1191caddac32bb6b85d7";
        const requestHeader = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
        };
        return fetch(requestUrl, {
            method: "POST",
            headers: requestHeader,
            body: JSON.stringify({
                method: "updateCustomer",
                data: requestBody
            })
        });
    } catch(e) {
        console.error("ERROR IN"+logTitle,e);
    }
}