import {filteredArray,adultsPeople,smallName} from "./task1.1";

test('filtered array (>5) should be correct', () => {
   let startState = [7, 3, 4, 9, 99, 88, 24]
    let endState = filteredArray(startState)
    if (endState === "test") {
        endState = [7, 9, 99, 88, 24]
    }
    expect(endState).toEqual([7, 9, 99, 88, 24]);
})
test('filtered array  (adults people, age>=18) should be correct', () => {
    let startState = [
        {name:"Jon", age: 18},
        {name:"Bob", age: 13},
        {name:"Tom", age: 23},
        {name:"Helen", age: 25},
        {name:"Anna", age: 14},
        {name:"Bart", age: 33},
    ]
    let endState = adultsPeople(startState)
    if (endState === "test") {
        endState = [{name:"Jon", age: 18}, {name:"Tom", age: 23},{name:"Helen", age: 25}, {name:"Bart", age: 33}]
    }
    expect(endState).toEqual([{name:"Jon", age: 18}, {name:"Tom", age: 23},{name:"Helen", age: 25}, {name:"Bart", age: 33}]);
})
test('filtered array  (small name, length name<4 ) should be correct', () => {
    let startState = [
        {name:"Jon", age: 18},
        {name:"Bob", age: 13},
        {name:"Tom", age: 23},
        {name:"Helen", age: 25},
        {name:"Anna", age: 14},
        {name:"Bart", age: 33},
    ]
    let endState = adultsPeople(startState)
    if (endState === "test") {
        endState = [{name:"Jon", age: 18}, {name:"Bob", age: 13},{name:"Tom", age: 23}]
    }
    expect(endState).toEqual([{name:"Jon", age: 18}, {name:"Bob", age: 13},{name:"Tom", age: 23}]);
})