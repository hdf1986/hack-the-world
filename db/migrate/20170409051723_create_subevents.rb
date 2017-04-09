class CreateSubevents < ActiveRecord::Migration[5.0]
  def change
    create_table :subevents do |t|
      t.integer :amount
      t.string :type_content,     default: 0
      t.string :type_interaction, default: 0
      t.string  :text
      t.string  :image_url
      t.string  :original_link
      t.string  :name
      t.string  :profile_picture
      t.string  :nick
      t.string  :uid,              default: ""
      t.references :hashtag
      t.string :social_network
      t.datetime :when


      t.timestamps
    end
  end
end
