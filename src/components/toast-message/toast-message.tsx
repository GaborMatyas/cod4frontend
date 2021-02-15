import { toast } from 'react-toastify';

export const showErrorToastMessage = (message: string, position: any) => {
    toast.error(message, {
        position: position,
        autoClose: 8000
    })
};