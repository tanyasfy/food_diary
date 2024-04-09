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

- [WebsocketMessage](#gear-websocketmessage)
- [TypeOrmOpts](#gear-typeormopts)

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

