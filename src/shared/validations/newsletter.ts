import * as yup from 'yup'

export const schema = yup.object().shape({
  email: yup.string().required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório'),
})
