# Accordion

## Usage

Accordions should be used when it can be reasonably expected that the content contained will be of selective importance to the user. By hiding the content, and allowing the user to view it at their discretion, the user is able to focus more efficiently on the topics that most interest them. 

Note: this accordion should not be used inside a form in its current state. If use inside a form is required, ```type='button'`` should be added to the toggle button. 

## States

**Individual Accordion Section & Button**

| Neutral (Collapsed)        | Neutral (Expanded)          | Hover (Collapsed)  | Hover (Expanded) | Focus (Collapsed) | Focus (Expanded) |
| ------------- |-------------| -----| --- | --- | --- |
| ![alt text](https://i.ibb.co/BNhW7bm/Screenshot-2020-06-05-at-13-35-54.png "Neutral (Collapsed)")     | ![alt text](https://i.ibb.co/m9C18KK/Screenshot-2020-06-05-at-13-36-01.png "Neutral (Expanded)") |![alt text](https://i.ibb.co/r3YvMpv/Screenshot-2020-06-05-at-13-35-20.png "Hover (Collapsed)") | ![alt text](https://i.ibb.co/0Gb3NWW/Screenshot-2020-06-05-at-13-35-13.png "Hover (Expanded)")| ![alt text](https://i.ibb.co/dfgnCqs/Screenshot-2020-06-05-at-13-35-33.png "Hover (Collapsed)") | ![alt text](https://i.ibb.co/THz2dpm/Screenshot-2020-06-05-at-13-35-39.png "Hover (Collapsed)") |


**Expand All / Collapse All Toggle  Button**

| Neutral (Collapsed)        | Neutral (Expanded)          | Hover (Collapsed & Expanded)  |  Focus (Collapsed & Expanded) | 
| ------------- |-------------| -----| --- |
| ![alt text](https://i.ibb.co/NmMb15C/Screenshot-2020-06-05-at-13-36-08.png "Neutral (Collapsed)")     | ![alt text](https://i.ibb.co/GC3zfK4/Screenshot-2020-06-05-at-13-36-22.png "Neutral (Expanded)") |![alt text](https://i.ibb.co/K72dT3b/Screenshot-2020-06-05-at-13-30-17.png "Hover (Collapsed & Expanded)") | ![alt text](https://i.ibb.co/hmxzqx1/Screenshot-2020-06-05-at-13-30-35.png "Hover (Collapsed & Expanded)")


## Interactions

- When a user interacts with the button in a collapsed accordion-section title, the accordion content should slide into view directly below the title. Interactions that trigger this are those default to the HTML button element - click, space, enter.  
- When a user clicks the button in an expanded accordion-section title, the accordion content should slide out of view, towards the title. Interactions that trigger this are those default to the HTML button element - click, space, enter. 
- Multiple sections can be open at the same time. Interactions to expand an individual section will not automatically close any currently expanded sections.
- When a user interacts with the "expand all" button above the accordion, all accordion content (irregardless of previous collapsed / expanded state) will slide into view. The text of the "expand all" button will be updated to "collapse all". Interactions that trigger this are those default to the HTML button element - click, space, enter. 
- When a user interacts with the "collapse all" button above the accordion, all accordion content (irregardless of previous collapsed / expanded state) will slide into view. The text of the "expand all" button will be updated to "collapse all". Interactions that trigger this are those default to the HTML button element - click, space, enter. 


## Content 

The accordions rely on class-specific FAQs, entered into the Prismic Content Management System. The title for each accordion section is limited to one-line in the CMS, and received in the codebase as a string (the heading level is handled in the codebase). The content for each accordion section is entered as rich text, without type restrictions (i.e. it could include a list, an image, a link, etc.)

## Customisation

Colours and font faces can be customised. Heading levels should not be customised unless there is a convincingly good reason why the accordion would be deeply nested within other content. The expected levels would be H1 [Page title] > H2 [Overall Accordion Title - i.e. 'FAQs'] > H3 [Individual accordion-section titles].

## Error Handling / Prop Validation

## Browser / OS Compatibility 

## Responsiveness 

## A11y 

### Assistive Affordance
- Accordion interactions are triggered via a button, rather than an onClick event. This ensures the affordance of the accordion is communicated to screen readers, and the accordion can be interacted with via the keyboard. 

- The button is a child of the heading element, such that when a screen reader user focuses on the button, the heading is also announced (i.e. a variation of "Example Accordion-section Title, button, heading level 2")

- The [Expand All / Collapse All] is a toggle button who's label content is more indicative of it's meaning than the state. ('Expand All, unpressed' does not communicate 'Collapse All, pressed'). As such, the label is updated, not the state. The trade-off is that the button needs to be refocused for a screen reader to pick up the label change, rather than it being announced as per a state change. However, it is not likely that the immediate user action after 'expanding all' would be to 'collapse all' - it is more likely the user would traverse onward through the expanded FAQs. (needs testing to verify.) 

### Visual Affordance
- Hover & focus states provide visual affordance for element interactivity

- Colours & changing icons are used to provide additional visual distinction between expanded & collapsed states.

- An SVG icon is added to indicate the interaction available on the button. Recognisable patterns are utilised to increase quality of visual distinction (plus icon to expand, minus icon to collapse). The SVG is labelled with ```aria=hidden='true'``` and ```focusable='false'``` , to prevent it being announced by screen-readers and causing confusion. The focus state is re-added to simulate focus on the SVG when the button is being focused. 


## Future work
- Visual affordance - would be nice if clicking anywhere in the title area triggered the interaction. 
- Add visually hidden span to button? (test with screen reader)
- Currently multiple sections can be opened at once - should a click on an individual section collapse anything currently expanded? 
- Impose max content width 