import type { NextApiRequest, NextApiResponse } from 'next'

type User = Object

export default async function handler (req: NextApiRequest, res: NextApiResponse<User>) {

    // let user = await fetch("http://localhost:2096/users/1")
    res.status(200).json({name:"vishal"})
}
