const userCorrects = ["C", "A", "C", "B", "D", "B", "D", "B", "D", "B"]

const form = document.querySelector(".quiz-form")
const finalResult = document.querySelector(".result")

let score = 0

const getUserQuestion = () => {
    const userQuestion = userCorrects.map((_,index) => form[`inputQuestion${index + 1}`].value)
    return userQuestion
}

const calculateFinalScore = (userQuestion) => {
    userQuestion.forEach((element, index) => {
        if(element === userCorrects[index]) {
            score += 10
        }

    })
}

const animateUserScore = () => {
    let counter = 0
    
    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }
        
        finalResult.querySelector("span").textContent = `${counter}%`
        counter++

    }, 10)
}

const showFinalUser = () => {
    finalResult.classList.remove("d-none")
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
    })
}

const resetUserScore = () => {
    score = 0
}

form.addEventListener("submit", event => {
    event.preventDefault()

    const userQuestion = getUserQuestion()

    resetUserScore()
    calculateFinalScore(userQuestion)
    showFinalUser()
    animateUserScore()
})