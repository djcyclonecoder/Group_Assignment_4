// setup stuff
const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

// our designated port
const PORT = 1150;

// the listen app on our chosen port
app.listen(
    PORT,
    () => console.log(`It's STILL STILL alive on http://localhost:${PORT}`)
  )

// our json 'User' object with properties defined
  let User = {
    username: "Finky Tableaux",
    password: "1a2s3d4f",
    email: "finky.tableaux@example.com",
    courses: {
        course1: {
            courseID: "CMSC 4455",
            courseName: "Intro to Sinus Infections",
            startDate: "08/24/23",
            endDate: "12/17/23",
        },
        course2: {
            courseID: "CMSC 4466",
            courseName: "Intro to Health Inspections",
            startDate: "8/25/23",
            endDate: "12/18/23",
        },
        course3: {
            courseID: "CMSC 4477",
            courseName: "Intro to Grammatical Interjections",
            startDate: "8/26/23",
            endDate: "12/17/23",
        }
    }
}
