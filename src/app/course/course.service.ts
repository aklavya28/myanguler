export class CourseService {
    getCourses(){
        return ["angular", "javascript", "sql"]
    }
    getStudents(){
        return [{
            name: "hitesh",
            class: "12th",
            rollno: "20"
        },
        {
            name: "Rahul",
            class: "12th",
            rollno: "21"
        },
        {
            name: "Rakesh",
            class: "12th",
            rollno: "22"
        }


    ]
    }
    getlike(){
        return true
    }
}
