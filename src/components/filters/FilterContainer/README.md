# Filters

## Usage

- The filters provide options for user's to narrow down what classes are most appropriate for them, based on who the class is aimed at (Japanese Teacher / Japanese Student), the location of the classes (In Edinburgh / Online), and the class format (Intensive / Regular / Drop-in)

## States


| Filter Group Pill (Neutral)    |  Filter Group Pill (Hover)  | Filter Group Pill (Focus) |
| ------------- |-------------| -----|
| ![alt text](https://i.ibb.co/9pL3XPx/Screenshot-2020-06-06-at-13-34-10.png "Filter Group Pill, Neutral")     | ![alt text](https://i.ibb.co/tMfMVZp/Screenshot-2020-06-06-at-14-55-23.png "Filter Group Pill, Hover") |![alt text](https://i.ibb.co/sRMd0hQ/Screenshot-2020-06-06-at-14-56-42.png "Filter Group Pill, Focus") | 

| Filter Results (Neutral)    |  Filter Results (Filtered)  | Filter Results (Filtered w/ reset hovered) | Filter Results (Filtered w/ reset focused) | Filter Results (empty state)
| ------------- |-------------| -----| -----| -----|
| ![alt text](https://i.ibb.co/ykw8h3G/Screenshot-2020-06-06-at-14-58-05.png "Filter Results, Neutral")     | ![alt text](https://i.ibb.co/SvHjXkD/Screenshot-2020-06-06-at-15-10-32.png "Filter Results, filtered") |![alt text](https://i.ibb.co/gM17Hww/Screenshot-2020-06-06-at-15-11-57.png "Filter Results, filtered with reset hovered") | ![alt text](https://i.ibb.co/rfPGsJn/Screenshot-2020-06-06-at-15-05-37.png "Filter Results, filtered with reset focused") | ![alt text](https://i.ibb.co/WygJvJL/Screenshot-2020-06-06-at-15-06-05.png "Filter Results, empty state") | 


## Interactions

Interacting with a pill will update how many class results are shown below.  Interactions are possible through touch, click, or space and enter. 

## Content 

Class Cards contain class location, class title, class frequency, and the next class date. This data is pulled in from the Prismic CMS. 

Filter options are currently pulled in from /data/filters.json. This will eventually be moved to CMS. However, need to consider that new filters will also need to added to the filter context, as this stores the button state.

## Customisation

## Error Handling / Prop Validation

## Browser / OS Compatibility 

## Responsiveness 

## A11y 

### Assistive Affordance
- Visually hidden ```<h2>``` tags are added to demarcate page content as 'Class Filters' and 'Filter Results'
- The filter is a ```<form>```, within which each category has a ```<fieldset>``` containing a ```<legend>```
- Each filter group option is a ```<button>```, leveraging default keyboard interactivity on space and enter
- Filter group options are grouped as individual  ```<li>``` elements within a wrapping ```<ul>```, to allow for shortcuts and enumeration 
- Filter group option state is indicated via a ```<aria-pressed>``` value. The label text does not change. 
- Filter results ("# classes showing") are announced via an ```aria-live=polite``` region with a ```role=status``` .

### Visual Affordance
- A drop shadow, is added to each filter group option to suggest it is clickable. Hover & focus states reinforce this. 

## Future work
- Provide visually-hidden ```<legend>`` text provides with a succinct & clarified description (i.e. "Student Type" vs "I am...")
- Improve live region reading of plural class ("class" + "es")