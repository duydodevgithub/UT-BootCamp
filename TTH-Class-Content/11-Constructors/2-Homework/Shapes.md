# Week 11 Homework Instructions

### Overview

This week's homework assignment requires students to use prototypes
to implement a Shape "class", and Triangle; Square; and Pentagon "subclasses".
The `instanceof` operator should behave properly when used on instances of any
of the three classes.

### Instructions

1. Create a Shape constructor. It should have a property called type. Attach
   a function, called get_type, such that any Shape will be able to call it.
   Just fill it in with a return statement for now.

2. Create Triangle and Square constructors. The triangles should set the
   properties side1, side2, and side3 for its side lengths.
   Do the same for Square.

3. Set the prototype of both of these objects equal to a new Shape().
   Try to explain to your prtner why we have to use an instance, rather than
   Shape directly, If it doesn't make sense, move on--we'll cover this in
   detail later.

4. Turn your attention to Shape.get_type. This function should return
   the type of the shape that it's called on--but only be defined on Shape.

   To do this, read about the Object.prototype.constructor property on MDN:

    <http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor>

   JavaScript sets a constructor property for you automatically. But, when
   you muck with the prototype chain, this default won't accurately
   represent which function created which object.

   We learned about a new property of functions early in this activity,
   which should be helpful in solving this exercise. Return it from
   get_type.

   Now, console.log the result of calling get_type. What do you get? What
   should you have gotten? Try to explain to your partner why this happened.

   There is no "secret" to fixing this, actually. You really do just reset
   the .constructor property of the triangles you create. But, there's a
   nuance to it.


```
 1. If you want all triangles ever created to report Triangle as their
    .constructor, where do you put that property?
 2. If your code still doesn't work, take a close look at where you're
    modifying your shape prototypes. Does the order in which you change
    the prototype and constructor properties matter?
```

5. Create a Pentagon object, analogous to your other shapes. Your getType
   method should work without any additional work.

6. **Challenge**. Reimiplement your hierarchy using `Object.create`, without explicit `.prototype` references. This is _not_ required for full credit on the homework.
