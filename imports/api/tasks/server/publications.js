if(Meteor.isServer) {
  // this code will only run on server
  // here, We publish players collection to the client
  Meteor.publish('players', () => {
    return PlayerList.find();
  })
}
