# Frontend Mentor - Advice generator app solution

This is a solution to the
[Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)

<!-- Add a screenshot of your solution. Update the file path in the image above. -->

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
  <!-- Update with your solution URL -->
- Live Site URL: https://advice-generator-app-leugz.vercel.app/
  <!-- Update with your live site URL -->

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

- Learned how to fetch data from an API using `useEffect` and `useState`.
- Improved skills in using asynchronous JavaScript.
- Practiced using `Tailwind CSS` for styling components.
- Gained a better understanding of component composition in React.

```javascript
useEffect(() => {
  fetchData()
}, [])

const fetchData = async () => {
  try {
    const response = await api.get('/advice')

    if (!response) return

    setData(response.data.slip)
  } catch (error) {
    console.error(error)
  }
}
```

### Continued development

- Focus on improving the responsiveness of the design for various screen sizes.
- Implement error handling to gracefully handle API failures.
- Add unit tests to ensure the reliability of the components.
- Explore more advanced styling techniques with Tailwind CSS.

### Useful resources

- [Frontend Mentor's article on submitting solutions](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) -
  This guide helped me understand the submission process on Frontend Mentor.
- [Tailwind CSS documentation](https://tailwindcss.com/docs) - The official
  Tailwind CSS documentation was invaluable for learning how to use the
  framework.

## Author

- Website - [Add your name here](https://www.your-site.com)
  <!-- Update with your website -->
- Frontend Mentor -
  [@yourusername](https://www.frontendmentor.io/profile/yourusername)
  <!-- Update with your Frontend Mentor username -->
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
  <!-- Update with your Twitter username -->

## Acknowledgments

I'd like to thank the Frontend Mentor community for providing the challenge and
a platform to learn and grow. A special thanks to those who offered feedback and
support throughout the process.
