import type { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from '../../../utils/common'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let token = String(req.query.token)
    let decoded = verifyToken(token)

    if (decoded && decoded.id) {

        fetch(`http://localhost:2096/users/${req.body.id}`).then(res => res.json()).then((user) => {

        console.log(user.id)
            fetch(`http://localhost:2096/users/${decoded.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    ...user,
                    password: req.body.password
                })
            }).then(res => res.json()).then((result) => {
                res.status(200).json(result)
            }).catch(err => res.status(500).json({}))
        }).catch(err => res.status(500).json({}))
    }


}
