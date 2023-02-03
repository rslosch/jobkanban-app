class AddPositionToApplication < ActiveRecord::Migration[7.0]
  def change
    add_column :applications, :position, :integer
  end
end
