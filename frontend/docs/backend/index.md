## :toolbox: Functions

- [sendToClients](#gear-sendtoclients)
- [getUsers](#gear-getusers)

### :gear: sendToClients

Sends a message to all connected WebSocket clients

| Function | Type |
| ---------- | ---------- |
| `sendToClients` | `(clients: any, message: WebsocketMessage) => void` |

Parameters:

* `clients`: -
* `message`: -


### :gear: getUsers

Get all users from DB

| Function | Type |
| ---------- | ---------- |
| `getUsers` | `(fastify: FastifyInstance<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProviderDefault>) => Promise<...>` |


## :factory: User

Comment data definition and mapping to the database for our ORM

## :tropical_drink: Interfaces

- [Users](#gear-users)
- [WebsocketMessage](#gear-websocketmessage)
- [TypeOrmOpts](#gear-typeormopts)

### :gear: Users



| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `user_id` | `string` |  |
| `user_name` | `string or undefined` |  |
| `user_vorname` | `string` |  |
| `user_weight` | `number or undefined` |  |
| `user_height` | `number or undefined` |  |
| `user_birth` | `string or undefined` |  |
| `user_gender` | `number or undefined` |  |
| `user_bmi` | `string or undefined` |  |


### :gear: WebsocketMessage

Basic WebSocket message

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `type` | `string` |  |
| `action` | `string` |  |
| `payload` | `any` |  |


### :gear: TypeOrmOpts

Basic TypeORM options

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `path` | `string or undefined` |  |
| `logging` | `LoggerOptions or undefined` |  |

