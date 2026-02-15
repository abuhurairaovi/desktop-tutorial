document.getElementById("submitBtn").addEventListener("click", function () {
    // get student data
    const studentName = document.getElementById("studentName").value;
    const courseCode = document.getElementById("courseCode").value;
    const courseTitle = document.getElementById("courseTitle").value;
    const studentSection = document.getElementById("studentSection").value;
    const studentId = document.getElementById("studentId").value;
    const studentProgram = document.getElementById("studentProgram").value;
    const universityName = document.getElementById("universityName").value;

    // get teacher data
    const teacherName = document.getElementById("teacherName").value;
    const versityDept = document.getElementById("versityDept").value;

    // fill print lists
    document.getElementById("printStudentList").innerHTML = `
        <li>Name: ${studentName}</li>
        <li>Course Code: ${courseCode}</li>
        <li>Course Title: ${courseTitle}</li>
        <li>Section: ${studentSection}</li>
        <li>ID: ${studentId}</li>
        <li>Program: ${studentProgram}</li>
        <li>University: ${universityName}</li>
    `;

    document.getElementById("printTeacherList").innerHTML = `
        <li>Name: ${teacherName}</li>
        <li>Department: ${versityDept}</li>
    `;

    window.print();
});  
