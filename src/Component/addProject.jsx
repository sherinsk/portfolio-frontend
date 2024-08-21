import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import Modal from 'react-modal';
import getCroppedImg from './cropImageHelper';

// Set the app element for accessibility
Modal.setAppElement('#root');

const AddProjectForm = () => {
  const [description, setDescription] = useState('');
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setModalIsOpen(true); // Open modal when a new image is selected
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedArea);
      setCroppedImage(croppedImage);
      setModalIsOpen(false); // Close modal after cropping
    } catch (e) {
      console.error(e);
    }
  }, [croppedArea, imageSrc]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !croppedImage) {
      alert('Please add a description and crop the image.');
      return;
    }

    // Assuming you want to send the data to the backend
    const formData = new FormData();
    formData.append('description', description);

    // Convert cropped image to Blob
    const response = await fetch(croppedImage);
    const blob = await response.blob();
    formData.append('image', blob, 'cropped-image.jpg');

    // Example of how you might send the data to the backend
    try {
      const res = await fetch('https://portfolio-backend-ebon-five.vercel.app/project', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        alert('Project added successfully!');
        // Reset form
        setDescription('');
        setImageSrc(null);
        setCroppedImage(null);
      } else {
        alert('Failed to upload project.');
      }
    } catch (err) {
      console.error('Error uploading project:', err);
    }
  };

  return (
    <div className="container mx-auto p-8 mb-[175px]">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>
      <form onSubmit={handleSubmit}>
        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="mt-1 block w-full h-[150px] p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter project description"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Cropped Image Preview */}
        {croppedImage && (
          <div className="mt-4 flex justify-left">
            <img src={croppedImage} alt="Cropped" className="max-w-xs" />
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-6 flex justify-left">
          <button
            type="submit"
            className="px-8 py-4 bg-green-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Crop Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative w-full max-w-2xl bg-white rounded-lg p-4">
          {/* <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-2 right-2 text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> */}
          <div className="relative w-full h-64">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={16 / 9}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={showCroppedImage}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Crop Image
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddProjectForm;
