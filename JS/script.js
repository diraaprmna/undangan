 // Saat link menu diklik
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
          document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
          this.classList.add('active');
        });
      });