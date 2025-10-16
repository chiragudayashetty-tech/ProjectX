// Mock PDF export functionality
// In production, this would use a library like jsPDF or html2pdf

export const exportToPDF = (frames) => {
  // Create a simple HTML representation for now
  let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Storyboard Export</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; color: #333; }
        .header { text-align: center; margin-bottom: 40px; border-bottom: 3px solid #2563eb; padding-bottom: 20px; }
        .frame { page-break-inside: avoid; margin-bottom: 40px; border: 2px solid #e2e8f0; padding: 20px; border-radius: 8px; }
        .frame-header { background: #2563eb; color: white; padding: 10px 15px; margin: -20px -20px 20px -20px; border-radius: 6px 6px 0 0; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #475569; margin-bottom: 5px; }
        .field-value { color: #1e293b; }
        .badges { display: flex; gap: 10px; margin-top: 10px; }
        .badge { background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 12px; font-size: 12px; }
        @media print { .frame { page-break-inside: avoid; } }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>AI Video Course Storyboard</h1>
        <p>Generated on ${new Date().toLocaleDateString()}</p>
        <p>Total Frames: ${frames.length}</p>
      </div>
  `;

  frames.forEach((frame, index) => {
    htmlContent += `
      <div class="frame">
        <div class="frame-header">
          <h2>Frame ${frame.frameNumber}</h2>
        </div>
        
        <div class="badges">
          <span class="badge">Tone: ${frame.frameTone}</span>
          <span class="badge">Type: ${frame.frameType}</span>
          <span class="badge">Voice Over: ${frame.voiceOverRequired ? 'Yes' : 'No'}</span>
          <span class="badge">Editing: ${frame.editingRequired ? 'Yes' : 'No'}</span>
        </div>
        
        <div class="field">
          <div class="field-label">Content — Dialogues / Narration</div>
          <div class="field-value">${frame.content}</div>
        </div>
        
        ${frame.facilitatorCostume ? `
          <div class="field">
            <div class="field-label">Facilitator Costume / Props</div>
            <div class="field-value">${frame.facilitatorCostume}</div>
          </div>
        ` : ''}
        
        ${frame.sceneDescription ? `
          <div class="field">
            <div class="field-label">Scene Description</div>
            <div class="field-value">${frame.sceneDescription}</div>
          </div>
        ` : ''}
        
        ${frame.cameraNote ? `
          <div class="field">
            <div class="field-label">Camera / Cinematographer Notes</div>
            <div class="field-value">${frame.cameraNote}</div>
          </div>
        ` : ''}
        
        ${frame.editingNote ? `
          <div class="field">
            <div class="field-label">Editing Notes</div>
            <div class="field-value">${frame.editingNote}</div>
          </div>
        ` : ''}
        
        ${frame.suggestions ? `
          <div class="field">
            <div class="field-label">Suggestions for Frame Improvement</div>
            <div class="field-value">${frame.suggestions}</div>
          </div>
        ` : ''}
      </div>
    `;
  });

  htmlContent += `
    </body>
    </html>
  `;

  // Create a blob and download
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `storyboard-${Date.now()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  // Open in new window for printing
  const printWindow = window.open(url, '_blank');
  if (printWindow) {
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 250);
    };
  }
};