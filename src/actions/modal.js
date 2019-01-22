export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';

export const closeModal = () => ({
  type: CLOSE_MODAL,
  isOpen: false,
});

export const openModal = () => ({
  type: OPEN_MODAL,
  isOpen: true,
});

export const clearModal = () => ({
  type: CLEAR_MODAL,
});
