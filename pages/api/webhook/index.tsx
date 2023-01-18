const { APP_BASE_URL } = process.env;

export default async function webhook(req, res) {
    const logTitle = " create_webhook() ";
    try{
        console.log(logTitle+ "req.body", req.body);
        console.log(logTitle+"req.body.authInfo", req.body.authInfo)
        const requestUrl = "https://api.bigcommerce.com/stores/"+req.body.authInfo.storeHash+"/v3/hooks";
        const requestHeaders = {
            "X-Auth-Token": req.body.authInfo.access_token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        console.log(logTitle+"03012023 :: req.body.eventScope", req.body.eventScope)
        const requestBody = {
            "scope": req.body.eventScope,
            "destination": APP_BASE_URL+"/api/webhook/listener",
            "is_active": true
        }
        fetch(requestUrl, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(requestBody)
        })
        .then(response=> response.json())
        .then(responseObj => {
            console.log(logTitle+"responseObj", responseObj);
            res.json(responseObj)
        })
    }catch(e){
        console.log("ERROR IN"+logTitle, e);
    }
}