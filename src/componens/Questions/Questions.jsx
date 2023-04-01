import React from "react";

const Questions = () => {
  return (
    <div className="text-left w-11/12 mx-auto">
      <ol className="list-decimal">
        <li className="mt-3 ">
          <span className="bg-cyan-100">How does React work?</span> <br />
          React is a JavaScript library for building user interfaces. It works
          by creating a virtual representation of the UI in memory, called the
          Virtual DOM. Whenever there is a change in the state or props of the
          component, React re-renders the Virtual DOM and compares it with the
          previous version. It then updates only the part of the real DOM that
          needs to be changed, making the process of updating the UI more
          efficient.
        </li>
        <li className="mt-3 ">
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
        <li className="mt-3 ">
          <span className="bg-cyan-100">How does useState work?</span> <br />
          useState is a built-in hook in React that allows functional components
          to have stateful logic. The useState hook returns an array with two
          elements: the current state value and a function to update the state
          value.
        </li>
      </ol>
    </div>
  );
};

export default Questions;
