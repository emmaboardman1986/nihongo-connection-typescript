import React, { useState, useEffect } from "react"
import styled from "styled-components"
import RichText from "../RichText"
import { AccordionMainStyles, AccordionToggleStyles, AccordionWrapperStyles, AccordionSectionWrapperStyles, AccordionContentWrapperStyles, AccordionTitleWrapperStyles, AccordionTitleContentStyles} from "./AccordionStyles"

const Accordion = ({ children }) => {
  const [expandedSections, setExpandedSections] = useState({})
  const [expandAll, setExpandAll] = useState(false)

  useEffect(() => {
    let availableSections = {}
    let reducer = (returnedObject, sectionIndex) => {
      if (!returnedObject[sectionIndex.class_faq_question.text]) {
        returnedObject[sectionIndex.class_faq_question.text] = false
      }
      return returnedObject
    }
    children.reduce(reducer, availableSections)
    setExpandedSections(availableSections)
  }, [])

  const handleClick = index => {
    setExpandedSections({
      ...expandedSections,
      [index]: !expandedSections[index],
    })
  }

  const toggleAll = () => {
    let updatedSections = {}
    let reducer = (returnedObject, sectionIndex) => {
      returnedObject[sectionIndex.class_faq_question.text] = !expandAll
      return returnedObject
    }
    children.reduce(reducer, updatedSections)
    setExpandedSections(updatedSections)
    setExpandAll(!expandAll)
  }

  return (
    <AccordionWrapper>
      <AccordionToggle
        role="switch"
        aria-pressed={expandAll}
        onClick={toggleAll}
        className={expandAll ? "pressed-in" : "popped-out"}
      >
        {expandAll === true ? "Collapse All" : "Expand All"}
      </AccordionToggle>
      <AccordionMain>
        {children.map((child, index) => (
          <AccordionSection
            key={index}
            title={child.class_faq_question.text}
            onClick={() => handleClick(child.class_faq_question.text)}
            expanded={expandedSections[child.class_faq_question.text]}
          >
            {child.class_faq_answer.html}
          </AccordionSection>
        ))}
      </AccordionMain>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div`
${AccordionWrapperStyles};`

const AccordionSection = ({ title, children, expanded, onClick }) => {
    return (
      <AccordionSectionWrapper expanded={expanded}>
        <AccordionTitle expanded={expanded} onClick={onClick} title={title} />
        {expanded && <AccordionContent>{children}</AccordionContent>}
      </AccordionSectionWrapper>
    )
  }
  
  const AccordionSectionWrapper = styled.div`
  ${AccordionSectionWrapperStyles};
  `

const AccordionContent = ({ children }) => {
    return <AccordionContentWrapper><RichText content={children}></RichText></AccordionContentWrapper>;
  };
  
  export const AccordionContentWrapper = styled.div`
  ${AccordionContentWrapperStyles};
  `;
  
  const AccordionTitle = ({ expanded, onClick, title }) => {
    return (
      <AccordionTitleWrapper expanded={expanded}>
        <AccordionTitleContent expanded={expanded}>
          {title}{" "}
          <button aria-expanded={expanded} onClick={onClick}>
            <svg
              aria-hidden="true"
              focusable="false"
              width="20"
              height="20"
              viewBox="0 0 10 10"
            >
              {!expanded && <rect height="8" width="2" y="1" x="4" />}
              <rect height="2" width="8" y="4" x="1" />
            </svg>
          </button>
        </AccordionTitleContent>
      </AccordionTitleWrapper>
    )
  }
  
  const AccordionTitleWrapper = styled.div`
    ${AccordionTitleWrapperStyles};
  `
  
  const AccordionTitleContent = styled.h3`
   ${AccordionTitleContentStyles};
  `

const AccordionMain = styled.div`
  ${AccordionMainStyles};
`

const AccordionToggle = styled.button`
  ${AccordionToggleStyles};
`

export default Accordion
