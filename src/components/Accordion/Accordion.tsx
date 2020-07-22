import React, { useState, useEffect } from "react"
import RichText from "../RichText"
import Heading from "../Heading"
import {
  StyledAccordion,
  StyledAccordionToggle,
  StyledAccordionMain,
  StyledAccordionSection,
  StyledAccordionContent,
  StyledAccordionTitleWrapper,
  StyledAccordionTitle,
} from "./AccordionStyles"

type FAQObject = {
  class_faq_answer: {
    html: string
  }
  class_faq_question: {
    text: string
  }
}
export interface AccordionProps {
  children: [FAQObject]
}

const Accordion = ({ children }: AccordionProps) => {
  const [expandedSections, setExpandedSections] = useState({})
  const [expandAll, setExpandAll] = useState(false)

  useEffect(() => {
    let mapSectionStates = (sectionStates, sectionItem) => {
      // sectionState is accumulator of reduced values,
      // section Item is the current value being processed
      if (!sectionStates[sectionItem.class_faq_question.text]) {
        // all sections collapsed by default
        sectionStates[sectionItem.class_faq_question.text] = false
      }
      return sectionStates
    }
    // turn array of objects into single true/false object {sectiontitle1: true, sectiontitle2: false, ... etc.}
    let sectionStates = children.reduce(mapSectionStates)
    setExpandedSections(sectionStates)
  }, [])

  const handleClick = index => {
    setExpandedSections({
      ...expandedSections,
      [index]: !expandedSections[index],
    })
  }

  const toggleAll = () => {
    let updatedSections = {}
    let reducer = (sectionStates, sectionIndex) => {
      sectionStates[sectionIndex.class_faq_question.text] = !expandAll
      return sectionStates
    }
    children.reduce(reducer, updatedSections)
    setExpandedSections(updatedSections)
    setExpandAll(!expandAll)
  }

  return (
    <StyledAccordion>
      <Heading element="h2">FAQs</Heading>
      <StyledAccordionToggle
        onClick={toggleAll}
        className={expandAll ? "pressed-in" : "popped-out"}
      >
        {expandAll === true ? "Collapse All" : "Expand All"}
      </StyledAccordionToggle>
      <StyledAccordionMain>
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
      </StyledAccordionMain>
    </StyledAccordion>
  )
}

const AccordionSection = ({ title, children, expanded, onClick }) => {
  return (
    <StyledAccordionSection expanded={expanded}>
      <AccordionTitle expanded={expanded} onClick={onClick} title={title} />
      {expanded && <AccordionContent>{children}</AccordionContent>}
    </StyledAccordionSection>
  )
}

const AccordionContent = ({ children }) => {
  return (
    <StyledAccordionContent>
      <RichText content={children}></RichText>
    </StyledAccordionContent>
  )
}

const AccordionTitle = ({ expanded, onClick, title }) => {
  return (
    <StyledAccordionTitleWrapper expanded={expanded}>
      <StyledAccordionTitle expanded={expanded}>
        {title}{" "}
        <button aria-expanded={expanded} onClick={onClick}>
          <span className="visually-hidden">Expand Section Content</span>
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
      </StyledAccordionTitle>
    </StyledAccordionTitleWrapper>
  )
}

export default Accordion
