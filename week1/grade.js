// Step 1: Declare and initialize
let score = 85;

// Step 2: Function with switch
function getGrade(score) {
    switch (true) {
        case (score >= 90):
            console.log("Grade: A");
            break;

        case (score >= 75):
            console.log("Grade: B");
            break;

        case (score >= 60):
            console.log("Grade: C");
            break;

        case (score >= 50):
            console.log("Grade: D");
            break;

        default:
            console.log("Grade: F");
    }
}

// Step 3: Call function
getGrade(score);