#!/usr/bin/env ruby

# You've been using functions all along, so you already know how to call them.
# Let's take a look at defining one.

# In Ruby, function definitions start with def; then the function's name;
# and then parameters, listed as in JavaScript.
def greet(name)
  # return operates identically to JavaScript.
  return "Hi, #{name}."
end

# Unlike JavaScript, Ruby automatically returns the value of the
# last expression in the function body. So, we can get rid of the explicit
# return statement above.
def greet(name)
  "Hi, #{name}."
end
#
# This is a better way to print separators, don't you think? Ruby also lets
# you define default values for function parameters, which we can finally also
# do in ES6.
def print_separator(repetitions = 18)
  puts '-' * repetitions
end

# We can call functions with or without parentheses wrapping its arguments.
result = greet "Julius"
puts result

# When passing the result of a function call as an argument to another
# function, though, use parentheses explicitly around the inner
# function.
puts greet("Julius")

# We can only call functions after we've defined them. This wouldn't work
# on line 5--go ahead and try it.
puts greet "Julius"


# Note that Ruby doesn't require us to use parentheses to call.
print_separator

# Ruby also allows you to define "keyword arguments". These are arguments
# that you pass by name, rather than position.
def print_name(first: 'Jane', middle: 'D', last: 'Doe')
  puts "#{first} #{middle} #{last}"
end

# When you call a function defined in terms of keyword argments, you don't 
# need to pass them in order, because they're named! Nifty.
print_name(last: 'Caesar', middle: 'J', first: 'Gaius')

print_separator

# You can use positional arguments with keyword arguments, but all your keyword
# arguments must come AFTER your positional arguments.
def print_names_n_times(n, first, middle, last)
  # Don't worry about the syntax here for now.
  Range.new(0, n).each { puts "#{first} #{middle} #{last}" }
end

print_names_n_times(20, first = 'Gaius', middle = 'Julius', last = 'Caesar')

# This wouldn't work if we put the kwargs first.
def print_names_n_times(first, middle, last, n)
  # Don't worry about the syntax here for now.
  Range.new(0, n).each { puts "#{first} #{middle} #{last}" }
end

# If you uncomment this, you'll get an error.
# print_names_n_times(first = 'Gaius', middle = 'Julius', last = 'Caesar', 20)

print_separator

# Finally, you can get access to all of the arguments passed with the *args
# variable. You can name it anything, as long as you put the asterisk in front,
# but *args is conventional.
def reveal(*args)
 # ...But within the function, you don't use the asterisk.
 args.each do | arg |
   puts "You passed the argument #{arg}."
 end
end

reveal 1, 2, 3, 4, 'OMG'

print_separator

# You can do the same with *kwargs to get all the keyword arguments, but you 
# use two asterisks. Again, **fishpaste would work, but **kwargs is convention.
def reveal_kwargs(**kwargs)
  # ...But within the function, you don't use the asterisk.
  kwargs.each do | kwarg |
    puts "#{kwarg} is one of your arguments."
  end
end

reveal_kwargs first: 'fish', second: 'stew'

print_separator
