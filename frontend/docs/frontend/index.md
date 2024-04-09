## :toolbox: Functions

- [calculateBMI](#gear-calculatebmi)
- [generateUID](#gear-generateuid)
- [getLeftPosition](#gear-getleftposition)
- [state](#gear-state)
- [provideWebsocketService](#gear-providewebsocketservice)
- [useWebsocketService](#gear-usewebsocketservice)

### :gear: calculateBMI

Calculate BMI

| Function | Type |
| ---------- | ---------- |
| `calculateBMI` | `(weight: number, height: number) => { bmi: number; normalBW: number; }` |

### :gear: generateUID

| Function | Type |
| ---------- | ---------- |
| `generateUID` | `() => string` |

### :gear: getLeftPosition

| Function | Type |
| ---------- | ---------- |
| `getLeftPosition` | `(bmiCalc: number) => string or undefined` |

### :gear: state

| Function | Type |
| ---------- | ---------- |
| `state` | `() => { usersData: Users[]; }` |

### :gear: provideWebsocketService

Provide WebSocket service

| Function | Type |
| ---------- | ---------- |
| `provideWebsocketService` | `() => void` |

### :gear: useWebsocketService

Inject WebSocket service

| Function | Type |
| ---------- | ---------- |
| `useWebsocketService` | `() => WebsocketService` |


## :wrench: Constants

- [baseUrl](#gear-baseurl)

### :gear: baseUrl

BaseURL for service calls

| Constant | Type |
| ---------- | ---------- |
| `baseUrl` | `string` |



## :tropical_drink: Interfaces

- [Users](#gear-users)

### :gear: Users



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `user_id` | `string or undefined` | user id |
| `user_name` | `string or undefined` |  |
| `user_vorname` | `string` |  |
| `user_weight` | `number or undefined` |  |
| `user_height` | `number or undefined` |  |
| `user_birth` | `string or undefined` |  |

