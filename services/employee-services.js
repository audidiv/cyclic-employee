const db = require('../config/db-config');

async function createEmployee(req, res) {
    const { name, salary, age} = req.body;
    
    db.query(
        `INSERT INTO employees(employee_name, employee_salary, employee_age)
        VALUES($1, $2, $3)`,
        [name, salary, age],
        (error, result) => {
            if(error) return res.status(500).send({
                errors: "Internal server error",
                cause: error.message
            });
            const data = {
                employee_name: name,
                employee_salary: salary,
                employee_age: 61,
            }
            res.status(201).send({
                status: "success",
                data: data
            });
        }
    );
};

async function getListEmployees(req, res) {
    db.query(
        `SELECT * FROM employees`,
        (error, result) => {
            if(error) return res.status(500).send({
                errors: "Internal server error",
                cause: error.message
            });
            res.status(200).send({
                status: "success",
                data: result.rows,
                message: "Successfully! All records has been fetched"
            });
        }
    )
};

async function getListEmployeesById(req, res) {
    const id = req.params.id
    db.query(
        `SELECT * FROM employees WHERE id=$1`,
        [id],
        (error, result) => {
            if(error) return res.status(400).send({
                errors: error.message
            });
            if(result.rows.length == 0) return res.status(400).send({
                status: "error",
                message: "Not Found Record",
                code: 400,
                errors: "id is empty"
            });
            res.status(200).send({
                status: "success",
                data: result.rows[0],
                message: "Successfully! All records has been fetched"
            });
        }
    )
};

async function updateEmployee(req, res) {
    const employeeId = req.params.id;
    const { name, salary, age } = req.body;

    db.query(
        `UPDATE employees
        SET employee_name=$1, employee_salary=$2, employee_age=$3
        WHERE id = $4`,
        [name, salary, age, employeeId],
        (err, result) => {
            if(err) return res.status(500).send({errors: "Internal Server error"});
            data = {
                id: employeeId,
                name: name,
                salary: salary,
                age: age,
            }
            if(result.rowCount.length == 0) return res.status(400).send({
                status: "error",
                message: "Not Found Record",
                code: 400,
                errors: "id is empty"
            });
            res.status(200).send({
                status: "success",
                data: data,
                message: "Successfully! All records has been fetched"
            });
        }
    );
}

async function deleteEmployee(req, res) {
    const employeeId = req.params.id;

    db.query(
        `SELECT * FROM employees WHERE id=$1`,
        [employeeId],
        (error, result) => {
            if(error) return res.status(400).send({
                errors: error.message
            });
            if(result.rows.length == 0) return res.status(400).send({
                status: "error",
                message: "Not Found Record",
                code: 400,
                errors: "id is empty"
            });
            db.query(
                `DELETE FROM employees WHERE id = $1`,
                [employeeId],
                (err, result) => {
                    if(err) return res.status(200).send({errors: "Internal server error"});
                    res.status(200).send({
                        status: "success",
                        message: "Successfully! deleted Records"
                    });
                }
            );
        }
    );
}

module.exports = {
    getListEmployees,
    getListEmployeesById,
    createEmployee,
    updateEmployee,
    deleteEmployee
}