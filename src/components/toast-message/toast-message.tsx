import { toast, ToastPosition } from 'react-toastify';

import { ToastIds } from './toast-message.constants';

export enum ToastType {
    Info = 'info',
    Error = 'error',
    Success = 'success'
}

export const showToastMessage = (message: string, position: ToastPosition, toastId: ToastIds, type: ToastType, autoClose = 8000) => {
    const options = {
        position,
        toastId,
        autoClose
    }
    switch (type) {
        case ToastType.Error: {
            toast.error(message, options);
            break;
        }
        case ToastType.Info: {
            toast.info(message, options);
            break;
        }
        default: return false;
    }
};
