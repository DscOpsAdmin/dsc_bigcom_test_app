const {
    APP_BASE_URL
} = process.env;

export default async function get_events(req, res) {
    const logTitle = " get_events() ";
    try {
        const requestUrl = "https://api.bigcommerce.com/stores/"+req.body.authInfo.storeHash+"/v3/hooks";
        const requestHeaders = {
            "X-Auth-Token": req.body.authInfo.access_token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        fetch(requestUrl, {
            method: "GET",
            headers: requestHeaders
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle+"responseObj", responseObj)
            res.json(responseObj);
        })
    } catch(e) {
        console.error("ERROR IN" + logTitle, e);
    }
}