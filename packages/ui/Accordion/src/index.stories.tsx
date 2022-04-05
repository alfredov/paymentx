import * as React from 'react'

import * as Acordion from './index'

export default {
  title: 'ui/Accordion'
}

export const Template = () => {

  return (
    <Acordion.Root>
      <Acordion.Item value="section1">
        <Acordion.Trigger>
          <Acordion.Title>Nombre de categoría</Acordion.Title>
          <Acordion.PrimaryText>title</Acordion.PrimaryText>
          <Acordion.SecondaryText>Content title1</Acordion.SecondaryText>
        </Acordion.Trigger>
        <Acordion.Content>
          Contenido
        </Acordion.Content>
      </Acordion.Item>
      <Acordion.Item value="section2">
        <Acordion.Trigger>
          <Acordion.Title>Subrama de materia</Acordion.Title>
          <Acordion.PrimaryText>Dar click aqui</Acordion.PrimaryText>
        </Acordion.Trigger>
        <Acordion.Content>
          Contenido 🙏
        </Acordion.Content>
      </Acordion.Item>
    </Acordion.Root>
  )
}

