// app.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const fileMenu = document.querySelector('.file-menu');
  const fab = document.getElementById('uploadBtn');
  const modalBg = document.getElementById('modalBg');
  const closeModal = document.getElementById('closeModal');
  const submitUpload = document.getElementById('submitUpload');
  const toast = document.getElementById('toast');

  // Sample file data for demo
  const files = [
    {name: 'Project Plan.pdf', size: '2.5 MB'},
    {name: 'Game Design.docx', size: '1.2 MB'},
    {name: 'Music.mp3', size: '5.8 MB'},
    {name: 'Photo.jpg', size: '3.4 MB'},
  ];

  // Render files
  function renderFiles(filter = '') {
    fileMenu.innerHTML = '';
    const filteredFiles = files.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()));
    filteredFiles.forEach(file => {
      const card = document.createElement('div');
      card.classList.add('file-card', 'glass');
      card.innerHTML = `
        <div class="file-icon">📄</div>
        <div class="file-info">
          <span class="filename">${file.name}</span>
          <span class="filesize">${file.size}</span>
        </div>
        <button class="file-menu-btn">⋮</button>
      `;
      fileMenu.appendChild(card);
    });
  }

  // Event: Search filter
  searchInput.addEventListener('input', () => {
    renderFiles(searchInput.value);
  });

  // Show modal on FAB click
  fab.addEventListener('click', () => {
    modalBg.style.display = 'flex';
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modalBg.style.display = 'none';
  });

  // Upload button logic (demo)
  submitUpload.addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    if(fileInput.files.length > 0){
      toast.textContent = `Uploading ${fileInput.files[0].name}...`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
      modalBg.style.display = 'none';
      fileInput.value = '';
    } else {
      alert('Please select a file first!');
    }
  });

  // Initial render
  renderFiles();
});
