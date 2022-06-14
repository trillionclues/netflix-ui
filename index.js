// select elements
const questionFaq = document.querySelectorAll('.question')

// loop over question sets
questionFaq.forEach(function (question) {
  const btn = question.querySelector('.question-btn')
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

// by traversing the DOM
// const btns = document.querySelectorAll('.question-btn')

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (evt) {
//     const questionSelect = evt.currentTarget.parentElement.parentElement

//     questionSelect.classList.toggle('show-text')
//   })
// })
