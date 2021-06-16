import * as I from 'shared/interfaces'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class Vitrine {
  public async getProducts(): Promise<I.VitrineProduct[] | null> {
    return await fetch('http://localhost:3000/catalogo', {
      method: 'GET',
    }).then(async (response) => {
      const data = await response.json()

      return data
    })
  }

  public sendNewsletter({ name }: I.NewsLetter): void {
    MySwal.fire({
      title: '<p class="modal-title">Cadastro realizado com sucesso</p>',
      text: `Obrigado ${name}, até mais :)`,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
    })
  }
}

export const VitrineService = new Vitrine()
