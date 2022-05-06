import type { NextApiRequest, NextApiResponse } from 'next'
import { generateToken, verifyToken } from '../../../utils/common'
import { accountActivated } from '../../../utils/mailHelper'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let token = String(req.query.token)
    let decoded = verifyToken(token)

    if (decoded && decoded.id) {

        fetch(`http://localhost:2096/users/${decoded.id}`).then(res => res.json()).then((result) => {
            fetch(`http://localhost:2096/users/${decoded.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    ...result,
                    isVerified: true
                })
            }).then(res => res.json()).then((result) => {

                accountActivated({...result, url: "http://localhost:3000/auth/signin"})

                res.status(200).json(decoded)
            }).catch(err => res.status(500).json({}))
        }).catch(err => res.status(500).json({}))
    }


}
