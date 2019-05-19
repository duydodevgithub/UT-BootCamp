#!/usr/bin/env ruby

# Ruby has two boolean values: true and false.
truth = true
falsity = false

# Conditional checks are fairly straightforward.
if truth
  puts 'It\'s true.' 
elsif falsity
  puts 'I really hope this never prints.' 
else
  puts '...I hope this never prints, either.' 
end

# In Ruby, the && ond || operators are as in JavaScript.
x = 0
if (x <= 2 && x >= -2)
  puts 'It looks like x is in range.'
end

# Similarly, || is written or.
if (x == 2 || x < 5)
  puts '...Looks like it\'s still in range. Hallelujah.'
end

# Now's a good time to point out that you can use while True: to loop forever.
while true do
  print 'Do you want to stop? (Y/n) '
  stop = gets.chomp
  
  if stop == 'Y'
    # Break kills a loop immediately.
    break
  else
    # You don't need an "else" branch, but we're using one just to
    # demonstrate how to use redo. It just means, "run the loop again."
    redo
  end
end

# Separator...
puts '-' * 18
