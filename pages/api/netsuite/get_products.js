export default async function get_products(req, res) {
    const logTitle = " get_products() ";
    try {
        const requestUrl = "https://tstdrv2683572.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1679&deploy=1&compid=TSTDRV2683572&h=b726975cc734c4f5127a";
        const requestHeaders = {
            'Content-Type': 'application/json',
            "Accept": "application/json",
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
        };
        fetch(requestUrl, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify({
                method: "getItemInfoFromNs"
            })
        })
        .then(response => response.json())
        .then(responseObj => {
            // console.log(logTitle+"responseObj", responseObj)
            res.json(responseObj)
        })
        .catch(e=> {
            console.error("ERROR IN"+logTitle, e)
        });
    } catch(e) {
        console.log("ERROR IN"+logTitle, e);
    }
}