import type { NextApiRequest, NextApiResponse } from 'next'
import { generateToken } from '../../../utils/common'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let user = {
        email: req.body.email,
        password: "Test@1234",
        // fullName: req.body.fullName,
        dob: req.body.dob,
        isVerified: false,
    }

    fetch(`http://localhost:2096/users`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json()).then((result) => {

        let token = generateToken({id: result.id, email: user.email})
        let URL = `http://localhost:3000/user/auth/verify?token=${token}`

        res.status(200).json({message: "Please check your email to verify and activate your account.", token})

    }).catch(err => res.status(500).json({}))

}
