import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {

// Function to handle file download
const handleDownload = () => {
  // Replace 'path/to/your/file.pdf' with the actual file path
  const fileUrl = '/src/assets/myresume.pdf'; // File path (relative or absolute)
  const fileName = 'Himadri Resume.pdf'; // Name of the downloaded file

  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName; // Set the download file name
  document.body.appendChild(link);
  link.click(); // Trigger the download
  document.body.removeChild(link); // Clean up
};

  return (
    <div className='fixed w-full flex items-center justify-end z-10 px-4 sm:px-9 py-10 sm:py-16'>
        <button onClick={handleDownload} className='bg-black border-4 text-[15px] px-4 sm:px-9 py-1 sm:py-2 hover:bg-gray-400 rounded-full text-white transition-all duration-300 cursor-pointer shadow-md shadow-zinc-700 animate-pop'>My Resume</button>
        <div className="ml-4">
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="20 20 160 160"
          viewBox="20 20 160 160"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          role="img"
          aria-label="Minimal monochrome UX/UI design for a startup website by Anzo Studio."
          className="hover:rotate-[-90deg] transform transition duration-500 fill-current text-[#bcbcbc] cursor-pointer"
        >
          <g>
            <path d="M57.587 38.794c0 10.379-8.414 18.794-18.794 18.794S20 49.173 20 38.794 28.414 20 38.794 20s18.793 8.414 18.793 18.794z"></path>
            <path d="M118.794 38.794c0 10.379-8.414 18.794-18.794 18.794s-18.794-8.414-18.794-18.794S89.621 20 100 20s18.794 8.414 18.794 18.794z"></path>
            <path d="M180 38.794c0 10.379-8.414 18.794-18.794 18.794-10.379 0-18.794-8.414-18.794-18.794S150.827 20 161.206 20C171.586 20 180 28.414 180 38.794z"></path>
            <path d="M118.794 100c0 10.379-8.414 18.794-18.794 18.794S81.206 110.379 81.206 100 89.621 81.206 100 81.206s18.794 8.415 18.794 18.794z"></path>
            <path d="M180 100c0 10.379-8.414 18.794-18.794 18.794-10.379 0-18.794-8.414-18.794-18.794s8.414-18.794 18.794-18.794S180 89.621 180 100z"></path>
            <path d="M57.587 161.206c0 10.379-8.414 18.794-18.794 18.794S20 171.586 20 161.206c0-10.379 8.414-18.794 18.794-18.794s18.793 8.415 18.793 18.794z"></path>
            <path d="M118.794 161.206C118.794 171.585 110.38 180 100 180s-18.794-8.414-18.794-18.794c0-10.379 8.414-18.794 18.794-18.794s18.794 8.415 18.794 18.794z"></path>
            <path d="M180 161.206c0 10.379-8.414 18.794-18.794 18.794-10.379 0-18.794-8.414-18.794-18.794 0-10.379 8.414-18.794 18.794-18.794 10.38.001 18.794 8.415 18.794 18.794z"></path>
            <path d="M57.587 100c0 10.379-8.414 18.794-18.794 18.794S20 110.379 20 100s8.414-18.794 18.794-18.794S57.587 89.621 57.587 100z"></path>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Header