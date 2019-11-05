// array = [1, 2, 3, 4,]
// function sumArry(arr) {
// let sum ;
//     if (arr.length === 1) {
//         return sum = arr[0];
//     }
//     else {
//         return arr.pop() + sumArry(arr)
//     }
// }

//  console.log(sumArry(array))
// ///////////////////////////////////
// let x=[3,2,1,4,5,8]
// function minimum(arr){
//     let mini=arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<mini){
//        mini=arr[i]
//         }
        
//     }
//     return mini;
// }
//console.log(minimum(x))
////////////////////////////////
// function min(array) {
//    
//     if (array.length > 1) {
//     let other = min(array.splice(1));
//     if (other < array[0]) { // break here
//     return other;
//     }
//     }
//     return array[0];
//     }
//     console.log(min([3,5,2]));

class Stack {
    constructor() {
        this.storage = [1,2,3,4,5];
    }
    push(element) {
        this.storage.push(element);
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[this.storage.length - 1];
    }
    size() {
        return this.storage.length;
    }
}
let obj= new Stack();
obj.storage.splice(1,1)
