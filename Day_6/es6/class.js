// const student1 = {
//     RollNo: 23,
//     Name: "xyz",
//     Branch: "CSE-DS",
//     Section: "C"
// }

// const student2 = {
//     RollNo: 20,
//     Name: "abc",
//     Branch: "CSE-DS",
//     Section: "C"
// }

// console.log("Object student1: ", student1);
// console.log("Object student2: ", student2);

class Student {
    constructor(RollNo, Name, Branch, Section) {
        this.RollNo = RollNo;
        this.Name = Name;
        this.Branch = Branch;
        this.Section = Section;
    }
}

const student3 = new Student(5, "Abhishek", "CSE-DS", "C");
const student4 = new Student(26, "Aman", "CSE-DS", "C");
console.log("Object student3: ", student3);
console.log("Object student4: ", student4);