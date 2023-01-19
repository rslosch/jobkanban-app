# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'

puts "SEEDING DATA"

List.destroy_all
Application.destroy_all

lists = List.create([{ name: "Wishlist" }, { name: "Applied" }, { name: "Interview"},{ name: "Offer" }])

wishlist = List.first
applied = List.second
interview = List.third
offer = List.fourth

wishlist.applications.create!(
    company: "Snapchat",
    job_title: "Snapchat News Curator",
    description: Faker::Lorem.paragraph(sentence_count: 10),
    bg_color: Faker::Color.hex_color
)

wishlist.applications.create!(
    company: "Twitter",
    job_title: "Crisis Management Intern",
    description: Faker::Lorem.paragraph(sentence_count: 10),
    bg_color: Faker::Color.hex_color
)

wishlist.applications.create!(
    company: "Open AI",
    job_title: "Prompt Engineer ;)",
    description: Faker::Lorem.paragraph(sentence_count: 11),
    bg_color: Faker::Color.hex_color
)

wishlist.applications.create!(
    company: "FTX",
    job_title: "Risk Management Executive",
    description: Faker::Lorem.paragraph(sentence_count: 8),
    bg_color: Faker::Color.hex_color
)

applied.applications.create!(
    company: "Twitch",
    job_title: "24hour Streaming Unpaid Intern",
    description: Faker::Lorem.paragraph(sentence_count: 7),
    bg_color: Faker::Color.hex_color
)

applied.applications.create!(
    company: "Zillow",
    job_title: "Real Estate Appraiser",
    description: Faker::Lorem.paragraph(sentence_count: 9),
    bg_color: Faker::Color.hex_color
)

applied.applications.create!(
    company: "Tesla",
    job_title: "Remote Control Chauffeur",
    description: Faker::Lorem.paragraph(sentence_count: 8),
    bg_color: Faker::Color.hex_color
)

interview.applications.create!(
    company: "Google",
    job_title: "AI Ethics",
    description: Faker::Lorem.paragraph(sentence_count: 7),
    bg_color: Faker::Color.hex_color
)

interview.applications.create!(
    company: "Apple",
    job_title: "Precious Metals Miner",
    description: Faker::Lorem.paragraph(sentence_count: 10),
    bg_color: Faker::Color.hex_color
)

interview.applications.create!(
    company: "Uber",
    job_title: "Driver",
    description: Faker::Lorem.paragraph(sentence_count: 8),
    bg_color: Faker::Color.hex_color
)

interview.applications.create!(
    company: "Meta",
    job_title: "Full Time ZuckerVerse Resident",
    description: Faker::Lorem.paragraph(sentence_count: 12),
    bg_color: Faker::Color.hex_color
)

offer.applications.create!(
    company: "Your Company",
    job_title: "I need this",
    description: Faker::Lorem.paragraph(sentence_count: 10),
    bg_color: Faker::Color.hex_color
)

puts "DONE SEEDING!"