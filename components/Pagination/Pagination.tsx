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
        <li className="Pagination-prev">
          <button className={`${!prev ? 'disabled' : ''}`} onClick={handlePrev} disabled={!prev ? true : false}>Previous</button>
        </li>
        <li className="Pagination-next">
          <button className={`${!next ? 'disabled' : ''}`} onClick={handleNext} disabled={!next ? true : false}>Next</button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
