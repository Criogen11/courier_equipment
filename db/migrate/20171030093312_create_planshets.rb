class CreatePlanshets < ActiveRecord::Migration[5.1]
  def change
		create_table :planshets do |t|
			t.integer :courier_id
  		t.text :manufactured_company
  		t.text :sn
			t.date :date_create
			t.boolean :work
			t.boolean :delet
			t.text :comment

  		t.timestamps
		end
		
  end
end
