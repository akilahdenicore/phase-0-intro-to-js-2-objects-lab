const employee = {
    name: "moya Dnicore",
    streetAddress: "111 Bean Creek Road",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};

    newObj[key] = value;

    return newObj;
} 

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    }
};

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key]
    return employee;
}