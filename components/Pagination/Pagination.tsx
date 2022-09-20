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
    <nav className="Pagination">
      <ul>
        {
          prev &&
          <li className="Pagination-prev">
            <button onClick={handlePrev}>Previous</button>
          </li>
        }
        {
          next &&
          <li className="Pagination-next">
            <button onClick={handleNext}>Next</button>
          </li>
        }
      </ul>
    </nav>
  )
}

export default Pagination
