// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = 'http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/orders/'
  axios.get(url, { headers: { 'hash': 'OcJn4jYChW' } })
    .then(response => {
      res.status(200).json(response.data)
    })
    .catch(error => {
      res.status(500).json(error)
    })
}
