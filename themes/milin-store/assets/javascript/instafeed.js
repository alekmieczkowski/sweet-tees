var userFeed = new Instafeed({
    get: 'user',
    userId: '607661492',
    clientId: '130601635f1c44648c26aee8eb5b2909',
    accessToken: '607661492.1677ed0.f407e50b161b411297d27bd196ca1534',
    resolution: 'thumbnail',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}"/><span> &nbsp; </span></a>',
    sortBy: 'most-recent',
    limit: 15,
    links: false
  });
  userFeed.run();