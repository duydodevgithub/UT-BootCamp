#!/usr/bin/python3

from helpers import *

###############################################################################
#
# BRIEF //
#   Your final task will be to create a Student class in an external module,
#   import it; and use it to replace the janky student dictionary setup we have
#   right now.
#
#     1. Create a Student class in an external file. Create an __init__ method
#        in which you initialize the student's attributes.
#
#     2. Add a method called get_info, in which you report the student's
#        contact information as you might on a "calling card". Something like:
#
#          Iskra A. Lawrence
#          555 Ubicumque #123
#          email@example.com
#          555.555.1234
#
#         You can call it, report, print_info, anything else,  alternatively.
#
#     3. Replace the print_student function with a call to this 
#        get_info function.
#
#     4. If you have time, try creating a Roster class that allows you to 
#        store students. This allows us to have different Roster objects 
#        corresponding to, say, different classes or class years.
#
#     5. Make sure your Roster class has a print_all method that prints the 
#        details of every student it holds. Call it summarize, or something
#        similar.
#
###############################################################################

# "Global" students list.
students = []

while True:
    # Get information and assign via unpacking. Order matters.
    first, last, middle, address, email, phone = get_student_information()

    # Create a student by passing kwargs. We can do this with positional
    # arguments, as well, but this is arguably more robust.
    student = create_student(first_name = first, last_name = last,
            middle_initial = middle, address = address, email = email,
            phone_number = phone)
    
    print_student(student)
    
    # Prompt for confirmation. Use lower so users can enter either Y or y.
    if confirm('Is this information correct? (Y/n) '):
        students.append(student)
        
        if confirm('Would you like to input another student\'s information? (Y/n) '):
            continue
        else:
            print_summary(students)
            break
