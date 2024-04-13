# App

---
# MassIndex

## Props

| Prop name    | Description                                                                                          | Type    | Values | Default |
| ------------ | ---------------------------------------------------------------------------------------------------- | ------- | ------ | ------- |
| bmi          | The BMI (Body Mass Index) - a numerical indicator of health or lack thereof.                         | number  | -      |         |
| leftPosition | The left position for a graphical indicator - because being centered is so last season.              | string  | -      |         |
| flag         | A flag to indicate something - because sometimes, you just need to raise a flag and see who salutes. | boolean | -      |         |
| normalBW     | The normal body weight - a benchmark for comparison, like the gold standard but for your body.       | number  | -      |         |
| stoffWechsel | The metabolic rate - because your body's furnace needs fuel to burn.                                 | number  | -      |         |

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

| Prop name | Description                                                                   | Type  | Values | Default |
| --------- | ----------------------------------------------------------------------------- | ----- | ------ | ------- |
| userData  | User data - because every component needs to know who's who in the userverse. | Users | -      |         |

---
# HomeView

---
# UserDetails

## Props

| Prop name | Description | Type   | Values | Default |
| --------- | ----------- | ------ | ------ | ------- |
| userId    |             | string | -      |         |

---
