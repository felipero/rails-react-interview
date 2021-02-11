# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create(title: 'Robotics')
Category.create(title: 'Artificial Intelligence')
Category.create(title: 'Ecommerce')
Category.create(title: 'News Media')

Product.create(
  title: 'Robot Butler',
  description: 'Delivers you breakfast in bed.',
  price: 1_000_000,
  category_ids: [1, 2]
)

Product.create(
  title: 'Daily Sports News',
  description: 'Latest news of the day',
  price: 100,
  category_ids: [3, 4]
)

Product.create(title: '1', description: 'first', price: 100, category_ids: [1, 3])
Product.create(title: '2', description: 'second', price: 100, category_ids: [2, 4])
Product.create(title: '3', description: 'third', price: 100, category_ids: [1, 4])
Product.create(title: '4', description: 'four', price: 100, category_ids: [2, 3])
Product.create(title: '5', description: 'fifth', price: 100, category_ids: [3, 4])
