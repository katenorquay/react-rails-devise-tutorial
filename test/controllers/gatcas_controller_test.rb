require 'test_helper'

class GatcasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gatca = gatcas(:one)
  end

  test "should get index" do
    get gatcas_url
    assert_response :success
  end

  test "should get new" do
    get new_gatca_url
    assert_response :success
  end

  test "should create gatca" do
    assert_difference('Gatca.count') do
      post gatcas_url, params: { gatca: {  } }
    end

    assert_redirected_to gatca_url(Gatca.last)
  end

  test "should show gatca" do
    get gatca_url(@gatca)
    assert_response :success
  end

  test "should get edit" do
    get edit_gatca_url(@gatca)
    assert_response :success
  end

  test "should update gatca" do
    patch gatca_url(@gatca), params: { gatca: {  } }
    assert_redirected_to gatca_url(@gatca)
  end

  test "should destroy gatca" do
    assert_difference('Gatca.count', -1) do
      delete gatca_url(@gatca)
    end

    assert_redirected_to gatcas_url
  end
end
