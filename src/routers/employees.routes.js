import { Router } from "express";
import { getEmployees,
    postEmployess,
    pustEmployees,
    deleteEmployess,
    getEmployee } from "../controllers/employees.controllers.js";
const router = Router()
router.get('/employees',getEmployees )
router.get('/employees/:id',getEmployee )
router.post('/employees',postEmployess )
router.patch('/employees/:id',pustEmployees )
router.delete('/employees/:id',deleteEmployess)


export default router