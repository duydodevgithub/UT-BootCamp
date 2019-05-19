#!/usr/bin/env ruby

# Unlike JavaScript, Ruby comes equipped with a fully-featured, classical OOP
# toolset.
class User

  # attr_reader lets you list the attributes you want to be able to access
  # directly.
  attr_reader :first_name, :last_name, :email

  # The initialize method is where you...Well, initialize your object's 
  # properties.
  def initialize(first_name, last_name, email)
    @first_name = first_name
    @last_name = last_name
    @email = email
  end

  def introduce
    puts "Hi! My name is #{@first_name}."
  end

end

# Instantiationg an object is straightforward. Note that we don't use the new
# keyword in Ruby.
jim = User.new 'Jim', 'Doe', 'jim@gmail.com'

# We don't need explicit get methods, since we can access properties directly.
puts jim.first_name 
puts jim.last_name 
puts jim.email 
