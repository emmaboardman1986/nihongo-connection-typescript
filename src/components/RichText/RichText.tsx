import React from "react"

export interface RichTextProps {
  element?: 'div' | 'section';
  content: string
}

const RichText = ({ element = 'div', content }) => {
  const Element = element;
  console.log(typeof content);
  return <Element 
  dangerouslySetInnerHTML={{ __html: content }}
  ></Element>
}


export default RichText