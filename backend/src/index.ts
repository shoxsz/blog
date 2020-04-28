import express from "express";
import cors from "cors";
import { Router } from './routes'
import { json } from "body-parser"
import path from 'path'

const app = express()
const port = 3000

app.use(cors())
app.use(json())
app.use(express.static(path.join(__dirname, '..', '..', 'react-front', 'build')))
app.use(Router)
app.listen(port, () => console.log(`Blog is online ${port}!`))