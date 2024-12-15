'use client'
import FileUpload from "../../components/FileUpload";
const MyForm: React.FC = () => {

  const handleFileUpload = (fileUrl: string) => {
    console.log(fileUrl);
  };

  return <FileUpload onFileUpload={handleFileUpload} />;
};

export default MyForm;
