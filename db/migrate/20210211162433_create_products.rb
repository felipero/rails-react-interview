class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.string :description
      t.decimal :price, null: false

      t.timestamps
    end
  end
end
