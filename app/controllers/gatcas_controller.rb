class GatcasController < ApplicationController
  before_action :set_gatca, only: [:show, :edit, :update, :destroy]

  # GET /gatcas
  # GET /gatcas.json
  def index
    @gatcas = Gatca.all
  end

  # GET /gatcas/1
  # GET /gatcas/1.json
  def show
  end

  # GET /gatcas/new
  def new
    @gatca = Gatca.new
  end

  # GET /gatcas/1/edit
  def edit
  end

  # POST /gatcas
  # POST /gatcas.json
  def create
    @gatca = Gatca.new(gatca_params)

    respond_to do |format|
      if @gatca.save
        format.html { redirect_to @gatca, notice: 'Gatca was successfully created.' }
        format.json { render :show, status: :created, location: @gatca }
      else
        format.html { render :new }
        format.json { render json: @gatca.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /gatcas/1
  # PATCH/PUT /gatcas/1.json
  def update
    respond_to do |format|
      if @gatca.update(gatca_params)
        format.html { redirect_to @gatca, notice: 'Gatca was successfully updated.' }
        format.json { render :show, status: :ok, location: @gatca }
      else
        format.html { render :edit }
        format.json { render json: @gatca.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /gatcas/1
  # DELETE /gatcas/1.json
  def destroy
    @gatca.destroy
    respond_to do |format|
      format.html { redirect_to gatcas_url, notice: 'Gatca was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gatca
      @gatca = Gatca.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def gatca_params
      params.fetch(:gatca, {})
    end
end
