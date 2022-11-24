// import React from 'react';



// const Blog = () => {
//     return (
//         <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 ml-44'>
//             <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
//                 <div className="card-body bg-gradient-to-r from-purple-500 to-orange-500 text-white ml-10">
//                     <h2 className="card-title text-3xl text-bold">Question: What are the different ways to manage a state in a React application?</h2>
//                     <p>State represents the value of a dynamic properties of a React component at a given instance. React provides a dynamic data store for each component. The internal data represents the state of a React component and can be accessed using this. state member variable of the component.</p>

//                 </div>
//             </div>

//             {/* 2 */}
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <div className="card-body bg-gradient-to-r from-purple-500 to-orange-500 text-white mr-10 ">
//                     <h2 className="card-title  text-3xl text-bold">Question: How does prototypical inheritance work?</h2>
//                     <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

//                 </div>
//             </div>
//             {/* 3 */}
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <div className="card-body bg-gradient-to-r from-purple-500 to-orange-500 text-white ml-10">
//                     <h2 className="card-title  text-3xl text-bold">Question: What is a unit test? Why should we write unit tests?</h2>
//                     <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

//                 </div>
//             </div>

//             {/* 4 */}
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <div className="card-body bg-gradient-to-r from-purple-500 to-orange-500 text-white mr-10">
//                     <h2 className="card-title  text-3xl text-bold">Question: React vs. Angular vs. Vue?</h2>
//                     <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>

//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Blog;

import React from 'react';

const Blog = ({ data }) => {
    const { Question, Answer } = undefined || { data };
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Question:{Question}</h2>
                <p className='text-white'>{Answer}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );

};

export default Blog;