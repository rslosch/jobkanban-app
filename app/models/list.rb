class List < ApplicationRecord
    has_many :applications

    validates :name, presence: true
    validates :name, uniqueness: true
    validates :name, length: { maximum: 20, too_long: "%{count} characters is the maximum allowed" }
end
