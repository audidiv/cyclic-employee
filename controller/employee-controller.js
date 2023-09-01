const express = require('express');
const employeeRouter = express.Router();

const employeeService = require('../services/employee-services');

employeeRouter.get("/", employeeService.getListEmployees);

employeeRouter.get("/:id", employeeService.getListEmployeesById);

employeeRouter.post("/create", employeeService.createEmployee);

employeeRouter.put("/update/:id", employeeService.updateEmployee);

employeeRouter.delete("/delete/:id", employeeService.deleteEmployee);

module.exports=employeeRouter;