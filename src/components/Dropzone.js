import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    const onFileChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
          setPathImage(reader.result);
        };
        setFile(file);
      } else {
        console.log("There was an error");
      }
    };
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
