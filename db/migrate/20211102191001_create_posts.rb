class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :subject
      t.string :content
      t.string :imgURL

      t.timestamps
    end
  end
end
