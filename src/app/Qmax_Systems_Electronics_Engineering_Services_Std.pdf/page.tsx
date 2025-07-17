import React from "react";

const PDF_FILE = "/Qmax%20Systems_Electronics%20Engineering%20Services_Std.pdf";

const PDFPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 24,
      }}
    >
      <object
        data={PDF_FILE}
        type="application/pdf"
        width="100%"
        height="800px"
        style={{ maxWidth: "900px", width: "100%", border: "1px solid #ccc" }}
      >
        <p>
          Your browser does not support PDFs. Please download the PDF to view
          it: <a href={PDF_FILE}>Download PDF</a>.
        </p>
      </object>
    </div>
  );
};

export default PDFPage;
