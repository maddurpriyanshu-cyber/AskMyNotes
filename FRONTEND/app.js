document.addEventListener("DOMContentLoaded", () => {
  const pdfInput = document.getElementById("pdf-input");
  const uploadStatus = document.getElementById("upload-status");

  pdfInput.addEventListener("change", () => {
    const file = pdfInput.files[0];

    // No file selected or selection cancelled
    if (!file) {
      uploadStatus.textContent = "";
      uploadStatus.className = "";
      return;
    }

    // File selected
    uploadStatus.textContent = `Selected "${file.name}" (ready to upload)`;
    uploadStatus.className =
      "text-sm text-green-600 mt-2 min-h-[1.25rem]";
  });
});
