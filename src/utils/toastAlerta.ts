import { toast } from 'react-toastify';

export function toastAlerta(mensagem: string, tipo: string) {
    switch (tipo) {

        case 'sucesso':
            toast.success(mensagem, {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: 'light',
                progress: undefined,
            });
            break;

        case 'info':
            toast.info(mensagem, {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: 'light',
                progress: undefined,
            });
            break;

        case 'erro':
            toast.error(mensagem, {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: 'light',
                progress: undefined,
            });
            break;

        default:
            toast.info(mensagem, {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: 'light',
                progress: undefined,
            });
            break;
    }
}