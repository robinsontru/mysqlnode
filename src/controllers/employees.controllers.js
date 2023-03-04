import { pool } from "../db.js";
export const getEmployees =async (req, res)=>{
    // 
    try {
        // throw new Error('db error')
        const [rows]  = await pool.query('SELECT *FROM employee')
  res.send(rows)
    } catch (error) {
        return res.status(508).json({message:'something goes wrong'})
    }
  
}
export const getEmployee =async (req, res)=>{
  try {
    console.log(req.params.id);
    const  [rows]= await pool.query('select *from employee where id=?',[req.params.id])
  //    console.log(rows);
  if (rows.length<=0)
  return res.status(404).json({message:'no se encontro el empleado'})
      res.json(rows[0])
  } catch (error) {
    return res.status(508).json({message:'something goes wrong'})
  }
  }
  


export const postEmployess = async (req, res) =>{
try {
    const {name,salary} = req.body
const [rows] =  await pool.query('INSERT INTO employee(name,salary)VALUES (?,?)',[name,salary])
res.send({
    id:rows.insertId,
    name,
    salary
})
console.log(req.body);
} catch (error) {
    return res.status(508).json({message:'something goes wrong'})

}
}

export  const pustEmployees =async(req, res) => {
    const {name,salary}=req.body
    const {id} =req.params
    try {
       
    
  const[result]=  await pool.query('UPDATE employee SET name = IFNULL(? ,name), salary=IFNULL(?,salary) WHERE id=?',
  [name,salary,id])
    if (result.affectedRows==0)
    return res.status(404).json({
        message:'la actualizacion no funciono'
    })
 const [rows]= await pool.query('SELECT * FROM employee WHERE id=?',[id])

console.log(result);
  res.json(rows[0])
    } catch (error) {
        return res.status(508).json({message:'something goes wrong'})

    }
}






export const deleteEmployess = async(req, res) =>{

  try {

const [result]  =await pool.query('DELETE FROM  employee WHERE  id=?' ,[req.params.id])
    if(result.affectedRows<=0){
        return res.status(404).json({message:'no se elimino  el empleado'})

    }
  res.sendStatus(204)
  } catch (error) {
    return res.status(508).json({message:'something goes wrong'})

  }
}
