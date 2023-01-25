class ListSerializer < ActiveModel::Serializer
  attributes :id, :name
  
  has_many :applications
end
