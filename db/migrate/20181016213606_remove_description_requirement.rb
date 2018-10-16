class RemoveDescriptionRequirement < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :description
    add_column :channels, :description, :string
  end
end
