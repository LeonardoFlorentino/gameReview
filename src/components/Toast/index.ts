import { toast } from 'react-toastify'

export const treatResponse = (response: number, notShow: Array<Number>) => {
    if (response === 200 && !notShow.includes(200)) {
        toast.success(`Usuário encontrado`,
            {
                position: "top-center",
                autoClose: 1500
            })
    }
    if (response === 404 && !notShow.includes(404)) {
        toast.error("Usuário não encontrado", {
            autoClose: 3000
        })
    }
    if (response === 403 && !notShow.includes(403)) {
        toast.error("Limite de tentativas excedido", {
            autoClose: 3000
        })
    }
}