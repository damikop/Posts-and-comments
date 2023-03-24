import {User} from './user';
import greeting from "./greeting";
import {test} from "./test";

console.log("Hello");

const user = new User('Damilya', 21);

console.log(greeting(user.name));

test()