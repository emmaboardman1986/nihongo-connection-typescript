# Navigation

## Usage

- For use navigation between site pages - not suitable for an application style menu

## States

### Mobile
#### Burger Button
| Neutral (Closed)    |  Focused (Closed)  | Neutral (Open) | Focused (Open) | 
| ------------- |-------------| -----|-----|
| ![alt text](https://i.ibb.co/TYZyFHc/Screenshot-2020-06-07-at-11-18-45.png "Neutral, closed")     | ![alt text](https://i.ibb.co/Z8GZDnz/Screenshot-2020-06-07-at-11-18-53.png "Focused, closed") |![alt text](https://i.ibb.co/DkcRwSk/Screenshot-2020-06-07-at-11-19-05.png "Neutral, open") | ![alt text](https://i.ibb.co/16wN9Sc/Screenshot-2020-06-07-at-11-19-00.png "Focused, open") | 


#### Menu Items
| Neutral (without sub-menu)  |  Focused (without sub-menu)  | Active (without sub-menu) | Neutral (with sub-menu) | Focused (with sub-menu) | Active (with sub-menu) | Neutral (sub-menu item) | Focused (sub-menu item) | Active (sub-menu item)
| ------------- |-------------| -----| -----| -----|-------------| -----| -----| -----|
| ![alt text](https://i.ibb.co/hWZvK76/Screenshot-2020-06-07-at-11-12-42.png "Neutral, without sub-menu")     | ![alt text](https://i.ibb.co/sFNgZqV/Screenshot-2020-06-07-at-11-12-52.png "Focused, without sub-menu") | [not implemented] | ![alt text](https://i.ibb.co/RDKw1Px/Screenshot-2020-06-07-at-11-12-59.png "Neutral, with sub-menu") | ![alt text](https://i.ibb.co/Lr5R9pK/Screenshot-2020-06-07-at-11-13-13.png "Focused, with sub-menu") |  [not implemented] |  ![alt text](https://i.ibb.co/FDkJHhF/Screenshot-2020-06-07-at-11-14-46.png "Neutral, sub-menu item") |  ![alt text](https://i.ibb.co/KxmhpXP/Screenshot-2020-06-07-at-11-15-09.png "Focused, sub-menu item") | [not implemented] |


## Interactions

- Interacting with the burger menu will reveal or hide the menu. Interaction can be achieved via touch, click, enter or space.
- Interacting with a link with no sub-menu will take the user to the associated page. Interaction can be achieved via touch, click, or enter.
- Interacting with a link with a sub-menu will toggle open the associated sub-menu. Interaction can be achieved via touch, click, or space.
- On desktop, interacting via click elsewhere on the page whilst a sub-menu is open will close the sub-menu. Multiple sub-menu's cannot be open at once, when interacting via click. This functionality is not yet implemented for keyboard interactions.  // not implemented fully

## A11y 

### Assistive Affordance
- The menu button is a ```<button>``` element. The functionality of the button is communicated screen reader users via a visually hidden span of `Site Navigation Menu`, and an ```aria-expanded``` attribute. 
- When the menu is not expanded, it's contents are removed from the DOM via ```display: none``` to ensure keyboard users are not forced to tab through unseen options.
- The presence of sub-menus is communicated to screen reader users via an ```aria-haspop``` attribute. The parent link is not a link itself, and serves as a toggle to expand / collapse the sub-menu. The toggle functionality is communicated via an ```aria-expanded``` attribute. 

### Visual Affordance
- Existing mental models (hamburger menu to indicate mobile menu, down arrows to indicate existing sub-menus) are leveraged to communicate functionality to sighted users. 

## Content 

Nav content is currently pulled from a nav.json file within the /data/ folder. This is a fragile setup - adding new pages will not add new links, nor will updated page titles etc. be reflected in the links without updating in both places. Nav structure needs to be moved into prismic, or be dynamically generated based on the active class uids pulled in from prismic. 

## Customisation

## Error Handling / Prop Validation

## Browser / OS Compatibility 

## Responsiveness 

## Future work
- Active menu item state 
- Widen focus state of menu items with sub-menus to encompass chevron
- Further a11y testing
- Open / hide sub-menus on outside enter keypress