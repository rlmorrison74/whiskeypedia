class RemoveRefFromPost < ActiveRecord::Migration[6.1]
  def change
    remove_reference :comments, :comments, null: false, foreign_key: true
    remove_reference :comments, :comment, null: false, foreign_key: true
    remove_reference :posts, :post, null: false, foreign_key: true
  end
end
