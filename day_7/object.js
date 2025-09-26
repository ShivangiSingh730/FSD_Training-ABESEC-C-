const student={
  name:"xyz",
  course:"b.tech",
  section:"C",
  phoneNo:{
    
  }
}




// accessing obj properties
console.log(student.name);
console.log(student['name']);

let x='name';
console.log(student[x]);

function modifyStudent(obj)
{
    obj.name="ABC";
}
