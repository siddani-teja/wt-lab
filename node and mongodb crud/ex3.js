var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url="mongodb://localhost:27017/"
MongoClient.connect(url,function(error,databases)
{
if(error)
{ 
    throw error;

} 
var nodetestDB = databases.db("navigcollection"); //here var 
customersCollection = nodetestDB.collection("pract");
var customer = {_id:112, name:"Santosh Kumar" , address: "B-222, Sector19, NOIDA", orderdata:"Arrow Shirt"};
customersCollection.insertOne(customer, function(error, response) 
{ if (error) 
    {
throw error; 
}
console.log("1 document inserted"); databases.close();
});
});