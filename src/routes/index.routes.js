import {Router} from 'express'
import {pool} from '../database.js'

const router = Router()

router.get('/', (req, res) => {
  const [rows] = await pool.query(`SELECT 1 + 1 as result`)
  res.json(rows)
})

export default router