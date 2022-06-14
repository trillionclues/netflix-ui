// select elements
const questionFaq = document.querySelectorAll('.question')

// loop over question sets
questionFaq.forEach(function (question) {
  const btn = document.querySelector('.question-btn')
  // console.log(btn)

  btn.addEventListener('click', function () {
    // console.log(question)

    questionFaq.forEach(function (item) {
      if (item != question) {
        item.classList.remove('show-text')
      }
    })

    question.classList.toggle('show-text')
  })
})
