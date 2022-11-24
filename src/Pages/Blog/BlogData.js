import React from 'react';
import Blog from './Blog';

const BlogData = () => {
    const blogData = [
        {
            Question: "What are the different ways to manage a state in a React application?",
            Answer: "State represents the value of a dynamic properties of a React component at a given instance. React provides a dynamic data store for each component. The internal data represents the state of a React component and can be accessed using this. state member variable of the component."
        },
        {
            Question: "How does prototypical inheritance work?",
            Answer: "The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object."
        },
        {
            Question: " What is a unit test? Why should we write unit tests?",
            Answer: "The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages."
        },
        {
            Question: "React vs. Angular vs. Vue?",
            Answer: "Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option."

        }

    ];
    return (
        <div className='grid grid-cols-2 sm:grid-cols-1'>
            {
                blogData.map((data, i) => <Blog></Blog>)
            }
        </div>
    );
};

export default BlogData;