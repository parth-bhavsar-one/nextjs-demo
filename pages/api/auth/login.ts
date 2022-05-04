import type { NextApiRequest, NextApiResponse } from 'next'
const jwt = require('jsonwebtoken')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    fetch(`http://localhost:2096/users?email=${req.body.email}&password=${req.body.password}`).then(res => res.json()).then((result) => {

        if (result && result[0] && result[0].id) {

            let user = result[0]

            if (user.isVerified) {
                const token = jwt.sign({ id: user.id, email: user.email }, "SECRET_KEY", { expiresIn: '7d' });

                return res.status(200).json({
                    ...user,
                    token
                });
            } else {
                res.status(403).json({message: "Please verify your email to activate your account."})
            }


        }


    }).catch(err => res.status(500).json({}))

}
