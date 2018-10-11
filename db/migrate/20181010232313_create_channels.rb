class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.boolean :private, null: false
      t.text :description, null: false
      t.boolean :direct_message

      t.timestamps
    end
  end
end
