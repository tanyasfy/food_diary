## :toolbox: Functions

- [calculateBMI](#gear-calculatebmi)
- [grundStoffWechsel](#gear-grundstoffwechsel)
- [generateUID](#gear-generateuid)
- [getAge](#gear-getage)
- [getLeftPosition](#gear-getleftposition)
- [state](#gear-state)
- [provideWebsocketService](#gear-providewebsocketservice)
- [useWebsocketService](#gear-usewebsocketservice)

### :gear: calculateBMI

Calculate BMI

| Function | Type |
| ---------- | ---------- |
| `calculateBMI` | `(weight: number, height: number, gender?: number) => { bmi: number; normalBW: number; }` |

### :gear: grundStoffWechsel

| Function | Type |
| ---------- | ---------- |
| `grundStoffWechsel` | `(weight: number, height: number, gender?: number, age?: number) => number or undefined` |

### :gear: generateUID

Generate userId for a Saving to the DB

| Function | Type |
| ---------- | ---------- |
| `generateUID` | `() => string` |

### :gear: getAge

Get age in years from date of birth

| Function | Type |
| ---------- | ---------- |
| `getAge` | `(birth: string or undefined) => number or undefined` |

### :gear: getLeftPosition

Left Position for a flag and Color of BMI in BMI Grafik

| Function | Type |
| ---------- | ---------- |
| `getLeftPosition` | `(bmiCalc: number) => { position: string; colour: any; } or undefined` |

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
| `user_name` | `string or undefined` | user name |
| `user_vorname` | `string` |  |
| `user_weight` | `number or undefined` |  |
| `user_height` | `number or undefined` |  |
| `user_birth` | `string or undefined` |  |
| `user_gender` | `number or undefined` |  |
| `user_bmi` | `string or undefined` |  |

