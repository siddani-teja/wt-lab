var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var url ='mongodb://localhost:27017/';
MongoClient.connect(url,function(error,databases)
{ 
if(error)
{
    throw error; 
 }
var nodtst=databases.db('navigcollection');
var deleteQuery={name:'Lucky Gautam'};
nodtst.collection("pract").deleteOne(deleteQuery,function(error,response)
{ 
if(error){
    throw error;
}
console.log(" 1 document deleted......"); 
databases.close(); 
})

});
