document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
            question: "Какого цвета бургер вы хотите?",
            answers: [
                { title: "Стандарт", url: "./image/burger.png" },
                { title: "Черный", url: "./image/burgerBlack.png" }
            ],
            type: "radio"
        },
        {
            question: "Какого цвета бургер вы хотите?1",
            answers: [
                { title: "Стандарт1", url: "./image/burger.png" },
                { title: "Черный1", url: "./image/burgerBlack.png" }
            ],
            type: "radio"
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [
                { title: "Помидор", url: "./image/tomato.png" },
                { title: "Огурец", url: "./image/cucumber.png" },
                { title: "Салат", url: "./image/salad.png" },
                { title: "Лук", url: "./image/onion.png" }
            ],
            type: "checkbox"
        },
        {
            question: "Добавить соус?",
            answers: [
                { title: "Чесночный", url: "./image/sauce1.png" },
                { title: "Томатный", url: "./image/sauce2.png" },
                { title: "Горчичный", url: "./image/sauce3.png" }
            ],
            type: "radio"
        }
    ];

    let numberQuestion = 0;

    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');

    btnOpenModal.addEventListener('click', () => {
        modalBlock.style.display = 'block'; 
        renderQuestions(numberQuestion); 
    });

    closeModal.addEventListener('click', () => {
        modalBlock.style.display = 'none'; 
    });

    const renderAnswers = (index) => {
        formAnswers.innerHTML = '';
        questions[index].answers.forEach((answer) => {
            const answerItem = document.createElement('div');
            answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
            answerItem.innerHTML = `
                <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
                <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src="${answer.url}" alt="${answer.title}">
                    <span>${answer.title}</span>
                </label>
            `;
            formAnswers.appendChild(answerItem);
        });
    };

    const renderQuestions = (indexQuestion) => {
        questionTitle.textContent = questions[indexQuestion].question;
        renderAnswers(indexQuestion);
        updateNavigationButtons();
    };

    const updateNavigationButtons = () => {
        prevButton.style.display = numberQuestion === 0 ? 'none' : 'inline-block';
        nextButton.style.display = numberQuestion === questions.length - 1 ? 'none' : 'inline-block';
    };

    nextButton.addEventListener('click', () => {
        if (numberQuestion < questions.length - 1) {
            numberQuestion++;
            renderQuestions(numberQuestion);
        }
    });

    prevButton.addEventListener('click', () => {
        if (numberQuestion > 0) {
            numberQuestion--;
            renderQuestions(numberQuestion);
        }
    });

    renderQuestions(numberQuestion);
});
