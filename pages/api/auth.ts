import { NextApiRequest, NextApiResponse } from 'next';
import { encodePayload, getBCAuth, setSession } from '../../lib/auth';
import { storeAuthInfoInNs } from '../../crud/netsuite/authCrud';


export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    const logTitle = " auth() ";
    try {
        // Authenticate the app on install
        const session = await getBCAuth(req.query);
        console.log( logTitle + "1. session - TEST 2", session );
        storeAuthInfoInNs(session)
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle + "responseObj", responseObj);
        });
        const encodedContext = encodePayload(session); // Signed JWT to validate/ prevent tampering
        console.log(logTitle+"2. encodedContext - TEST 2", encodedContext); // await setSession(session);
        res.redirect(302, `/?context=${encodedContext}`);
    } catch (error) {
        const { message, response } = error;
        res.status(response?.status || 500).json({ message });
    }
}
