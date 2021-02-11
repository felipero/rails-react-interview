class Api::V1::CategoriesController < ApplicationController
  def index
    render json: Category.all.to_json
  end

  def show
    render json: Category.includes(:products).find_by(id: category_params[:id]).to_json
  end

  private

  def category_params
    params.require(:category).permit(:id)
  end
end
