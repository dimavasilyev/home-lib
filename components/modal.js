import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ children, onClose, title, customStyles, ...props }) => {
  return (
    <ReactModal
      onRequestClose={onClose}
      ariaHideApp={false}
      {...props}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '10%',
          left: '15%',
          right: '15%',
          bottom: 'auto',
          maxHeight: '85vh',
        },
        ...customStyles,
      }}
    >
      <div className="flex justify-between pb-6 items-start bg-primary">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button
          onClick={onClose}
          className="rounded-lg rounded-lg focus:outline-none focus:shadow-outline"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {children}
      <style jsx global>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
    </ReactModal>
  );
};

const memoizedModal = React.memo(Modal);

export default memoizedModal;
