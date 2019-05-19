#!/usr/bin/env ruby

# In Ruby, you indicate single-line comments with a pound (or hash) sign.

=begin
Alternatively, you can wrap multi-line comments in =begin COMMENT =end "tag". 
Many rubyists prefer to simply write sucessive #-comments, and this is the 
style we'll adhere to here.
=end 

# In Ruby, we declare variables with the variable name, and then an 
# assignment statement. 
# 
# Unlike JavaScript, we don't need to use a "var", "let", or "const" keyword. 
# We also don't use semicolons at the end of statements...Or anywhere else.
# 
# Similar to JavaScript, we do *not* need to indicate the "type" of data the 
# variable contains--just assign, and Ruby figures out the rest.

name = 'Cleopatra' # Single quotes and double quotes are both good for defining
name = "Cleopatra" # strings. We'll stick with singles, but do what you want.
age = 2085         # Storing numerical data is as easy as simply assigning it.


# To print to standard output, use the puts function. It's equivalent to
# Python's print. 
#
# In Ruby, parentheses are mostly optional in method calls. The convention
# with puts is to always levae them out.

# We'll discuss functions in detail soon. For now, just learn these two.
puts("You *can* call puts with parentheses.")
puts "...But noone does that."

print "Print is similar to puts, but it"
print " doesn't insert a newline. "
print "These strings will all appear on the same line in the console.\n"

# It's also useful to know that you can directly embed variables into a Ruby
# string. No need to use "string".format or any of that nonsense-just write
# the name of the variable you want to use, and precede it with a #. You MUST
# use "double quotes" if you're going to use this feature.
puts "Her name is #{name}, and she is #{age} years old."

# Numbers in Ruby are similar to JavaScript's. It offers the same mathematical 
# operators, such as +, -, and *, #
# The first difference is that Ruby specificlly has integer division.
four_hundred = 20 ** 2
puts four_hundred

# Speaking of multiplication, you can "multiply" strings--this behaves like 
# String.repeat in JavaScript.
puts '=' * 18

# Finally--you can prompt a user for input at the command line, and save their
# input, with the "gets" function. It takes a string to print, and returns the
# value the user types, as a string.
print "Tell me something...I'll say it back. "
something = gets
print something
# Hm. I thought print doesn't insert a newline for us?
#   ...Well, it doesn't. What happened, is that gets collected the text, AND
#   the newline character from the terminal. If you just want the string,
#   stripped of trailing whitespace and newline, you "chomp" the result of 
#   "gets".

print "Tell me something else...I'll say it better. "
something_else = gets.chomp
print something_else
