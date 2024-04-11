# App

---
# MassIndex

## Props

| Prop name     | Description | Type    | Values | Default |
| ------------- | ----------- | ------- | ------ | ------- |
| bmi           |             | number  | -      |         |
| leftPosition  |             | string  | -      |         |
| flag          |             | boolean | -      |         |
| normalBW      |             | number  | -      |         |
| stoffWechseel |             | number  | -      |         |

---
# AddNewUser

## Props

| Prop name | Description | Type    | Values | Default |
| --------- | ----------- | ------- | ------ | ------- |
| open      | open modal  | boolean | -      |         |

## Events

| Event name | Properties | Description   |
| ---------- | ---------- | ------------- |
| close      |            | Dialog closed |

---
# EditInfoModal

## Props

| Prop name | Description          | Type    | Values | Default |
| --------- | -------------------- | ------- | ------ | ------- |
| open      | open modal           | boolean | -      |         |
| user      | User Data for update | Users   | -      |         |

## Events

| Event name | Properties | Description      |
| ---------- | ---------- | ---------------- |
| close      |            | Dialog closed    |
| edit       |            | emit access data |

---
# Modal

## Props

| Prop name | Description     | Type    | Values | Default |
| --------- | --------------- | ------- | ------ | ------- |
| open      | Currently open? | boolean | -      |         |
| title     | Popup title     | string  | -      |         |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| close      |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---
# SuccessMessage

## Props

| Prop name | Description | Type    | Values | Default |
| --------- | ----------- | ------- | ------ | ------- |
| open      | open modal  | boolean | -      |         |

## Events

| Event name | Properties | Description   |
| ---------- | ---------- | ------------- |
| close      |            | Dialog closed |

---
# UserData

## Props

| Prop name | Description | Type  | Values | Default |
| --------- | ----------- | ----- | ------ | ------- |
| userData  | User data   | Users | -      |         |

---
# HomeView

---
# UserDetails

## Props

| Prop name | Description | Type   | Values | Default |
| --------- | ----------- | ------ | ------ | ------- |
| userId    |             | string | -      |         |

---
