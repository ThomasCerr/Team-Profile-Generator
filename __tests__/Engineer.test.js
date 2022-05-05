
const Engineer = require("../lib/Engineer");


test("Can we add the name to Engineer Class", ()=> {
    let testName = "Tom";
    let testEngineer = new Engineer(testName);
    
    expect(testEngineer.name).toBe(testName)  
})
