import React, { useState } from 'react'
import Result from './Result'

export function Search() {
  let paragraphs = ['Lorem ipsum dolor sit amet.', 'my name is hamada', 'i need vacation', 'help me please']
  let [userInput, setUserInput] = useState(null)
  let [founded, setFounded] = useState()
  let [showParagraph, setShowParagraph] = useState(true);
  let [filteredParagraphs, setFilteredParagraphs] = useState(paragraphs);

  let getUserInput = (e) => {
    setFounded(null)
    setUserInput(e.target.value)
    console.log(userInput)

    let notmatched = true;
    paragraphs.forEach((content) => {
      if (content.includes(userInput)) {
        notmatched = false;
        setFounded(content);
      }
    });
    if (notmatched) {
      setFounded("Not Founded")
    }

  }


  return (
    <div>
      <input type="text" placeholder="Enter word to search for" onInput={getUserInput} />
      {showParagraph && (
        <div >
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      )}
      <Result founded={founded} />

    </div>

  )
}
