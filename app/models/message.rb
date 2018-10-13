class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :user
  belongs_to :channel
  
  after_create_commit { MessageBroadcastJob.perform_later( self )}
end
