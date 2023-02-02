class ApplicationsController < ApplicationController

    before_action :get_list

    def index
        applications = Application.all.uniq
        render json: applications
    end

    def create
        application = @list.applications.create(application_params)
        if application.valid?
            render json: application
        else
            render json: { errors: application.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        application = @list.applications.find(params[:id])
        application.destroy
    end

    private

    def get_list
        @list = List.find(params[:list_id])
    end

    def application_params
        params.permit(:description, :company, :job_title, :bg_color, :list_id)
    end

end
