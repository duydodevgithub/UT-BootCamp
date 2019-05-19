#!/usr/bin/env ruby

# Storing everything in separate variables isn't very well structured. Ideally,
# we'd put it all in a class...But there are a few tools we need before we get
# there.
#
# Like JavaScript, Ruby has an array data type.

# You use the same syntax as in JS to declare and populate simple arrays.
simple_array = [1, 2, 3]

# You index into arrays just like in JS...
puts "The first element of simple_array is #{simple_array[0]}."

# ...And can use negative indices, sa well.
puts "The first element of simple_array is #{simple_array[-1]}"

# You can add elements to a list with the left shift operator...
simple_array << 4
puts "Simple array is now: #{simple_array}"

# ...Or you can add the contents of other lists with the + and += operators.
# You can also do this with the "concat" method, also available in JS.
simple_array += [5]
puts "Simple array is now: #{simple_array}"

simple_array.concat([6, 7, 8])
puts "Simple array is now: #{simple_array}"

# Oh, and something peculiarly Ruby, is array subtraction. If we do A - B, 
# where A and B are arrays, Ruby removes all the elements of B that occur in
# A.
simple_array -= [4, 5, 6, 7, 8]
puts "Simple array is now: #{simple_array}"

# Separator...
puts '-' * 18

# To get the length of the list, read the size property.
puts "The length of your simple array is #{simple_array.size}."

# ...And iteration is pretty simple, as well. We'll take a look at the
# Note that we didn't have to manually check loop conditions! 
simple_array.each do | element |
  puts "The current element is #{element}."
end

# Separator...
puts('-' * 18)
