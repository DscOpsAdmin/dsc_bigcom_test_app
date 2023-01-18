import NextCors from "nextjs-cors";
export default async function get_widgets(req, res) {
    const logTitle = " get_widgets() ";
    try {
        await NextCors(req, res, {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        });
        console.log(logTitle, "EXECUTED!");
        console.log(logTitle+ "req.body", req.body);
        const requestBody = req.body;
        console.log(logTitle+"requestBody", requestBody)
        if (requestBody.storeHash && requestBody.access_token) {
            const requestUrl = "https://api.bigcommerce.com/stores/"+requestBody.storeHash+"/v3/content/widgets";
            const requestHeaders = {
                "X-Auth-Token": requestBody.access_token,
                "Content-Type": "application/json",
                "Accept": "application/json",
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