import NextCors from "nextjs-cors";
export default async function get_products(req, res) {
    const logTitle = " get_products() ";
    try {
        await NextCors(req, res, {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        });
        console.log(logTitle, "EXECUTED!");
        console.log(logTitle+ "req.body", req.body);
        const storeHash = req.body ? req.body.storeHash : "";
        const accessToken = req.body ? (req.body.access_token ? req.body.access_token : req.body.accessToken) : "";
        if(storeHash && accessToken) {
            const requestUrl = "https://api.bigcommerce.com/stores/"+storeHash+"/v3/catalog/products?include=images,variants";
            const requestHeaders = {
                "X-Auth-Token": accessToken,
                "Content-Type": "application/json",
                "Accept": "application/json"
            };
            fetch(requestUrl, {
                method: "GET",
                headers: requestHeaders
            })
            .then(response => response.json())
            .then(responseObj => {
                res.json(responseObj);
            })
        }
    } catch(e) {
        console.log("ERROR IN"+logTitle, e);
    }
}