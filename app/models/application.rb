class Application < ApplicationRecord
    belongs_to :list

    before_create :set_position

    default_scope { order(position: :asc) }

    private

    def set_position
        self.position = list.applications.count + 1
    end

end
