class CreatePlanshets < ActiveRecord::Migration[5.1]
  def change
		create_table :planshets do |t|
			t.text :courier_id
  		t.text :manufactured_company
  		t.text :sn
			t.date :date_create
			t.boolean :work
			t.text :comment

  		t.timestamps
  	end	
  end
end
