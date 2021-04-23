# Notes from Course

- React is all about splitting your app in small components
- SPA - server only sends one HTML page, then React takes over and controls UI
- Angular good for larger projects
- Rest and spread operators
- Destructuring
- Only one root element per component
- We use props to make sure we can pass data to our components to make them reusable
- When you use JSX in the end React.createElement() method is called (for each component)
- Events, States - on all built-in elements we have full access to native DOM events
- React calls functions for all child components under a parent and renders elements, styles and props until there are no more children left
- useState is an important react hook - must be called inside react comp func
  - Always return 2 values i.e. current state value and func to update the value
  - Doesn't change the value right away but schedules the change
  - Each component (even same type but repeated) have their own state
  - Why do we use const here?
    ```
    const [title, setTitle] = useState(props.title);
    ```
    - As not assigning with `=` rather using `setTitle` managed by React in `useState`
- Use `onChange` to add props that listen to events on change in comps. Before React you have to get elementd by id or name and then add event listeners!
  ```
  <label onChange={titleChangeHandler}>Title</label>
  ```
  ```
  const titleChangeHandler = (event) => {
    	console.log(event.target.value);  // Gives current value
  	};
  ```
- For form, remember to store the new data using states
  ````
  const [enteredTitle, setEnteredTitle] = useState('');
  const titleChangeHandler = (event) => {
    	setEnteredTitle(event.target.title);
  	};
  	```
  A component can have multiple states!
  ````
- Use function to set states as React schedules changes in states rather than changing them right away, so this way you will always get the latest state snapshot
  ```
  setUserInput((prevState) => {
      return {
        ...userInput,
        enteredAmount: event.target.value,
      }
    });
  ```
- Add two way binding to change values from user input
  ```
  <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} />
  ```
- How state lifting works:
  - Lift the up the component tree only to the level where components generate the data or need the data

![Lifting_state_up.png](:/66cf8fe9f93648f9b798adf2b355e074)

- Control Component
- Presentataionl (dumb) vs stateful components
