import { useEffect } from 'react';
import { CloseIcon } from '../layout/icons';

export default function Modal({ title, onClose, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__panel">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button type="button" className="shell__icon-btn" onClick={onClose} aria-label="Fechar">
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
