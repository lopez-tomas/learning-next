//import React from 'react'

interface Props {
  prev: Page;
  next: Page;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination = ({ prev, next, onPrev, onNext }: Props) => {
  const handlePrev = () => {
    onPrev();
  }

  const handleNext = () => {
    onNext();
  }

  return (
    <nav>
      <ul>
        {
          prev &&
          <li>
            <button onClick={handlePrev}>Previous</button>
          </li>
        }
        {
          next &&
          <li>
            <button onClick={handleNext}>Next</button>
          </li>
        }
      </ul>
    </nav>
  )
}

export default Pagination
