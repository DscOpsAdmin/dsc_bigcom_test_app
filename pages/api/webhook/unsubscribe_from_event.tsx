const {
    APP_BASE_URL
} = process.env;
export default async function get_subscribed_events(req, res) {
    const logTitle = " create_webhook() ";
    try {
        const {authInfo, webhookId} = req.body;
        const requestUrl = "https://api.bigcommerce.com/stores/"+authInfo.storeHash+"/v3/hooks/"+webhookId;
        const requestHeaders = {
            "X-Auth-Token": authInfo.access_token,
            "Content-Type": "application/json",
            "Accept": "application/json"
        };
        fetch(requestUrl, {
            method: "DELETE",
            headers: requestHeaders
        })
        .then(response => response.json())
        .then(responseObj => {
            res.json(responseObj)
        })
    } catch(e) {
        console.error("ERROR IN" + logTitle, e)
    }
}