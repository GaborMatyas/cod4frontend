import { toast } from 'react-toastify';

import { ToastIds } from './toast-message.constants';

export const showErrorToastMessage = (message: string, position: any, id: ToastIds) => {
    toast.error(message, {
        position: position,
        toastId: id,
        autoClose: 8000
    })
};