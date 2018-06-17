let Mediator = function () {
  let channels = {}

  let subscribe = function(channel, context, func) {
    if (!this.channels[channel]) {
      this.channels[channel] = []
    }
    this.channels[channel].push({ context, func })
  }

  let publish = function(channel) {
    if (!this.channels[channel]) {
      return false
    }

    let args = Array.prototype.slice.call(arguments, 1)

    for(let i = 0; i < this.channels[channel].length; i++) {
      let sub = this.channels[channel][i]
      sub.func.apply(sub.context, args)
    }
  }

  return {
    channels,
    subscribe,
    publish
  }
}

module.exports = new Mediator()