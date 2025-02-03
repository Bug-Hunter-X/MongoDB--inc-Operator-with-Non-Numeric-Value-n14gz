```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6515a7f84190d455b3282f90")},{$inc:{count:NaN}});
```