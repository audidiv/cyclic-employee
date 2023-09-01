const express = require('express');
const app = express();
const cors = require('cors');

const employeeController = require('./controller/employee-controller');

PORT = 8090;

app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/api/v1/employees', employeeController);

app.listen(PORT, () => console.log(`Server is listening to port:${PORT}`));