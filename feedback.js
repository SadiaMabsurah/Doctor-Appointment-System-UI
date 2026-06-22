let selectedRating = 0;

const stars = document.querySelectorAll(".stars i");

stars.forEach(star => {
    star.addEventListener("click", () => {
        selectedRating = star.getAttribute("data-value");

        stars.forEach(s => s.classList.remove("active"));

        for(let i = 0; i < selectedRating; i++){
            stars[i].classList.add("active");
        }
    });
});

function submitFeedback(){

const comment = document.getElementById("comment").value.trim();

if(selectedRating === 0){
    alert("Please give a rating ⭐");
    return;
}

if(comment === ""){
    alert("Please write a comment");
    return;
}

alert(
"Thank you for your feedback!\n\n" +
"Rating: " + selectedRating + " stars ⭐\n" +
"Comment: " + comment
);
}