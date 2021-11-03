class AddUserRefToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :post, null: false, foreign_key: true
    add_reference :comments, :comment, null: false, foreign_key: true
  end
end
