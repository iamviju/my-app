import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'


const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        getAllEmployee();
      
    }, [])

    const getAllEmployee = ()=>{
        EmployeeService.getAllEmployees().then((Response)=>{
            setEmployees(Response.data);
            console.log(Response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const deleteEmployee =(employeeId)=>{
        EmployeeService.deleteEmployee(employeeId).then((Response)=>{
            getAllEmployee();
        }).catch(error=>{
            console.log(error);
        })
    }
    
  return (
      
    <div className="container">
       
        <h2 className="text-center">List Employees</h2>
        {/*<Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link> */}
        <table className="table table-bordered table-striped">
            <thead>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailid}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}> Update</Link>
                                <button className="btn btn-danger" onClick={()=>deleteEmployee(employee.id)} style={{marginLeft: "10px"}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>  
  )
}

export default ListEmployeeComponent