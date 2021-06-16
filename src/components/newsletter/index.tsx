import React from 'react'

import * as C from 'components'
import './styles.scss'

import { VitrineService } from 'services'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from 'shared/validations/newsletter'

export const NewsLetter = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data: { email: string; name: string }): void => {
    VitrineService.sendNewsletter(data)
  }

  return (
    <section className="newsletter-container">
      <h1 className="title"> assine nossa newsletter </h1>
      <p className="description">
        Fique por dentro das nossas novidades e receba 10% de desconto na primeira compra.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="box-input">
          <C.InputText name="name" register={register} placeholder="Name" type="text" />
          {errors.name?.message}
        </div>
        <div className="box-input">
          <C.InputText name="email" register={register} placeholder="Email" type="email" />
          {errors.email?.message}
        </div>
        <button className="btn-newsletter" type="submit">
          ENVIAR
        </button>
      </form>
    </section>
  )
}
