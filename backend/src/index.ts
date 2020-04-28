import express from "express";
import cors from "cors";
import { Router } from './routes'
import { json } from "body-parser"
import path from 'path'

const app = express()
const port = 3030

app.use(cors())
app.use(json())
app.use(Router)
app.listen(port, () => console.log(`Blog is online ${port}!`))