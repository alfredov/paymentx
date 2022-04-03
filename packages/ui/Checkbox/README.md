# checkbox

## Installation

```sh
$ yarn add @bits-x/checkbox
# or
$ npm install @bits-x/checkbox
```

## Usage
```js
import { Label, Checkbox } from '@bits-x/checkbox'

<Checkbox id="input1" onChange={value => console.log(value)}>
  <Label css={{ color: 'red' }}>Check this</Label>
  <Label>Check THAT</Label>
</Checkbox>
<Checkbox disabled name="check4">
  <Label>45</Label>
</Checkbox>
<Checkbox id="input2" name="check4">
  <Label>Check if you are older than 20</Label>
</Checkbox>
<Checkbox id="input3" name="foreign">
  <Label>Check if you are foreign</Label>
</Checkbox>
```
