import React from 'react'

const RandomQuote = () => {

    const quotes = ["I think, therefore I am. ... ", "Ignorance is bliss.", "f men were perfectly virtuous, they wouldn't have friends. .."]
    const RandomQuote = Math.floor(Math.random()* quotes.length)
    const quote = quotes[RandomQuote]
  return (
    <div>
      {quote}

    </div>
  )
}

export default RandomQuote