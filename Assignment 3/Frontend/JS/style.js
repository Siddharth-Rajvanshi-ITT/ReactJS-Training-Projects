let getData = async () => {
  try {
    let res = await fetch("http://localhost:8484/faqs");

    if (!res.ok) {
      throw new Error("Response is not ok");
    }

    let data = await res.json();
    return data;
  } catch {
    console.log("Error fetching data");
  }
};

let res = getData();

res
  .then((response) => {
    let questionList = response.data;
    console.log(questionList);

    questionList.forEach((element) => {
      let container = document.querySelector(".faqs");

      let questionContainer = document.createElement("div");
      let question = document.createElement("h3");
      let icon = document.createElement("i");

      let answerContainer = document.createElement("div");
      let answer = document.createElement("p");

      question.textContent = element.question;
      answer.textContent = element.answer;

      questionContainer.classList.add("questions");
      question.classList.add("question-line");
      icon.classList.add("fa-solid", "fa-plus");

      answerContainer.classList.add("answers");

      answerContainer.classList.add("hide");

      questionContainer.append(question, icon);
      answerContainer.append(answer);

      container.append(questionContainer, answerContainer);

      icon.addEventListener("click", () => {
        if(answerContainer.classList.contains("hide"))
        {
            hideAllAns();
        }
        
        answerContainer.classList.toggle("hide");
      })

    });
  })
  .catch(() => {
    console.log("Error occured");
  });

  let hideAllAns = () => {
    let ansList = document.getElementsByClassName("answers");

    ansList = Array.from(ansList);

    ansList.forEach(element => {
        element.classList.add("hide");
    })
  }
