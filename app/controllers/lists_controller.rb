class ListsController < ApplicationController

    def index
        lists = List.all.uniq
        render json: lists, include: :applications
    end

    def create
        list = List.create(list_params)
        if list.valid?
            render json: list, include: :applications
        else
            render json: { errors: list.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        list = List.find(params[:id])
        if list
            list.update(list_params)
            render json: list
        else
            render json: { error: "Not Found" }, status: :unauthorized
        end
    end

    def destroy
        list = List.find(params[:id])
        list.destroy
    end

    private

    def list_params
        params.permit(:name)
    end
end
