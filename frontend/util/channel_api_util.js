export const fetchChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/channels'
  })
);

export const fetchAllChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/channels',
    data: {allChannels: true}
  })
)

export const fetchChannel = id => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${id}`
  })
);

export const createChannel = channel => {
   return $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: { channel }
  })
};

export const updateChannel = channel => (
  $.ajax({
    method: 'PATCH',
    url: `api/channels/${channel.id}`,
    data: { channel }
  })
);

export const removeChannel = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/channels/${id}`
  })
};
