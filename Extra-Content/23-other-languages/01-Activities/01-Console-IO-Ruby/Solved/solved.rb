#!/usr/bin/env ruby

# Learning Objectives:
#   - Variable Declarations & Basic Data Types
#   - Core Language Features

# BRIEF //
#   Your firm is implementing its student management prototype in Python.
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

# Prompt for confirmation, and save what user entered.
print 'Is this information correct? (Y/n) '
confirmation = gets.chomp
