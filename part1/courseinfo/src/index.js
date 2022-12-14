import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  console.log(course)
 
  return ( 
    <h1>{course}</h1>
    );
}

const Part = (props)=>{
  return <p>{props.part} {props.exercises}</p>
}
const Content = (props) => {
  return (
    <>
    <Part part = {props.part1} exercises = {props.exercises1}/>
    <Part part = {props.part2} exercises = {props.exercises2}/>
    <Part part = {props.part3} exercises = {props.exercises3}/>
    </>
  );
};
const Total = ({exercises1,exercises2,exercises3}) => {

  return <p>Number of exercises <b>{exercises1 + exercises2+exercises3}</b></p>;
};


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
      <Header course={course} />
      <Content part1 = {part1.name} part2={part2.name} part3 ={part3.name}
       exercises1 ={part1.exercises} exercises2 ={part2.exercises} exercises3 ={part3.exercises1}/>
       <Total exercises1={part1.exercises} exercises2 ={part2.exercises} exercises3 ={part3.exercises}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
