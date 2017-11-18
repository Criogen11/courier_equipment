class CreateCouriers < ActiveRecord::Migration[5.1]
  def change
  	create_table :couriers do |t|
  		t.text :name
  		t.text :company
			t.date :date_create
			t.text :type_courier
			t.boolean :work	
  		t.timestamps
		end	
		
		
  end
end
