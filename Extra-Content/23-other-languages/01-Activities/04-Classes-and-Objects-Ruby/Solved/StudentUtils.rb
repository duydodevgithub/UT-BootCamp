#!/usr/bin/env ruby

module StudentUtils

  class Student

    attr_reader :first_name, :last_name, :middle, :address, :email, :phone

    def initialize(first, last, middle, address, email, phone)
      @first_name = first
      @last_name = last
      @middle_initial = middle

      @address = address
      @email = email
      @phone = phone
    end

    def print_info
      puts "#{@first_name} #{@middle_initial} #{@last_name}"
      puts "#{@address} #{@email} #{@phone}"
    end

  end


  class Roster

    attr_reader :students

    def initialize
        @students = Array.new
    end

    def add(student)
      @students << student
    end

    def summarize
      @students.each do | student |
        puts "Contact info for #{student.first_name} #{student.last_name} is:"
        student.print_info
      end
    end

  end

end
