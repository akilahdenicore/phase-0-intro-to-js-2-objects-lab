//assign employee variable as an object with name and streetAddress keys

//initialize object :
const employee = {   
    name: 'cora',
    streetAddress: '234 Turtle Drive,'
 };
 //return a new object without mutating employee object with spread operator
 //new object has updated value for key passed in
 function updateEmployeeWithKeyAndValue(object, key, value){
    const newObject = {...employee};
    newObject[key] = value; //desired change/addition to employee Object
    return newObject
 }
 //destructively update object, make changes directly to original object and return new value
  
 function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
  
    employee[key] = value;  //update value with key
    return employee         //return updated object
 }
  
 //delete property with key from employee object
 //nondestructive -> return new object
  
 function deleteFromEmployeeByKey(object, key, value){
    return {
        ...employee,
        [key]: value,
    };
 }
  
 //destructively delete from employee object with key
  
 function destructivelyDeleteFromEmployeeByKey(object, key, value){
    delete employee[key]   //delete object key
    return employee        //
 }
 