<!-- DAY---1 04/04/2022-->

Java Script is a synchronous single-threaded language
Single threaded-- java script can execute only one command at a time

Execution Context
-->Evrything in javaScript happens inside an execution context
Exicution Context have two major Components
1-Memory(Variable Environment)
All the variables and functions are stored as key value pairs
2-Code(thread of execution)
This is the place where the code executes one line at a time

    Understand how the code is executed in JavaScript

    var n=2;
    functio square(num){
        var ans = num*num;
        return;
    }
    var square2=square(n);
    var square4=square(4);

    the execution context is created in two phases
    1--> memorry creation phase
        ->java Script will aloctae memory all variables and function
        ->it will aclocate the mermory to n as undefiend , square as {var ans = num*num;return;}, square2 as undefiend , sqare4 as undefined

    2-->Code execution phase
        function greeting() {
        // [1] Some code here
        sayHi();
        // [2] Some code here
        }
        function sayHi() {
        return "Hi!";
        }

        // Invoke the `greeting` function
        greeting();

        The code above would be executed like this:

            Ignore all functions, until it reaches the greeting() function invocation.
            Add the greeting() function to the call stack list.
            Note: Call stack list: - greeting

            Execute all lines of code inside the greeting() function.
            Get to the sayHi() function invocation.
            Add the sayHi() function to the call stack list.
            Note: Call stack list: - sayHi - greeting

            Execute all lines of code inside the sayHi() function, until reaches its end.
            Return execution to the line that invoked sayHi() and continue executing the rest of the greeting() function.
            Delete the sayHi() function from our call stack list.
            Note: Call stack list: - greeting

            When everything inside the greeting() function has been executed, return to its invoking line to continue executing the rest of the JS code.
            Delete the greeting() function from the call stack list.
            Note: Call stack list: EMPTY

            In summary, then, we start with an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all of its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.

Hoisting in java-Script
--->JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

--->javascript में declaration अपने आप script के टॉप में add कर दिए जाते है इसलिए हम declare बाद में कर के पहले use कर सकते है। इसीको Hoisting को कहते है।

           --> Function Hoisting
                catName("Tiger");

                function catName(name) {
                console.log("My cat's name is " + name);
                }
                /*
                The result of the code above is: "My cat's name is Tiger"
                */

           --> var hositing

                Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.

                console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
                var num; // Declaration
                num = 6; // Initialization
                console.log(num); // Returns 6 after the line with initialization is executed.

           -->  let and const hoisting
                Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.

                console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
                let num = 6; // Initialization

Functions in java Script
--->A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

        The name of the function.
        A list of parameters to the function, enclosed in parentheses and separated by commas.
        The JavaScript statements that define the function, enclosed in curly brackets, {...}.
        for example--->function square(number) {
                        return number * number;
                        }

<!-- DAY-2 -->

WIndow object in Java (https://www.w3schools.com/jsref/ obj_window.asp)

        The window object represents an open window in a browser.

        If a document contain frames (<iframe> tags), the browser creates one window object for the HTML document, and one additional window object for each frame.

not-Defined vs Undefined
If a variable is accessed before defining then JS will show it as not defined, and if a variables is defined but not initialized I.e. no values is assigned it to it before accessing, then its undefined.

lexical-scope

            function a() {
        let b = 6;
        c();
        function c() {
            console.log(b);
        }
        }
        a();

lexical scope of c function is a ; and lixical scope of function a is the global scope ; so when the function a is envoked , let b =6 and and function c is envoked , inside c its console log b , c wil search weather b is declared in its scope if not c will search for b in its parent or lexical scope a . this is lexical scoping in java script

<!-- day-3 -->

const and let--> does not have a global sace but have a separate scipt scope
what should we use in first place...?
1.const--> const in first place , whenevr we want a value which is not changed later we use const

Temporal dead zone ----> Temporal dead zone is the time since when this let variable was hoisted till it has been initialized some value , the time between that is temporal dead zone.

     example--> console.log(a);
                let a=10;

            so here a was asigned memmory in a separate space as undefined  but it has not been initialized, so this time is known as temporal dead zone. so whenever we try to acces a variable before initialization it is ina a teporal dead zone it will give an refrence error

important note--> to avoid temporal dead zone is to always put declaration and initalization to the top , so that it hit the initialziation part first and then come to the logic

Different types of error in java script(https://omkarkolate.hashnode.dev/errors-in-javascript)

    1.syntax error-->In the programming language way of writing code called syntax, Javascript also has its own syntax to write code. and if you messed up with that syntax javascript engine will throw a syntax error.

                    let a = 10;
                    let a = 20;
                it wil throw and Syntax error

            In the above example, we declaring the variable a two times in the same scope, which is not allowed in javascript syntax because a variable with the same name has already been declared.

    2.Refference error-->When we declare a variable javascript engine assigns memory for that variable. After when we want to access that variable javascript will look for a reference in memory for it. If it's not able to find a reference it will give a reference error.

                console.log(a);
                let a = 10;

           In the above example, we are trying to access the variable a before declaring it, so the javascript engine is not able to get a reference for that hence it throwing a reference error.

    3. Type error-->  Javascript is a dynamically typed language, which means you can store any type of data in any variable at a time. But only with let we can have this freedom, there is one more way we can declare a variable in modern javascript which is using const. As the name suggests it's going to be a constant variable which means you are can't change the value later in the program.

                const a = 10;
                a = 20;
            In the above example, we are trying to reassign value to a variable a which is not allowed for contact variable type, hence the javascript engine will throw a type error.

    1.Syntax Error: If you are messed with javascript syntax.
    2.Reference Error: If you are trying to access a variable before declaring it.
    3.Type Error: If you are trying to reassign a value to a constant variable.
