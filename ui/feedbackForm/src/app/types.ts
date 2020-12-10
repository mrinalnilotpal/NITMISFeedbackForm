export interface CourseData {
    course_id: string;
    course_name: string;
    fac_id: string;
    fac_name: string;
    type: "theory" | "lab";
}

export interface FeedbackData {
    "course_id": string;
    "fac_id": string;
    "feedback": number[];
    "comments": string;
}

export interface ResponseData {
    "detail": any;
}

export interface GetCoursesData {
    "course_id": string;
    "fac_id": string;
    "course": string;
    "type": string;
}

export interface DefaulterData {
    "roll_no": string;
    "name": string;
}

export interface FacultyData {
    "fac_id": string;
    "fac_name": string;
}
export interface CoursesData {
    "course_id": string,
    "course_name": string,
    "type": string,
    "faculty": FacultyData[] 
}

