import MacWindow from "./MacWindow";

const PdfWindow = ({ windowName, windowProps }) => {
  return (
    <MacWindow windowName={windowName} windowProps={windowProps} title="Resume.pdf" width="50vw" height="80vh">
      <iframe 
        src="/resume_mist-os.pdf" 
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} 
        title="Resume PDF"
      />
    </MacWindow>
  );
};

export default PdfWindow;
