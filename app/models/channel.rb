class Channel < ApplicationRecord
  validates :name, :description, presence: true
  validates :private, inclusion: { in: [true, false] }

  has_many :subscriptions
  has_many :users, through: :subscriptions
  has_many :messages
end
