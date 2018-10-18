class Api::SubscriptionsController < ApplicationController

  def create
    # this is a comment
    # this is another comment
    # debugger
    Subscription.create(user_id: current_user.id)
  end
end
