#!/usr/bin/env ruby

###############################################################################
#
# BRIEF //
#   Our script is coming together, but could use some organization.  We've 
#   collected a few of the standout challenges for you below. There's
#   ample opportunity for refactoring beyond this, though, so feel free to get 
#   creative and experiment.
#
#   Only the first three exercises are required. Focus on these. If you finish
#   early, move on to the final three.
#
#     1. Refactor your code to collect input from the user, then create a 
#        function which creates and returns the student dict.
#
#     2. Create a function that encapsulates the for loops for printing 
#        an individual student's information.
#
#     3. Create a function that prints a yes/no confirmation message to the 
#        screen, and returns True if the user enters Y (or y).
#
#     4. If you have time, wrap all the calls to input in a function called
#        get_student_information, or something similar. Return an array 
#        containing the vavlues the user entered, and assign them via unpacking
#        to the values you pass to your create_student_dict function.
#
#     5. If you have time, wrap up all the code that prints a summary into its
#        own function.
#
#     6. If you finish early, Google Ruby modules. Try and pull your 
#        functions if you're feeling lucky. If not, just sit tight. We'll 
#        discuss this during review.
#
###############################################################################


# "Global" students array. Alternate creation syntax here.
students = Array.new

# This is another while syntax.
begin
  # Initialize a new student. This uses fromkeys as a shorthand for literally
  # creating a new dictionary and setting its values to nil, which is fine.
  # But, show this to students, since it's much faster.
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
      continue
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
