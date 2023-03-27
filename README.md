# ms-clockin-argon
Microservice for Employee Clockin App

Deployed in https://ms-clockin-argon.fly.dev/  
App for Employee: https://app-employee-clockin.vercel.app/  
App for Admin: https://app-admin-clockin.vercel.app/  
Kafka and Database credentials are in .env.example
Kafka messages is sink to MongoDB collection employeeUpdates

# How to run
1. Run `npm install`
2. Copy .env.example to .enva
3. Run `npm start`

# APIs

- POST /absences
- GET /absences
- POST /employees/login
- POST /employees
- GET /employees
