export function storeAuthInfoInNs(requestBody) {
    const logTitle = " storeAuthInfoInNs() ";
    try {
        const requestUrl = "https://tstdrv2683572.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1678&deploy=1&compid=TSTDRV2683572&h=bc8c48392cbfac91bd7a";
        const requestHeader = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
        };
        return fetch(requestUrl, {
            method: "POST",
            headers: requestHeader,
            body: JSON.stringify({
                method: "storeAuthInfoInNs",
                data: requestBody
            })
        });
    } catch (e) {
        console.error("ERROR IN" + logTitle, e)
    }
}

export function getStoreAuthInfoFromNs(requestBody) {
    const logTitle = " getStoreAuthInfoFromNs() ";
    try {
        const requestUrl = "https://tstdrv2683572.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1678&deploy=1&compid=TSTDRV2683572&h=bc8c48392cbfac91bd7a";
        const requestHeader = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
        };
        console.log(logTitle + "requestBody", requestBody);
        return fetch(requestUrl, {
            method: "POST",
            headers: requestHeader,
            body: JSON.stringify({
                method: "getStoreAuthInfoFromNs",
                data: requestBody
            })
        });
    } catch (e) {
        console.error("ERROR IN" + logTitle, e)
    }
}

export function sendTestHttpRequest(requestBody){
    const logTitle = " sendTestHttpRequest() ";
    try {
        const requestUrl = "https://tstdrv2683572.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1678&deploy=1&compid=TSTDRV2683572&h=bc8c48392cbfac91bd7a";
        const requestHeader = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
        };
        return fetch(requestUrl, {
            method: "POST",
            headers: requestHeader,
            body: JSON.stringify(requestBody)
        });
    } catch(e) {
        console.error("ERROR IN" + logTitle, e)
    }

}