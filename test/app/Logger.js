import { reactive } from 'vue'

export const logs = reactive([])

export function log(msg) {
  logs.push(
    msg
  )

  console.log(msg)
}
