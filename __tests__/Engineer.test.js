
const { expect } = require("expect");
const Engineer = require("../lib/Engineer");


test("Can we add the name, id, email, github, and functions to Engineer Class", ()=> {
    let testName = "Tom";
    let testID = "3";
    let testEmail = "Tom@gmail.com";
    let testGithub = "Tom@github.com";
    let testGetName = "Tom";
    let testGetID = "3";
    let testGetRole = "Engineer";
    let testGetGithub = "Tom@github.com";
    let testEngineer = new Engineer(testName, testID, testEmail, testGithub, testGetName, testGetID, testGetRole, testGetGithub);
    
    expect(testEngineer.name).toBe(testName) 
    expect(testEngineer.id).toBe(testID)
    expect(testEngineer.email).toBe(testEmail)    
    expect(testEngineer.github).toBe(testGithub)
    expect(testEngineer.getName()).toBe(testGetName)
    expect(testEngineer.getId()).toBe(testGetID)
    expect(testEngineer.getRole()).toBe(testGetRole)
    expect(testEngineer.getGithub()).toBe(testGetGithub)
})

