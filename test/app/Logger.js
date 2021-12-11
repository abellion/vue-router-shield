export const logs = []

export function log(msg) {
  logs.push(
    msg
  )

  console.log(msg)
}
