
const { expect } = require("expect");
const Manager = require("../lib/Manager");


test("Can we add the name, id, email, github, and functions to Manager Class", ()=> {
    let testName = "Tom";
    let testID = "3";
    let testEmail = "Tom@gmail.com";
    let testOfficeNumber = "5";
    let testGetName = "Tom";
    let testGetID = "3";
    let testGetRole = "Manager";
    let testGetOfficeNumber = "5";
    let testManager = new Manager(testName, testID, testEmail, testOfficeNumber, testGetName, testGetID, testGetRole, testGetOfficeNumber);
    
    expect(testManager.name).toBe(testName) 
    expect(testManager.id).toBe(testID)
    expect(testManager.email).toBe(testEmail)    
    expect(testManager.officeNumber).toBe(testOfficeNumber)
    expect(testManager.getName()).toBe(testGetName)
    expect(testManager.getId()).toBe(testGetID)
    expect(testManager.getRole()).toBe(testGetRole)
    expect(testManager.getOfficeNumber()).toBe(testGetOfficeNumber)
})

