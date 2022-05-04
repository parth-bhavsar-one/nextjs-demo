import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let user = {
        email: req.body.email,
        password: "123456",
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

        console.log("USER CREATED: ", result)
        res.status(200).json(result)

    }).catch(err => res.status(500).json({}))

}
