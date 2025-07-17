db.employee.find({ name: { $regex: "Cathy" } });
db.employee.find({ name: { $regex: "cathy" } });
db.employee.find({ name: { $regex: "cathy", $options: "i" } });
db.employee.find({ name: { $regex: "cathy", $options: "i" } });
db.employee.find({ name: { $regex: "^C" } });       // all the names starting with C
db.employee.find({ name: { $regex: "y$" } });       // all the names ends with y

// Replica Set and Shredding in mongoDB important topics

// mongod -replSet rs1 -logpath "C:\ACADEMICS\SUMMER PEP\LPUBackUp\mongo-replica\data1\1.log" --dbpath "C:\ACADEMICS\SUMMER PEP\LPUBackUp\mongo-replica\data1" --port 27018

// mongod -replSet rs1 -logpath "C:\ACADEMICS\SUMMER PEP\LPUBackUp\mongo-replica\data2\2.log" --dbpath "C:\ACADEMICS\SUMMER PEP\LPUBackUp\mongo-replica\data2" --port 27019

//  mongod -replSet rs1 -logpath "C:\ACADEMICS\SUMMER PEP\LPUBackUp\mongo-replica\data3\3.log" --dbpath "C:\ACADEMICS\SUMMER PEP\LPUBackUp\mongo-replica\data3" --port 27020
    // --> all the replSet should have the same ID.
// mongosh --port 27018 (any port)

// rs.initiate({_id:"rs1", members:[{_id:0, host:"127.0.0.1:27018"}, {_id:1, host:"127.0.0.1:27019"}, {_id:2, host:"127.0.0.1:27020"}]})        // in real scenario there will be IP address rather than port no.

// re.config()

// rs.status()

// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"

// use mytestdb -> use this to check if this is present in all the replica sets

    // --> check this in all this...
// mongosh --port 27018
// mongosh --port 27019
// mongosh --port 27020

// Shutdown primary server and the primary will be automatically changed to one of the other two servers
// Go to primary 270xx
// sse admin
// db.shutdownServer() 
// ----------------------
// Now go to secondary servers 270xx or 270xx, and type show dbs…you would notice that one of the servers will be changed to primary automatically
// ----------------------------
// Open new tab and start previous primary 270xx again
// mongod -replSet rs1 -logpath d:\mongo-replica\data1\1.log --dbpath d:\mongo-replica\data1\ --port 270xx
// Open another tab and run mongosh. You will observe that it is now a secondary server.
// mongosh --port 270xx

