document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "n8EyKaqyzclwKOGRZhUKrA==33iTgW0O8IM1Vy8F";
    const apiUrl = "https://api.api-ninjas.com/v1/trivia";
  
    const categorySelect = document.getElementById("category");
    const searchBtn = document.getElementById("searchBtn");
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");
  
    searchBtn.addEventListener("click", () => {
      const selectedCategory = categorySelect.value;
      fetchTrivia(selectedCategory);
    });
  
    function fetchTrivia(category) {
      let url = apiUrl;
      if (category) {
        url += `?category=${category}`;
      }
  
      fetch(url, {
        headers: {
          "X-Api-Key": apiKey,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const trivia = data[0];
            questionElement.textContent = `Question: ${trivia.question}`;
            answerElement.textContent = `Answer: ${trivia.answer}`;
          } else {
            questionElement.textContent = "No trivia found for the selected category.";
            answerElement.textContent = "";
          }
        })
        .catch((error) => {
          console.error("Error fetching trivia:", error);
        });
    }
  });
  