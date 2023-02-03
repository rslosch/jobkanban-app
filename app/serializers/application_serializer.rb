class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :list_id, :company, :job_title, :description, :bg_color, :position
end
