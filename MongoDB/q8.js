// students database

// ques.01 - Find the average age of all the students
db.students.aggregate([
  {
    $group: {
      _id: 0,
      Average_Age: { $avg: "$age" },
    },
  },
]);

// ques.02 - update the age of "Alice Johnson" to 24
db.students.updateOne({ name: "Alice Johnson" }, { $set: { age: 24 } });

// using aggregate
db.students.aggregate([
  {
    $match: {
      name: "Alice Johnson",
    },
  },
  {
    $set: { age: 28 },
  },
]);

// Ques.03 - Add a new course chemistry to student's course array, only if it does not already existed.
db.students.updateMany({}, { $addToSet: { courses: "Chemistry" } });

// ***JOINS*** //
db.students.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id", // from where
      foreignField: "studentID", // to where
      as: "address",
    },
  },
  { $unwind: "$address" },
  {
    $project: {
      name: 1,
      "address.city": 1, // if you want to access the child
      "address.country": 1,
    },
  },
]);

// db.employees.aggregate([
//     {$project : }
// ])

// using alias
db.employees.find({}, { _id: 0, name: 1, dept: $department });

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      dept: $department,
    },
  },
]);
// to give Grade A to every field
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      Grade: "Grade A",
    },
  },
]);

// to give Grades using conditions
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      Grade: {
        $cond: [{ $gte: ["$salary", 2000] }, "Grade A", "Grade B"],
      },
    },
  },
]);

// using if then else
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      Grades: {
        $cond: {
          if: { $gte: ["$salary", 2000] },
          then: "Grade A",
          else: "Grade B",
        },
      },
    },
  },
]);

// Add a new field strSalary in employees
// sotre "2500" for all IT employees
// sotre "1000" for other employees

db.employees.find({ department: "IT" }, { $set: { strSalary: "2500" } });

db.employees.aggregate([
  {
    $set: {
      strSalary: {
        $cond: {
          if: { $eq: ["$department", "IT"] },
          then: "2500",
          else: "1000",
        },
      },
    },
  },
]);

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      Sal: { $convert: { input: "$strSalary", to: "int" } },
    },
  },
  { $group: { _id: "$department", total: { $sum: "$Sal" } } },
  {$out: "depWiseSalary"}
]);

// view Syntax
db.createView("viewName" , "collectionName" , []);


db.createView("deptWiseSalaryView","employees",[
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      Sal: { $convert: { input: "$strSalary", to: "int" } },
    },
  },
  { $group: { _id: "$department", total: { $sum: "$Sal" } } },
]);

// MongoDB Backup
    // --> Delete
//  mongodump -d LPU_Employee -o 'C:\ACADEMICS\SUMMER PEP\LPUBackUp'
    // --> Restore
// mongorestore -d LPU_Employee 'C:\ACADEMICS\SUMMER PEP\LPUBackUp\LPU_Employee'
