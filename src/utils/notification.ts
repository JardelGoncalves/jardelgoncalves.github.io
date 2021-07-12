import { toast, ToastOptions } from 'react-toastify'

const notificationConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  role: 'alert'
}

export class Notification {
  static error(message: string) {
    toast.error(message, notificationConfig)
  }

  static success(message: string) {
    toast.success(message, notificationConfig)
  }
}
