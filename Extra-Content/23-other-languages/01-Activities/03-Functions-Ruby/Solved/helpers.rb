#!/usr/bin/env ruby

# Helpers module for Student Information script

# The pattern: module <name> ... end 
# ...Creates a module.
module Helpers

  def get_student_information
    # Prompt user for student's identification information...
    print 'Please enter the student\'s first name. '
    first = gets.chomp

    print 'Please enter the student\'s last name. '
    last = gets.chomp

    print 'Please enter the student\'s middle initial. '
    middle = gets.chomp
    
    # Prompt user for student's contact information...
    print 'Please enter the student\'s address. '
    address = gets.chomp

    print 'Please enter the student\'s email. '
    email = gets.chomp

    print 'Please enter the student\'s phone_number. '
    phone = gets.chomp

    return [first, last, middle, address, email, phone]
  end

  def create_student(**student)

    # Create a hash that returns 'N/A' when accessing a key that doesn't exist, 
    # and initialize with appropriate keys.
    _student = Hash.new('N/A')
    _student.each { | key | h[key] = nil }

    # This could clearly be done iteratively. Feel free to refactor 
    # to demonstrate.
    
    # Build hash with values from **student.
    _student[:first_name] = student[:first_name]
    _student[:last_name] = student[:last_name]
    _student[:middle_initial] = student[:middle_initial]
    
    # Prompt user for student's contact information...
    _student[:address] = student[:address]
    _student[:email] = student[:email]
    _student[:phone_number] = student[:phone_number]

    return _student
  end

  def print_separator(repetitions = 18)
    puts '-' * repetitions
  end

  def print_student(student)
    puts 'You\'ve entered:'

    print_separator

    student.each { | key, value | puts "The student's #{key} is #{value}." }

    print_separator
  end

  def confirm(message)
    print "#{message}"
    confirmation = gets.chomp.downcase == 'y' # Implicit return!
  end

  def print_summary(students)
    puts 'You\'ve entered the following profiles:'

    print_separator

    students.each { | student | print_student student }

    print_separator
  end

end
