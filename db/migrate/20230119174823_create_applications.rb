class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.integer :list_id
      t.string :company
      t.string :job_title
      t.text :description
      t.string :bg_color, default: '#FFFFFF'

      t.timestamps
    end
  end
end
