#!/usr/bin/env ruby

# BRIEF //
#   Your firm is implementing its student management prototype in Ruby.
#   It's a command-line program, which the registrar's office will use to
#   add students to the database upon enrollment.
#
#   The program should prompt the user for a student's first name; last name;
#   middle initial; physical address; email address; and phone number.
#
#   After each prompt, the program should wait for the user's input. 
#
#   Once the user has entered every piece of information, the program should
#   print it all back to the console, and prompt the user to enter Y if the
#   information is correct, or any other key otherwise.
#
#   For now, you should collect the user's response--i.e., y or otherwise--but
#   don't worry about handling it. We'll get to that shorly.
#
###############################################################################

# To start, wrap your code in an infinite loop. What does this look like?
#
###############################################################################

# Next, create a dictionary, whose keys are the same as the variable names you've
# been using. Set their value equal to "None", which is Python's version of 
# JavaScript's null. Refactor your calls to input such that they assign to
# the dictionary's values directly, rather than to variable names. It'll
# look very similar!
# 
###############################################################################

# Prompt user for student's identification information...
print 'Please enter the student\'s first name. '
first_name = gets.chomp

print 'Please enter the student\'s last name. '
last_name = gets.chomp

print 'Please enter the student\'s middle initial. '
middle_initial = gets.chomp

# Prompt user for student's contact information...
print 'Please enter the student\'s address. '
address = gets.chomp
print 'Please enter the student\'s email. '
email = gets.chomp
print 'Please enter the student\'s phone_number.  '
phone_number = gets.chomp

# Print a separator. This wasn't part of the assignment, so it's okay if you
# don't have this part. :)
puts '-' * 18

# Print everything to the console...
puts "The student's first name is #{first_name}."
puts "The student's last name is #{last_name}."
puts "The student's middle initial is #{middle_initial}."

puts "The student's address is #{address}."
puts "The student's email is #{email}."
puts "The student's phone number is #{phone_number}."

# Print a separator. 
puts '-' * 18

# Use a conditional statement here. If they say "No", simply continue the loop, 
# so they can enter the information again.
#
# If they say "Yes", add the student to a list, and prompt them again, asking
# if they want to add another student.
#
# If they say "Yes" again, continue the loop. If not, print every student in 
# your list.
#
# Take this one step by step, and don't get overwhelmed. It's okay if this
# is challenging! 
#
###############################################################################

print 'Is this information correct? (Y/n) '
confirmation = gets.chomp
