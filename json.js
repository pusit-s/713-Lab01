const student = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    grade: 3.99,
};

const gradeChecker = (student) => {
    if (student.grade > 2) {
        return JSON.stringify(student);
    } else {
        return 'คุณ ' + student.name + ' พ้นสภาพ';
    }
}

console.log(gradeChecker(student));