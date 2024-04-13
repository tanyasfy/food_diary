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

Let's calculate that BMI - Body Mass Index, not Brain Munching Intensity.

| Function | Type |
| ---------- | ---------- |
| `calculateBMI` | `(weight: number, height: number, gender?: number) => { bmi: number; normalBW: number; }` |

Parameters:

* `weight`: - Your weight, preferably not after a heavy meal.
* `height`: - Your height, stand tall, don't slouch!
* `gender`: - Just a tiny bit of demographic flavoring; default is 1.


### :gear: grundStoffWechsel

Computes the Basal Metabolic Rate (BMR) - the number of calories your body needs to exist.
Basically, the caloric equivalent of keeping the lights on and the engine running.

| Function | Type |
| ---------- | ---------- |
| `grundStoffWechsel` | `(weight: number, height: number, gender?: number, age?: number) => number or undefined` |

Parameters:

* `weight`: - Your weight in kilograms; don't lie, your metabolism knows the truth!
* `height`: - Your height in centimeters; yes, those last two millimeters count.
* `gender`: - 1 for female, 2 for male, because tradition said so.
* `age`: - How many trips around the sun? This matters more than you think.


### :gear: generateUID

Generates a unique identifier (UUID) for saving to the database.
This isn't your average ID; it's a super ID with dashes and everything!

| Function | Type |
| ---------- | ---------- |
| `generateUID` | `() => string` |

### :gear: getAge

Calculates the age in years from a given date of birth.
It's like a time machine, but it only tells you how old you are.

| Function | Type |
| ---------- | ---------- |
| `getAge` | `(birth: string or undefined) => number or undefined` |

Parameters:

* `birth`: A date string in DD-MM-YYYY format, because consistency is key.


### :gear: getLeftPosition

Determines the left position and color for a BMI marker in a graphical representation.
It's not just about knowing your BMI, it's about seeing where it fits on the spectrum!

| Function | Type |
| ---------- | ---------- |
| `getLeftPosition` | `(bmiCalc: number) => { position: string; colour: any; } or undefined` |

Parameters:

* `bmiCalc`: The calculated BMI value to be plotted.


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

Defines the structure of user data stored in the system.
Because knowing your users is the first step to world domination, erm, I mean, customer satisfaction!

| Property | Type | Description |
| ---------- | ---------- | ---------- |
| `user_id` | `string or undefined` | The elusive user ID, like a unicorn in the wild. |
| `user_vorname` | `string` | The user's full name - because you're more than just a number, right? |
| `user_weight` | `number or undefined` | The user's weight in kilograms - gravity's constant reminder. |
| `user_height` | `number or undefined` | The user's height in centimeters - reaching new heights, literally. |
| `user_birth` | `string or undefined` | The user's date of birth in DD-MM-YYYY format - the anniversary of your grand entrance. |
| `user_gender` | `number or undefined` | The user's gender - because sometimes you need to know who's wearing the pants. |
| `user_bmi` | `string or undefined` | The user's BMI (Body Mass Index) - a numerical reflection of your relationship with gravity. |

