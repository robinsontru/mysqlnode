import express from 'express';
import employeesRoutes from "./routers/employees.routes.js";
import indexRoutes from "./routers/index.routes.js";
const app = express()
app.use(express.json())


app.use(indexRoutes)
app.use('/api/',employeesRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message:'la ruta no funciona '
    })
})
export default app;