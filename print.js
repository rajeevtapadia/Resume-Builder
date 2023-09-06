document.addEventListener('DOMContentLoaded', function () {
    const exportPdfButton = document.getElementById('export-pdf-button');
  
    exportPdfButton.addEventListener('click', function () {
      const resumeContainer = document.getElementById('resume-container'); // Replace with your resume's container ID
      const pdfOptions = {
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };
  
      html2pdf().from(resumeContainer).set(pdfOptions).outputPdf(function (pdf) {
        pdf.save('resume.pdf');
      });
    });
  });
  