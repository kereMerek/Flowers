onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    if (window.innerWidth <= 768) {
      // Mobil cihazlar için
      document.body.classList.add("mobile");
    } else {
      // Masaüstü için
      document.body.classList.remove("mobile");
    }

    clearTimeout(c);
  }, 1000);
};
