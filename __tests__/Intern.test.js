
const { expect } = require("expect");
const Intern = require("../lib/Intern");


test("Can we add the name, id, email, github, and functions to Intern Class", ()=> {
    let testName = "Tom";
    let testID = "3";
    let testEmail = "Tom@gmail.com";
    let testSchool = "College";
    let testGetName = "Tom";
    let testGetID = "3";
    let testGetRole = "Intern";
    let testGetSchool = "College";
    let testIntern = new Intern(testName, testID, testEmail, testSchool, testGetName, testGetID, testGetRole, testGetSchool);
    
    expect(testIntern.name).toBe(testName) 
    expect(testIntern.id).toBe(testID)
    expect(testIntern.email).toBe(testEmail)    
    expect(testIntern.school).toBe(testSchool)
    expect(testIntern.getName()).toBe(testGetName)
    expect(testIntern.getId()).toBe(testGetID)
    expect(testIntern.getRole()).toBe(testGetRole)
    expect(testIntern.getSchool()).toBe(testGetSchool)
})

