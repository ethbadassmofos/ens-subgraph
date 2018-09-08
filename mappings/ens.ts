export function domainRegistered(event: NewOwner): void {
  let node = event.params.node.toHex()
  let label = event.params.node.toHex()
  // let address = event.params.address

  let registration = new Entity()
  registration.setString('node', node)
  registration.setString('label', label)
  // registration.setString('owner', `${address}`)

  store.set('Registration', `${node}-${label}`, registration)
}
