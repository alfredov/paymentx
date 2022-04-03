import React from 'react'

import { Label, Checkbox } from './index'

const meta = {
  title: 'ui/Checkbox',
}

const loremIpsum = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus neque officia quidem natus facere quia autem saepe minima quas! Odit nisi beatae facilis reprehenderit perferendis non dicta, nostrum harum mollitia?'

export const verticalGroup = () => (
  <div>
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
  </div>
)

export const inlineGroup = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
    <Checkbox name="check1">
      <Label>{loremIpsum}</Label>
    </Checkbox>
    <Checkbox name="check2">
      <Label>{loremIpsum}</Label>
    </Checkbox>
  </div>
)

export const UsingInForm = () => (
  <form action="/checkbox-in-static-form">
    <Checkbox name="gdpr">
      Accepts all GDPR requirements
    </Checkbox>
    <Checkbox name="foreign">
      Check if you are foreign
    </Checkbox>
    <input style={{ marginTop: '20px' }} type="submit" value="submit this form" />
  </form>
)
export default meta
