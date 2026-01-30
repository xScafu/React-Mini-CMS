export default function Modal({
  modalHeader,
  modalBody,
  modalFooter,
  modalId,
  cssClass,
  modalRef,
  modalOnClose,
}) {
  return (
    <>
      <dialog
        className={`modal ${cssClass}`}
        id={modalId}
        ref={modalRef}
        onClose={modalOnClose}
      >
        <div className="modal-header">{modalHeader}</div>
        <div className="modal-body">{modalBody}</div>
        <div className="modal-footer">{modalFooter}</div>
      </dialog>
    </>
  );
}
