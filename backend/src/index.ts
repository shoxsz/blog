import express from "express";
import cors from "cors";
import { Router } from './routes'
import { json } from "body-parser";

const app = express()
const port = 3030

app.use(cors())
app.use(json())
app.use(Router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))