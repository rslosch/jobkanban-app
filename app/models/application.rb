class Application < ApplicationRecord
    belongs_to :list

    before_create :set_position

    before_update :update_positions

    default_scope { order(position: :asc) }

    private

    def set_position
        self.position = list.applications.count
    end

    #handles the reordering of the positions of the applications if the position of one is changed/updated
    def update_positions
        if position_changed?
          if position > position_was
            Application.where(list: list)
              .where('position <= ? AND position > ?', position, position_was)
              .update_all("position = position - 1")
          else
            Application.where(list: list)
              .where('position >= ? AND position < ?', position, position_was)
              .update_all("position = position + 1")
          end
        end
    end

end
