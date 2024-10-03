// 1 - Fetch, load and Show catagories on html

// createCatagories
const categoryButtons = (data) => {
    const category_buttons = document.getElementById("category-buttons");
    data.forEach((categories) => {
        const button = document.createElement("button");
        button.textContent = categories.category;
        button.classList.add("btn", "bg-red-200", "mt-4", "font-bold");
        category_buttons.appendChild(button);
    });
};

// Create DisplayCatagories
const displayCatagories = async () => {
    try {
        const res = await fetch(
            "https://openapi.programming-hero.com/api/phero-tube/categories"
        );
        const data = await res.json();
        categoryButtons(data.categories);
    } catch (err) {
        console.error("Error: Data did not load seccessfully.\n", err);
    }
};

displayCatagories();
