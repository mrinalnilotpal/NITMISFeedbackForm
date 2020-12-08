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
