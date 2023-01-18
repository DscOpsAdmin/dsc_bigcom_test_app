export default async function get_categories(req, res) {
    const logTitle = " get_categories() ";
    try {
        console.log(logTitle, "EXECUTED!");
        console.log(logTitle+ "req.body", req.body);
        if(req.body.storeHash && req.body.access_token){
            const requestUrl = "https://api.bigcommerce.com/stores/"+req.body.storeHash+"/v3/catalog/categories";
            const requestHeaders = {
                "X-Auth-Token": req.body.access_token,
                "Content-Type": "application/json",
                "Accept": "application/json"
            };
            fetch(requestUrl, {
                method: "GET",
                headers: requestHeaders
            })
            .then(response => response.json())
            .then(responseObj => {
                res.json(responseObj)
            })
        }
    } catch(e) {
        console.log("ERROR IN"+logTitle, e);
    }
}