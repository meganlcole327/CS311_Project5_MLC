// DOM
document.addEventListener("DOMContentLoaded", () => {
    // Select necessary DOM elements
    const form = document.getElementById("mad-lib-form");
    const generateBtn = document.getElementById("generate-btn");
    const resetBtn = form.querySelector("button[type='reset']");
    const storyDiv = document.createElement("div");

    // Add a container for the generated story
    storyDiv.id = "mad-lib-story";
    storyDiv.style.display = "none"; // Hidden by default
    form.parentElement.appendChild(storyDiv);

    // Generate the Mad Lib story
    const generateMadLib = () => {
        // Get user input values
        const words = Array.from(form.elements).reduce((acc, input) => {
            if (input.type === "text") {
                acc.push(input.value.trim());
            }
            return acc;
        }, []);

        // Check for null fields
        if (words.some(word => word === "")) {
            alert("Please fill out all fields before submitting!");
            return;
        }

        // Generate the story
        const story = `
            Every year, I make ${words[0]} with my ${words[1]} at Christmas time.
            It is a ${words[2]} activity that always turns into an adventure. 
            ${words[3]} tends to be ${words[4]} and ${words[5]} while we are baking.
            Last year, their job was to mix the ${words[6]} and ${words[7]} in a 
            bowl until it was fluffy. Then, they were supposed to add a cup of ${words[8]} 
            and a tablespoon of ${words[9]}. Instead, they forgot the ${words[10]} baking 
            powder and the cookies were ruined! That is why we didn't have cookies for
            ${words[11]} when they came down our chimney last year.
        `;

        // Display the story
        storyDiv.innerHTML = `<h3>Your Mad Lib Story:</h3><p>${story}</p>`;
        storyDiv.style.display = "block";
        form.style.display = "none";
    };

    // Submit Button
    generateBtn.addEventListener("click", generateMadLib);

    // Reset Button
    resetBtn.addEventListener("click", () => {
        
        // Reset form and hide the story
        storyDiv.style.display = "none";
        storyDiv.innerHTML = "";
        form.style.display = "block";
    });
});
