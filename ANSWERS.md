- [ ] Why would you use class component over function components (removing hooks from the question)?
class component are more pratical to use with data persistances.



- [ ] Name three lifecycle methods and their purposes.
componentDimount, shouldComponentUpdate and componentWillUnmount are three methodes parts of the React lifecycle. componentDimount update state via this.setState and cause side-effects in case of server-side-rendering. shouldComponentUpdate is use for increasing performance of poor performing Components. Developer can use those to verify that the change requires a re-render or not and return false to prevent the re-rendering from happening. In other case, you are expected to return true. Finally, componentWillUnmount will be called after render is finished in each of the re-render cycles. This means that we can be sure that the component and all its sub-components have properly rendered itself.

- [ ] What is the purpose of a custom hook?
Custom hook allow us to apply non-visual behavior and stateful logic throughout our components by reusing the same hook over and over again.


- [ ] Why is it important to test our apps?

Testing is essential for software quality. Some of the benefit are :
Surfaces bugs faster.
Reduces the risk of regressions.
Allows us to trust the code.
Makes us think about the edge cases.
Acts as a safety net when making changes or refactoring.
Acts as documentation for the code.
Encourages us to write more testable (better!) code.
