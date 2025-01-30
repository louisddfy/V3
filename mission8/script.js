document.addEventListener("DOMContentLoaded", () => {
    const exercises = [
        {
            title: "Addition de deux nombres",
            description: "Créez une fonction qui retourne la somme de deux nombres.",
            solution: "function addition(a, b) { return a + b; }"
        }
    ];

    const exerciseList = document.getElementById("exercise-list");
    const exerciseDetail = document.getElementById("exercise-detail");
    const exerciseTitle = document.getElementById("exercise-title");
    const exerciseDescription = document.getElementById("exercise-description");
    const exerciseSolution = document.getElementById("exercise-solution");
    const showSolutionButton = document.getElementById("show-solution");
    const executeExerciseButton = document.getElementById("execute-exercise");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const exerciseResult = document.getElementById("exercise-result");

    exercises.forEach((exercise, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = exercise.title;
        listItem.addEventListener("click", () => {
            exerciseTitle.textContent = exercise.title;
            exerciseDescription.textContent = exercise.description;
            exerciseSolution.textContent = exercise.solution;
            exerciseDetail.style.display = "block";
        });
        exerciseList.appendChild(listItem);
    });

    showSolutionButton.addEventListener("click", () => {
        exerciseSolution.style.display = "block";
    });

    executeExerciseButton.addEventListener("click", () => {
        const a = parseFloat(input1.value);
        const b = parseFloat(input2.value);
        if (!isNaN(a) && !isNaN(b)) {
            exerciseResult.textContent = a + b;
        } else {
            exerciseResult.textContent = "Veuillez entrer des nombres valides";
        }
    });
});
