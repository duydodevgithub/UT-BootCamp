#!/usr/bin/env ruby

# BRIEF //
#   The student script from last time was a good first-pass. Now, it's time to
#   make it a bit more robust.
#
#   To start, refactor such that all of your prompts occur within a loop, which
#   doesn't break until the user indicates the information they entered is 
#   correct. Only print the information after their confirmation.
#
#   Next, refactor your program such that, after users confirm that they've
#   entered the correct information, your program prompts them as to whether 
#   they'd like to enter information for additional students.
#   
#     1. As an "easy" challenge, simply allow them to enter the values again,
#        and print the information after they confirm it's correct.
#
#     2. Your recommended challenge is to store student information in a dictionary,
#        and create a new one for each student the user adds. Store these
#        students in a list, and print the entire list when the user declines
#        to add additional students.


# "Global" students array. Alternate creation syntax here.
students = Array.new

# This is another while syntax: begin ... end while true
begin

  student = Hash.new
  
  # Prompt user for student's identification information...
  print 'Please enter the student\'s first name. '
  student[:first_name] = gets.chomp
  
  print 'Please enter the student\'s last name. '
  student[:last_name] = gets.chomp
  
  print 'Please enter the student\'s middle initial. '
  student[:middle_initial] = gets.chomp
  
  # Prompt user for student's contact information...
  print 'Please enter the student\'s address. '
  student[:address] = gets.chomp
  
  print 'Please enter the student\'s email. '
  student[:email] = gets.chomp
  
  print 'Please enter the student\'s phone number. '
  student[:phone_number] = gets.chomp
  
  # Print a separator...
  puts '-' * 18
  
  # Print all to the console...
  student.each do | key, value |
      puts "The student\'s #{key} is #{value}."
  end
  
  # Print a separator...
  puts '-' * 18
  
  # Prompt for confirmation. Use lower so users can enter either Y or y.
  print 'Is this information correct? (Y/n) '
  if gets.chomp.downcase == 'y'
    students.push student
  
    # Prompt users to add more student information.
    print 'Would you like to input another student\'s information? (Y/n) '
    if gets.chomp.downcase == 'y'
      next
    else
      puts "You\'ve entered the following student profiles:"

      puts '-' * 18

      # Print information for every student in the list.
      students.each do | student |
        student.each do | key, value |
          puts "The student\'s #{key} is #{value}."
        end
      end

      puts '-' * 18

      break
    end
  end
end while true
