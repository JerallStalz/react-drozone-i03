import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function App() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt={file.name} />
      </div>
    </div>
  ));

  return (
    <div className="App">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Deje caer un arcivo aqui</p>
      </div>
      <div>{images}</div>
    </div>
  );
}
