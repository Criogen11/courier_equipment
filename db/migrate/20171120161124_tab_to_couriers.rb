class TabToCouriers < ActiveRecord::Migration[5.1]
  def change
    create_table :rider_to_couriers do |t|
			t.integer :courier_id
  		t.text :rider_id
  		t.text :comment
			t.date :date_create
  		t.timestamps
		end
  end
end
