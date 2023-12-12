# COMP2110 Week 09

# Task 1: Looking at Responsive Design Guides

## The Fundamental Guide to Mobile Usability

- Mobile usability isn’t just about scaling a website or app to fit various devices. It’s about understanding how people use mobile devices and that the mobile experience is as unique as the user.

- Mobile usability requires more than just resizing a website for different devices. It involves understanding how people use mobile devices and creating a unique mobile experience that feels as good as it looks. Mobile design is a more tactile experience that emphasizes touch, and designers must consider new UX design principles to create a successful mobile user experience.

- There is no single approach to mobile usability, given the diversity of screens and fingers. However, several usability principles can improve the user experience, including understanding the users and context, prioritizing content, using touch targets effectively, mimicking real-world gestures, and implementing progressive disclosure.

- There are six distinct ways users hold their phones, with 75% using just their thumb to touch the screen and fewer than 50% holding their phone with only one hand

- It’s clear that the traditional desktop F-shape pattern in which users make two horizontal eye movements across the screen followed by one vertical eye movement down the left side, isn’t in sync with mobile design.

- While most UX designers are deeply familiar with the F-shape pattern for reading web content in desktop design, it’s not a pattern that translates well to mobile.

- Mobile users tend to look at the center of the screen first. The center also represents the easiest place for them to reach and touch with thumbs on most smartphones. Touch accuracy decreases as users reach toward the outermost corners of the screen.

- Because of the variations in size of mobile devices and the way people use them, there is not a “one size fits all” design standard. Rather, it’s a set of principles and concepts designers should understand in order to improve mobile usability.

### 7 Guiding Principles for Mobile Devices

- Because of the variations in size of mobile devices and the way people use them, there is not a “one size fits all” design standard. Rather, it’s a set of principles and concepts designers should understand in order to improve mobile usability.

### 1. Know Your Users

- Ongoing research is necessary to keep up with changes in user behavior and technology. Designers should also consider how different demographics may use their devices, such as elderly users with impairments. Methods for obtaining user information include web analytics, surveys, experience sampling, and observing users in real-world scenarios.

### 2. Understand Context of Use

- Mobile devices are meant to move freely, and users often multitask while using them, which is important to consider in design. Understanding where and how users interact with a mobile design, as well as what else they're doing while using their device, can help designers create apps that work for their users. It's essential to recognize that users are not always solely focused on their mobile devices, and they may use them in different locations or situations that can impact the overall design and experience.

### 3. Follow the Rule of Thumb(s)

- Mobile designs should be optimized for thumbs since users primarily navigate mobile devices with them. This means all essential content and navigation should be easily accessible within the thumb zone without requiring users to stretch or move their hands unnaturally. Responsive design is crucial, and a single-column layout is preferable to multiple columns, which can shrink screen real estate and make it harder for users to access critical content within the thumb zone.

### 4. Put Content First

- In mobile design, it's important to follow the industrial design principle of placing content above controls to ensure users' hands don't block their line of sight. Unlike traditional web design, where navigation typically appears at the top of the screen, mobile design should prioritize placing the most important content in the center of the screen and key navigation controls at the bottom. This ensures that users can navigate using their thumbs and that important content is easily accessible. In tablet design, important content and navigation controls should be positioned on the sides of the screen.

### 5. Stay on (Touch) Target

- The optimal touch target is 7x7mm, which translates into roughly 40 pixels, but accounting for various viewing sizes, 44 pixels is the ideal space to cover touch zones and avoid user error. Making touch targets a bit larger helps cover the contexts and circumstances in which users interact with their device, often not giving it their undivided attention.

### 6. Echo Real-world Gestures and Movement

- The design should respond appropriately to the user's actions, and microinteractions can improve the user experience by giving context based on touch. However, designers should be mindful of the laws of physics and not overdo it.

### 7. Use Progressive Disclosure

- Designers should provide the user with the right content, at the right time and in the right amount, as well as affordances to access more if necessary. The main content should be revealed first, while additional controls should be available for users to dig deeper into the content. The approach of progressive disclosure is a way to handle this, showing only the most important information and allowing users to access more through relevant gestures or actions.

## Putting It Together

Mobile design is broader and more complicated than one screen or one device, and mobile experiences are not universal. By following some general usability principles and thinking a bit like an industrial designer, mobile designers can adhere to basic ergonomic standards and make the mobile experience comfortable and enjoyable for users, no matter what device they’re using or where they’re using it.

# Task 2: Looking at Responsive HTML in Use

Website: https://www.apple.com

- How are they displayed with different browser window sizes on different devices? What are the differences?

  - Website is scaled down when shrinking browser window on desktop. The navigation bar turns into a hamburger menu when the width of the screen becomes too small.

- Do they largely follow a responsive or adaptive design approach?

  - Yes, the website scales perfectinly and no content is missing when the display size in decreased.

- How many contents can be accessed using just a thumb? Is any other gesture required (refer to the hold and touch gesture figure in The Fundamental Guide to Mobile Usability)? You can use your mobile phone to practise.

  - There are no elements where the user needs to use gestures or holding down on elements. The navigation bar is at the top of the screen, so it is slightly more difficult to reach on a mobile device. The primary content is in the middle though and the user can use their thumb like on any other website to scroll through.

- Follow up F-shape pattern part in The Fundamental Guide to Mobile Usability, perform an evluation to your targeting pages.

- Do they follow the 7 guiding principles for mobile devices in The Fundamental Guide to Mobile Usability? What changes would be needed to achieve an optimal mobile web design? Give your summarization point by point:
  - Know Your Users
  - Understand Context of Use
  - Follow the Rule of Thumb(s)
  - Put Content First
  - Stay on (Touch) Target
  - Echo Real-world Gestures and Movement
  - Use Progressive Disclosure

# Task 3: Responsive Navigation Bar With Flexbox

- View index.html in repository

* Following the tutorial at [https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535] I was able to recreate the responsive navigation bar using flexbox, javascript and css. The website isn't complete, but rather just an example of how a navigation bar can be created using a combination of JS and CSS.

* index.html was modified to add a Font Awesome link so that some icons could be used for the nav bar.

* I then impletmented the JS to create the components and logic being the navbars functionaliy

* CSS was used to style the nav bar.

* The navbar is responsive through the use of media queries, which checks for the width of the display, which changes the desinged of the navbar based on if you're using a desktop, tablet or mobile.

* The JS, uses a click event listener to the hamburger menu, to allow the button to function.
