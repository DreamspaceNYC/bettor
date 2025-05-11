import jsPDF from 'jspdf';

export function generatePDF(content) {
    const pdf = new jsPDF();
    pdf.text(content, 10, 10);
    pdf.save('analysis-report.pdf');
}
