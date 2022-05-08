
const { expect } = require("expect");
const Employee = require("../lib/Employee");


test("Can we add the name, id, email, github, and functions to Employee Class", ()=> {
    let testName = "Tom";
    let testID = "3";
    let testEmail = "Tom@gmail.com";
    let testGetName = "Tom";
    let testGetID = "3";
    let testGetRole = "Employee";
   
    let testEmployee = new Employee(testName, testID, testEmail,  testGetName, testGetID, testGetRole);
    
    expect(testEmployee.name).toBe(testName) 
    expect(testEmployee.id).toBe(testID)
    expect(testEmployee.email).toBe(testEmail)    
    expect(testEmployee.getName()).toBe(testGetName)
    expect(testEmployee.getId()).toBe(testGetID)
    expect(testEmployee.getRole()).toBe(testGetRole)
   
})

