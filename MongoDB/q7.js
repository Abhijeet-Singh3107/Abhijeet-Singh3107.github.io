        // aggregate inplace of find
// --> aggregation pipeline
db.LPU_Employee.aggregate([
    {$match : {department : "IT"}},
    {$project : {name:1, department:1}},
    {$sort : {salary:1}},
    {$limit:3},     // sort and then limit the output for 3
]);

// --> group
db.LPU_Employee.aggregate([
    {$group:{
        _id: "$department",
            total: {$sum: "$salary"}        // calculate the sum of salary of all deparments
    } 
},
])

db.LPU_Employee.aggregate([
    {$project: {name: 0}},      // will not display the name
])

db.LPU_Employee.aggregate([
    {$project: {empName: "$name"}},      // name field will be displayed as empName
])

db.LPU_Employee.aggregate([
    {$project : {
        _id: 0,name:1,
        salary:1,
        bonus: { $multiply: ["$salary",2] }
    }   
    },
])

        // ques- write an agg query where you have to display name, email and salary for IT employees
db.LPU_Employee.aggregate([
    {$match: {department:"IT"}},
    {$project: {name:1,email:1,salary:1}}
])

        // ques- write an agg query where you have to display annual salary for IT employees
db.LPU_Employee.aggregate([
    {project : {
        salary : 1,
        Annual_Salary: {$multiply: ["$salary" , 12]},
    }}
]);

        // ques - display employee whose salary is greater than 3000 and show CTC instead of salary field
db.LPU_Employee.aggregate([
    {$match:{
        salary: {gt:3000}
    }},
    {$project: {
        $multiply : ["$salary", 12],
        CTC : "salary",
    }}
])