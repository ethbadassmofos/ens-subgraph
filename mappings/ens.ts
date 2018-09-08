export function nameRegistered(event: NewOwner): void {
  let node = event.params.node.toHex()
  let label = event.params.node.toHex()
  let owner = event.params.owner

  let registration = new Entity()
  registration.setString('node', node)
  registration.setString('label', label)
  registration.setAddress('owner', owner)

  store.set('Registration', node + '-' + label, registration)
}

export function nameTransferred(event: Transfer): void {
  let node = event.params.node.toHex()
  let owner = event.params.owner

  let transfer = new Entity()
  transfer.setString('node', node)
  transfer.setAddress('owner', owner)

  store.set('Transfer', node/* + owner*/, transfer)
}
