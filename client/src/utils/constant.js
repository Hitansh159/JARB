export const BASE_INFO = { "name": "", "githubId": "", "linkedinId": "", "emailId": "" };
export const DEFAULT_SECTIONS = [
    {
        "title": "Experience",
        "cards": [

            {
                "fields": { "company Name": "", "company Location": "", "company Role": "", "company Duration": "" },
                "description": "",
                "selected" : false
            }
        ]
    },
    {
        "title": "Project",
        "cards": [
            {
                "fields": { "project name": "", "stack": "", "Duration/start date-end date": "" },
                "description": "",
                "selected" : false
            }
        ]
    },
    {
        "title": "Education",
        "cards": [
            {
                "fields": { "Institude Name": "", "Institude Location": "", "Degree": "", "Start Date-end date": "" },
                "description": "",
                "selected" : false
            },
            {
                "fields": { "Institude Name": "", "Institude Location": "", "Degree": "", "Start Date-end date": "" },
                "description": "",
                "selected" : false
            }
        ]
    }
];
const EXPIRENCE = ["company Name", "company Location", "company Role", "company Duration"];
const PROJECT = ["project name", "stack", "Duration/start date-end date"];
const EDUCATION = ["Institude Name", "Institude Location", "Role", "Start Date-end date"];