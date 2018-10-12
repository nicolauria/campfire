export const requestChannelMessages = (channelId) => (
  $.ajax({
    method: 'get',
    url: `api/channels/${channelId}/messages`
  })
);
