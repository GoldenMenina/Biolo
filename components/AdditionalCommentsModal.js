import React from 'react';

const AdditionalCommentsModal = ({ isOpen, onClose, comments, setComments, onSend }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Additional Comments</h2>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Enter any additional comments about your order..."
          className="w-full h-32 p-2 border border-gray-300 rounded mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button 
            onClick={onSend}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCommentsModal;