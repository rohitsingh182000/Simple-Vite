// union type
//it can have multiple types

import React, { useState } from "react";

// type output = number | string | boolean

// let result ;

// result = 10;
// result = 'Apple';
// result = true;

// type Student = {
//   id: number;
//   sudentname: string;
// };

// type Parent = {
//   student: true;
//   studentId: number;
//   parentname: string;
// };

// type StudentParentInfo = Student & Parent;

// let info: StudentParentInfo = {
//   studentId: 1,
//   parentname: "Rohit",
//   id: 12,
//   sudentname: "hi",
//   student: true,
// };

// let parentNameLength: number= (info.parentname as string ).length

// function Hello<canbeanything>(arg:canbeanything){
//   return arg;
// }

// console.log(Hello<string>('Rohit'));

// interface StudentInfo<A, B, C> {
//   id: A;
//   name: B;
//   parent: C;
// }

// let info: StudentInfo<number, string, boolean> = {
//   id: 123,
//   name: "Rohit",
//   parent: true,
// };

// type id<T>= T extends number ? number : string;

// let Check:id<number> = 123

// Implement a function that takes an array of items and returns a new array
// with only unique items, utilizing generics and conditional types

// function takingArray<T>(comingData: T[]): T[] {
//   for (var i = 0; i < comingData.length; i++) {
//     for (var j = 0; j < comingData.length - i - 1; j++) {
//       if (comingData[j] > comingData[j + 1]) {
//         var tempvariable = comingData[j];
//         comingData[j] = comingData[j + 1];
//         comingData[j + 1] = tempvariable;
//       }
//     }
//   }
//   return comingData;
// }

// let phone = [1, 55, 2, 22];

// console.log(takingArray(phone));

// 1st Way
function Greeting(props: { name: string }) {
  type countType = string;
  const [count, setCount] = useState<countType>("0");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCount(event.target.value);
  }
  return (
    <>
      <div>Greeting from {props.name}</div>
      <input
        type="email"
        value={count}
        name="email"
        id="email"
        onChange={handleChange}
      />
    </>
  );
}

export default Greeting;

// // 2nd Way
// interface ComingProps {
//   name: string;
// }
// const Greeting = (props: ComingProps) => {
//   return <div>Hello {props.name}</div>;
// };
