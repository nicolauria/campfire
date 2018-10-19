# README

Campfire is a Slack clone built using a Rails backend and React/Redux frontend framework.

## Live Chat

Campfire utilizes Action Cable Web Sockets. When a user selects a channel, a subscription for the channel is created on the frotentd. All messages sent over that channel are immediately received by other users subscribed to the channel.

```
#frontend/actions/channel_actions.js
export const createChannelSubscription = (channelId, receiveMessage) => dispatch => {
  App[channelId] = App.cable.subscriptions.create(
    {channel: "MainChannel", id: channelId},
    {
      received: function(data) {
        const message = JSON.parse(data.message);
        receiveMessage(message);
      },
      speak: function(message) {
        return this.perform('speak', { message });
      }
  })
 ```
 
 On the backend, a stream is created. All messages sent over a channel are immediately received by other users subscribed to the channel.
 
 ```
 #app/channels/main_channel.rb
 def subscribed
    stream_from "main_channel"
 end
```

## Schema

Channels, messages, and subscriptions are used for the messaging feature. Channels have both a private and direct_message boolean allowing for different messaging states.

## Storage

All data is stored on a Postgresql database. Images are stored on AWS servers using Active Storage.

## Future Improvements

* Dynamic rendering of user names on direct messages
* Private toggle box on create channel form
* Ability to upload gifs
* More seed data
* Ability to edit messages
 
