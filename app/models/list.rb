class List < ApplicationRecord
    has_many :applications,  -> { order(created_at: :asc) }, dependent: :destroy

    default_scope { order(created_at: :asc) }

    validates :name, presence: true
    validates :name, uniqueness: true
    validates :name, length: { maximum: 20, too_long: "%{count} characters is the maximum allowed" }

end
