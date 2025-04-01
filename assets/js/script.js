function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    
    // Show loader
    const loader = document.createElement('div');
    loader.className = 'loader';
    modal.appendChild(loader);
    
    modal.style.display = "flex";
    
    // Preload image
    const tempImg = new Image();
    tempImg.onload = function() {
      modalImg.src = this.src;
      modal.removeChild(loader);
      
      // Center the image based on its aspect ratio
      centerImage(this);
    };
    tempImg.src = img.src;
  
    // Close when clicking outside
    modal.onclick = function(e) {
      if (e.target === modal) closeModal();
    }
  }
  
  function centerImage(img) {
    const modalImg = document.getElementById("modalImage");
    
    // Reset any previous styling
    modalImg.style.maxWidth = '';
    modalImg.style.maxHeight = '';
    modalImg.style.width = '';
    modalImg.style.height = '';
    
    const windowRatio = window.innerWidth / window.innerHeight;
    const imageRatio = img.width / img.height;
    
    if (imageRatio > windowRatio) {
      // Wide image - constrain by width
      modalImg.style.maxWidth = '90%';
      modalImg.style.maxHeight = '90vh';
    } else {
      // Tall image - constrain by height
      modalImg.style.maxHeight = '90vh';
      modalImg.style.maxWidth = '90%';
    }
  }
  
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }
  
  // Close with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
  });