# ClassCard

## Usage

- The class card is used to preview information about a class, and act as a link to the respective class pages, where the user can find more detailed information. 

## States

| Neutral    |  Hover  | Focus |
| ------------- |-------------| -----|
| ![alt text](https://i.ibb.co/3TjyWcx/Screenshot-2020-06-05-at-16-52-35.png "Neutral")     | ![alt text](https://i.ibb.co/fngH7fV/Screenshot-2020-06-05-at-16-52-47.png "Hover") |![alt text](https://i.ibb.co/804yzk0/Screenshot-2020-06-05-at-16-53-38.png "Focus") | 


## Interactions

Interacting with the class card will take the user to the respective class page. Touch & click interactions are triggered anywhere on the card. Keyboard interactions are triggered via the 'enter' key when the class card title (within the tab order) is focused.

## Content 

Class Cards contain class location, class title, class frequency, and the next class date. This data is pulled in from the Prismic CMS. 

## Customisation

## Error Handling / Prop Validation

## Browser / OS Compatibility 

## Responsiveness 

## A11y 

### Assistive Affordance
- Cards are <li> elements, within a <ul>. This provides assistive technologies with shortcuts, and feedback on the number of list items. 
- Each card has an ```<h2>``` heading 
- The link to the card page is nested within the ```<h2>``` heading, so as to communicate meaningful link text to assistive technology users.
- Images are considered decorative, and provided an empty ```alt``` attribute
- 
### Visual Affordance
- The entire card is interactive for touch and click events. Drop shadow around the card and pointer cursor are utilised to communicate this interactivity 
- Whilst the link itself is on the ```<h2>``` tag, an onClick method is assigned to the card wrapper. This method calls the link within the ```<h2>``` tag. 

## Future work
- improve aesthetic / visual distinction of hover & focus states
- add more information (requires evaluating quality and cons)