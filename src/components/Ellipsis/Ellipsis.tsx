import React from "react"

export interface EllipsisProps {
  screenReaderText: string
}

const Ellipsis = ({ screenReaderText }) => {
  return (
    <>
      <span className="visually-hidden">{screenReaderText}</span>
      <span aria-hidden="true">...</span>
    </>
  )
}

export default Ellipsis
