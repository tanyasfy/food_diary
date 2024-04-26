import { Ref, inject, ref } from "vue"
import { useUsersData } from '@/stores/users'
import { useBreakfestData } from '@/stores/breakfest'
import { useFoodData } from "@/stores/food"

const EquipmentsSymbol = Symbol()

let connection: WebSocket

const setupWebsocket = (
  onMessage: (message: { [key: string]: any }) => void,
  connectionState: Ref<boolean>
) => {
  const protocol = 'ws'
  connection = new WebSocket(`${protocol}://${location.hostname}:3000/ws`)

  connection.onopen = () => {
    connectionState.value = true
  }

  connection.onmessage = (ev) => {
    const message = JSON.parse(ev.data)
    if (message == null) {
      return
    }

    onMessage(message)
  }

  connection.onclose = () => {
    connectionState.value = false
    setTimeout(() => setupWebsocket(onMessage, connectionState), 10 * 1000)
  }
}

/**
 * Provide WebSocket service
 */
export const provideWebsocketService = (): void => {
  const connectionState = ref<boolean>(false)

  const usersStore = useUsersData();
  const breakfestStore = useBreakfestData();
  const foodStore = useFoodData()

  const onMessage = (message: any) => {
    const type = message.type
    const action = message.action
    if (type && action) {
      const payload = message.payload
      if (type === 'users') {
        if (action === 'update') {
          console.log(payload)
          usersStore.replaceUserData(payload)
        }
      } else if (type === 'usersUpdate') {
          console.log(payload)
        usersStore.addNewData(payload)
      } else if (type === 'breakfest') {
        if (action === 'update') {
          console.log(payload)
          breakfestStore.replaceBreakfestData(payload)
        }
      } else if (type === 'food') {
        if (action === 'update') {
          console.log(payload)
          foodStore.getFoodData(payload)
        }
      } else if (type === 'categories') {
        if (action === 'update') {
          console.log(payload)
          foodStore.getCategoryData(payload)
        }
      }
    } else {
      // eslint-disable-next-line no-console
      console.error(
        'Received invalid message format, a type and an action field is required.',
        message
      )
    }
  }

  setupWebsocket(onMessage, connectionState)
}
// TODO this should probably move somewhere else.
// Check Equipment Tiles for timeout

interface WebsocketService {
  initialized: Ref<boolean>
  serverEquipmentCount: Ref<number>
  connectionState: Ref<boolean>
  mqtt: {
    connectionState: boolean | null
    connectionString: string | null
    error: string | null
  }
  requestEquipmentDetails: (equipmentName: string, line: string) => void
}

/**
 * Inject WebSocket service
 */
export const useWebsocketService = (): WebsocketService => {
  const store = inject<WebsocketService>(EquipmentsSymbol)
  if (!store) {
    throw Error('No WebsocketService provided')
  }
  return store
}
