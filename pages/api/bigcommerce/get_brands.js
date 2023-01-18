import NextCors from "nextjs-cors";
export default async function get_brands(req, res) {
    const logTitle = " get_brands() ";
    try {
        await NextCors(req, res, {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        });
        console.log(logTitle, "EXECUTED!");
        console.log(logTitle+ "req.body", req.body);
        const requestBody = req.body
        if(requestBody.storeHash && requestBody.accessToken) {
            // const requestUrl = "https://api.bigcommerce.com/stores/"+requestBody.storeHash+"/v2/customers";
            const requestUrl = "https://api.bigcommerce.com/stores/"+requestBody.storeHash+"/v3/catalog/brands";
            const requestHeaders = {
                "X-Auth-Token": requestBody.accessToken,
                "Content-Type": "application/json",
                "Accept": "application/json"
            };
            fetch(requestUrl, {
                method: "GET",
                headers: requestHeaders
            })
            .then(response => response.json())
            .then(responseObj => {
                console.log("responseObj", responseObj)
                res.json(responseObj)
            })
        }
    } catch(e) {
        console.log("ERROR IN"+logTitle, e);
    }
}