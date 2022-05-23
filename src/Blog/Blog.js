import React from 'react';

const Blog = () => {
    return (
        <div className='py-10'>
            <div className='py-5'>
                <h2 className='text-3xl font-bold'>
                    1.How will you improve the performance of a React Application?
                </h2>
                <p className='text-xl'>
                    Ans:To optimize React rendering, you need to make sure that components receive only necessary props. It will let you <br /> control the CPU consumption and avoid over-rendering unnecessary features. The solution is to <br /> create a functional component that will collect all props and redistribute them to other components.
                </p>
            </div>
            <div className='py-5'>
                <h2 className='text-3xl font-bold'>
                    2.What are the different ways to manage a state in a React application?
                </h2>
                <p className='text-xl'>
                    Ans:React uses an observable object as the state that observes what changes are made to the state and helps the component behave <br /> accordingly. For example, if we update the state of any component like the following the webpage <br /> will not re-render itself because React State will not be able to detect the changes made.
                </p>
            </div>
            <div className='py-5'>
                <h2 className='text-3xl font-bold'>
                    3.How does prototypical inheritance work?
                </h2>
                <p className='text-xl'>
                    Ans:Prototype-based programming is a style of object-oriented programming in which behaviour reuse is performed <br /> via a process of reusing existing objects that serve as prototypes. This model can <br /> also be known as prototypal, prototype-oriented, classless, or instance-based programming.
                </p>
            </div>
            <div className='py-5'>
                <h2 className='text-3xl font-bold'>
                    4.How to implement a search to find products by name in react?
                </h2>
                <p className='text-xl'>
                    Ans:Firstly, we import useState from react . Then, we import the Scroll and SearchList components. <br /> Next, in the Search function, we use the useState hook to initialise the value of the searchField state with useState. <br /> After this, we use the filter function on the details list received from the parent.
                </p>
            </div>
            <div className='py-5'>
                <h2 className='text-3xl font-bold'>
                    5.What is a unit test? Why should write unit tests?
                </h2>
                <p className='text-xl'>
                    Ans:Unit testing is a software development process in which the smallest testable parts of an <br /> application, called units, are individually and independently scrutinized for proper operation.
                    Unit testing ensures that all <br /> code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount.
                </p>
            </div>
        </div>
    );
};

export default Blog;