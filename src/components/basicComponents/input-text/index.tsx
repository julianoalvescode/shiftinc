import React from 'react'

import './styles.scss'

export const InputText = ({
  placeholder = 'Placeholder',
  type = 'text',
  name = 'email',
  register,
}: {
  placeholder: string
  type: string
  register: any
  name: string
}): React.ReactElement => {
  return <input className="input" {...register(name)} type={type} placeholder={placeholder} />
}
