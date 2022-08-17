const frontPage = document.querySelector('.front-page')
const btn = document.getElementById('btn')
const rate = document.querySelectorAll('.rate')
const thankYou = document.querySelector('.thank-you')

let ratingValue = ''

rate.forEach((rating) => {
  rating.addEventListener('click', (e) => {
    removeActive()
    ratingValue = e.target.innerText
    rating.classList.add('active')
  })
})

btn.addEventListener('click', () => {
  if (ratingValue !== '') {
    frontPage.style.display = 'none'
    thankYou.classList.add('active')
    thankYou.innerHTML += `
      <div class="status">
          <small> You selected ${ratingValue} out of 5</small>
        </div>
        <div class="thank-you-message">
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
    `
  }
})

function removeActive() {
  rate.forEach((rating) => {
    rating.classList.remove('active')
  })
}
