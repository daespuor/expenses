import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)

export const Toast = MySwal.mixin({
  toast: true,
  timer: 5000,
  position: "top-end",
  timerProgressBar: true,
  showCloseButton: false,
  showConfirmButton: false,
})

export const Dialog = MySwal.mixin({
  cancelButtonText: "Close",
  confirmButtonText: "Save",
  showCancelButton: false,
  showConfirmButton: true,
})
