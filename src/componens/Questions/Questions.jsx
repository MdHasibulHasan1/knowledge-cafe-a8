import React from "react";

const Questions = () => {
  return (
    <div className="text-left w-11/12 mb-5 mx-auto">
      <ol className="list-decimal">
        <li className="mt-3 ml-3 ">
          <span className="bg-cyan-100">How does React work?</span> <br />
          React is a JavaScript library for building user interfaces. It works
          by creating a virtual representation of the UI in memory, called the
          Virtual DOM. Whenever there is a change in the state or props of the
          component, React re-renders the Virtual DOM and compares it with the
          previous version. It then updates only the part of the real DOM that
          needs to be changed, making the process of updating the UI more
          efficient.
        </li>
        <li className="mt-3 ml-3 ">
          <span className="bg-cyan-100">
            What is the difference between state and props?
          </span>
          <br />
          <div className="md:flex md:justify-evenly">
            <div>
              <h3 className="text-2xl font-medium">Props</h3>
              <hr className="border-1 my-2 border-gray-500" />
              <ol className="list-disc ml-3">
                <li>Props are read-only.</li>
                <li>Props are immutable.</li>
                <li>To pass data between different components</li>
                <li>Props can be accessed by the child component.</li>
                <li>Props are used to communicate between components.</li>
                <li>Stateless components can have Props.</li>
                <li>Function parameters</li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-medium">State</h3>
              <hr className="border-1 my-2 border-gray-500" />
              <ol className="list-disc ml-3">
                <li>State changes can be asynchronous.</li>
                <li>State is mutable.</li>
                <li>To manage data within components</li>
                <li>State cannot be accessed by child components.</li>
                <li>
                  States can be used for rendering dynamic changes with the
                  component.
                </li>
                <li>Stateless components cannot have State.</li>
                <li>Variable declared in the function body</li>
              </ol>
            </div>
          </div>
        </li>
        <li className="mt-3 ml-3">
          <span className="bg-cyan-100">How does useState work?</span> <br />
          useState is a built-in hook in React that allows functional components
          to have stateful logic. It takes an initial value as an argument and
          returns an array containing two elements: the current state value and
          a function to update it. When the update function is called with a new
          value, React re-renders the component and the new value is used for
          the state variable. This allows the component to update its display
          based on the current state value.
        </li>
        <li className="mt-3 ml-3">
          <span className="bg-cyan-100">
            Purpose of useEffect other than fetching data.
          </span>
          <br />
          The useEffect hook allows you to perform side effects in your
          components in a way that is both declarative and flexible. By default,
          useEffect runs after every render, but you can also optimize it to run
          only when specific dependencies change. This can help you avoid
          unnecessary re-renders and improve the performance of your
          application. Some examples of how you might use the useEffect hook
          include: <br />
          <ol className="list-disc ml-4 font-medium">
            <li>
              Fetching data from an API and updating your component's state
              based on the response.
            </li>
            <li>
              Updating the document title based on the current state of your
              component.
            </li>
            <li>Attaching event listeners to the window or document object.</li>
            <li>
              Animating components based on changes in their props or state.
            </li>
            <li>
              Cleaning up after your component by unsubscribing from event
              listeners or clearing timeouts and intervals.
            </li>
            <li>
              Updating the component based on changes in the URL using the
              useLocation hook from react-router-dom
            </li>
            <li>
              Setting up timers or scheduling tasks using the setTimeout and
              setInterval functions.
            </li>
            <li>
              Integrating with third-party libraries by calling their APIs
              inside the useEffect function.
            </li>
          </ol>
          Overall, the useEffect hook is a powerful tool that can help you
          manage side effects in your React components in a declarative and
          flexible way. By using it effectively, you can write more efficient,
          maintainable, and scalable React code.
        </li>
      </ol>
    </div>
  );
};

export default Questions;
