#!/usr/bin/env ruby

# Ruby has another powerful data type, called the dictionary. This is 
# analogous to JavaScript's objects. Note that the colon must come IMMEDIATELY
# after the name of the key.
student_profile = {
        'first_name': 'Jane',
        'last_name': 'Doe',
        'middle_initial': 'Q',
        'address': 'Melbourne, Australia',
        'email': 'jane@gmail.com',
        'phone_number': '5555555678' , 
        }

# Ruby also allows you to write these with "hash rockets", syntactically
# identical to PHP's associative arrays. Purely a stylistic choice.
#
# It's also worth mentioning that Ruby allows you to use symbols, which
# are just names preceded by a colon. They're more efficient than using 
# Strings, so you should get into the habit of using them. Conceptually, they
# work the same way.
student_profile = {
        :first_name => 'Jane',
        :last_name => 'Doe',
        :middle_initial => 'Q',
        :address => 'Melbourne, Australia',
        :email => 'jane@gmail.com',
        :phone_number => '5555555678' , 
        }

puts "#{student_profile}"

# Separator...
puts '-' * 18
#
# We get the value of a key just as in JavaScript--via bracket notation. Note
# that we access keys using symbol notation, even if we defined them using 
# strings.
puts "The sudent's first name is #{student_profile[:first_name]}."

# If you try to access a key that doesn't exist, Ruby won't throw. Rather, it
# will return nil, its equivalent of null. 
#
# Nil prints as empty space, so this example will look a bit weird in the 
# terminal.
puts student_profile[:penultimate]

# Separator...
print('-' * 18)
 
# Iteration is similar as with arrays.
student_profile.each do | key, value |
  puts "The current key is #{key}, and the associated value is #{value}."
end

# # Separator...
puts '-' * 18
