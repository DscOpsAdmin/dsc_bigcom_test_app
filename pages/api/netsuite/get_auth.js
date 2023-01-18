import { getStoreAuthInfoFromNs, sendTestHttpRequest } from "../../../crud/netsuite/authCrud";
export default async function get_auth(req, res) {
    const logTitle = " get_auth() ";
    try {
        console.log(logTitle, "EXECUTED!");
        console.log(logTitle+ "req.body", req.body);
        getStoreAuthInfoFromNs(req.body)
        .then(response => response.json())
        .then(responseObj => {
            res.json(responseObj)
        })
    } catch(e) {
        console.log("ERROR IN"+logTitle, e);
    }
}

