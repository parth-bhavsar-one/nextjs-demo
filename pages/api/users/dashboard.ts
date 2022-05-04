import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log(req.query.id)

    fetch(`http://localhost:2096/users/${req.query.id}`).then(res => res.json()).then((result) => {

        if (result && result.id) {
            return res.status(200).json(result );
        } else {
            res.status(403).json({})
        }

    }).catch(err => res.status(500).json({}))

}
