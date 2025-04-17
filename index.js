// Write your solution in this file!
const employee = {
    name: "Bipin Chaudhary",
    streetAddress: "Merlin Street"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;

}

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = { ...obj }
    delete newEmployee[key]
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj;

}

const updateEmployeeWithKeyAndValueNew = updateEmployeeWithKeyAndValue(employee, "Sandesh Lamsal", "Merlin Street")
const destructivelyUpdateEmployeeWithKeyAndValueNew = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway")
const deleteFromEmployeeByKeyNew = deleteFromEmployeeByKey(employee, "name")
const destructivelyDeleteFromEmployeeByKeyNew = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress")

console.log({ updateEmployeeWithKeyAndValueNew, destructivelyUpdateEmployeeWithKeyAndValueNew, deleteFromEmployeeByKeyNew, destructivelyDeleteFromEmployeeByKeyNew });
