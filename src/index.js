import { PORT } from "./routers/config.js";
import app from "./app.js";
app.listen(PORT)

console.log('server running server',PORT)