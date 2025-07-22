# 1.1: Course Information, Step 1

The application that we will start working on in this exercise will be further developed in a few of the following exercises.

In this and other upcoming exercise sets in this course, it is enough to only submit the **final state** of the application. If desired, you may also create a commit for each exercise of the series, but this is entirely optional.

---

## 🚀 Initialize with Vite

Use **Vite** to initialize a new application. Then, modify `main.jsx` to match the following:

```jsx
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

---

## ✨ Update `App.jsx`

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
```

---

## 🧹 Clean up files

Remove the following:
- `App.css`
- `index.css`
- The `assets` directory

---

## 📦 Refactor into Components

The entire application is currently in a single component. Refactor the code so that it consists of **three new components**:
- `Header`
- `Content`
- `Total`

All data should remain in the `App` component, which passes the necessary data to each component using **props**.

- `Header` renders the name of the course.
- `Content` renders the parts and number of exercises.
- `Total` renders the total number of exercises.

---

## 🧠 Define the new components in `App.jsx`

The body of the `App` component will look approximately like this:

```jsx
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

---

> ⚠️ **WARNING**: Don’t try to write all components at once! That will almost certainly break the app.

Start small:
- First make the `Header` component and confirm it works.
- Then continue to `Content`, then `Total`.

---

> 💬 *"The only way to go fast, is to go well."*  
> —Robert "Uncle Bob" Martin

Careful, small-step progress may seem slow, but it’s actually the fastest way to build quality software.

---

# 1.2: Course Information, Step 2

Refactor the `Content` component so that it no longer renders part names and exercises directly.

Instead, it should render **three `Part` components**, each responsible for displaying a single part and its number of exercises.

---

## ✅ Updated `Content` Component

```jsx
const Content = ... {
  return (
    <div>
      <Part ... />
      <Part ... />
      <Part ... />
    </div>
  )
}
```

# Exercises 1.3–1.5

We continue building the application that we started working on in the previous exercises. You can write the code into the **same project**, since we are only interested in the **final state** of the submitted application.

---

## 💡 Pro Tip: Debugging Props

You may run into issues with the structure of the props that components receive. A good way to make things clearer is by **printing the props to the console**, like this:

```jsx
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
```

If and when you encounter the error:

> **Objects are not valid as a React child**

Keep in mind what is being passed as props and how you're trying to render it.

---

## 🧱 1.3: Course Information, Step 3

Let’s move forward by using **objects** in our application.

Modify the variable definitions in the `App` component and **refactor the rest of the app** so that it still works:

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```

---

## 📚 1.4: Course Information, Step 4

Place the objects into an **array**.

Update your variable definitions and **modify your component props accordingly**:

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}
```

> 📝 You can assume there are always three items. No need for loops yet—we’ll explore that in the next part of the course.

Also, instead of passing different objects as separate props to `Content` and `Total`, pass the **whole array**:

```jsx
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
```

---

## 📦 1.5: Course Information, Step 5

Take it one step further—**combine course and parts into a single object**:

```jsx
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}
```

> 🧰 Fix anything that breaks as a result of this change. Your components will need to access `course.name` and `course.parts`.

---

Happy coding! 🚀
```
