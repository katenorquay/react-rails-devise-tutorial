class WelcomesController < ApplicationController
  
  def index
    @welcomes = Welcome.all
  end
end
