### Nihongo Connection Brochure Site

## Overview

A brochure site for online Japanese conversation classes. Class payment, booking, membership subscriptions, and resources are currently managed through a MemberVault account. In the future, this functionality would ideally be baked into the main site. However, the objective of the initial phase of this project is to create a brochure domain that educates visitors about the classes, and directs them to the MemberVault account to sign up. 

### Personal objectives:
- Gain a deeper understanding of best practice around writing reusable, maintainable, and accessible components. 
- Improve understanding of React & TypeScript

## Stack selection

#### Business Considerations:
- Club founder frequently iterates on her content, and requires a content management system that is easy to use. 
- A lot of users find the club via word-of-mouth, making robust SEO essential 

#### Personal Considerations**
My goals for this project were to:
- Gain a deeper understanding of best practice around writing reusable, maintainable, and accessible components. 
- Improve understanding of React & TypeScript
- Explore different approaches to Design Systems / Component Libraries / Style Guides 

### Choices

- #### React
I'm a huge fan of the React approach to development, and want to learn as much as I can about the ecosystem.

- #### TypeScript
Having written a previous project in React without TypeScript, I found myself having to switch back and forth between files to remember which props I expected where. TypeScript autocomplete speeds up the workflow, and will also come into its own when I am no longer the only person responsible for adding content to the system. 

- #### Gatsby
By leveraging Gatsby's built-in performance, SEO, and routing features, I was able to dedicate my time to the components themselves. 

- #### Prismic
Prismic allows for structured content (ensuring content integrity & strategy can be adhered too), and also has brilliant editing functionality. 

- #### Netlify 
<3 love it. 

## Challenges

### Biggest non-programming challenge

UI Design. The business grew out of a local Japanese language club, which was originally run by volunteers, and not for profit. Speaking to current members, the allure of the club was the welcoming, friendly, and inclusive sense of community. Moving into 2020, club founder Jess made the decision to turn the club into a profitable business. Balancing the friendly, welcoming, home-grown community brand with a professionalism that will encourage new members to pay for the product presented me with a UI challenge I still haven't solved. 

### Biggest programming challenge

Multi-layer and / or filters for class selection. Within the 3 categories (class target, class location, class format), users should be able to select multiple filters. These filter selections should be applied to the results of the previous filter category. For example, if I am interested in **both** online and in-person classes, but only those with an intensive format, my results should be the intensive classes available both online and in-person. 







