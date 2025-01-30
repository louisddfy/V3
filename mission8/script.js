document.addEventListener("DOMContentLoaded", () => {
    const exercises = [
        {
            title: "Addition de deux nombres",
            description: "Créez une fonction qui retourne la somme de deux nombres.",
            solution: "function addition(a, b) { return a + b; }"
        },
        {
            title: "Factorielle d'un nombre",
            description: "Créez une fonction qui retourne la factorielle d'un nombre donné.",
            solution: "function factorielle(n) { return n <= 1 ? 1 : n * factorielle(n - 1); }"
        },
        {
            title: "Afficher Hello World en Java",
            description: "Écrivez un programme Java qui affiche 'Hello World'.",
            solution: "public class HelloWorld { public static void main(String[] args) { System.out.println(\"Hello World\"); } }"
        }
    ];

    const exerciseList = document.getElementById("exercise-list");
    const exerciseDetail = document.getElementById("exercise-detail");
    const exerciseTitle = document.getElementById("exercise-title");
    const exerciseDescription = document.getElementById("exercise-description");
    const exerciseSolution = document.getElementById("exercise-solution");
    const showSolutionButton = document.getElementById("show-solution");
    const executeExerciseButton = document.getElementById("execute-exercise");
    const userInput = document.getElementById("user-input");
    const exerciseResult = document.getElementById("exercise-result");
    const showCodeButton = document.getElementById("show-code");

    exercises.forEach((exercise) => {
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
        const input = userInput.value;
        if (input) {
            exerciseResult.textContent = `Votre entrée: ${input}`;
        } else {
            exerciseResult.textContent = "Veuillez entrer une valeur";
        }
    });

    showCodeButton.addEventListener("click", () => {
        exerciseSolution.style.display = "block";
    });
});
