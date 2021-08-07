import { toast } from 'react-toastify';

let notify = (type: 'success' | 'warning', text: string, id?: string) => {
  if (type === 'warning') {
    if (id) {
      return toast.warn(text, {
        hideProgressBar: true,
        className: 'toastWarning',
        toastId: id,
      });
    }
    return toast.warn(text, {
      hideProgressBar: true,
      className: 'toastWarning',
    });
  }
  return toast.success(text, {
    hideProgressBar: true,
    className: 'toastSuccess',
  });
};

export default notify;
