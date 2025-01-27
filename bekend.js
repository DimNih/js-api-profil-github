document.getElementById("github-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const profileContainer = document.getElementById("profile-container");
    const profile = document.getElementById("profile");
    const skeleton = document.getElementById("skeleton");
    const errorContainer = document.getElementById("error");
    const avatar = document.getElementById("avatar");

    // Tampilkan skeleton dan sembunyikan profil
    profile.classList.add("hidden");
    errorContainer.classList.add("hidden");
    skeleton.classList.remove("hidden");
    avatar.src = "";
    document.getElementById("name").textContent = "";
    document.getElementById("bio").textContent = "";
    document.getElementById("repos").textContent = "";
    document.getElementById("profile-link").href = "#";
    profileContainer.classList.remove("hidden");

    // Ambil data dari GitHub API
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Pengguna tidak ditemukan");
        }
        return response.json();
      })
      .then(data => {

        // Tampilkan data profil
        avatar.src = data.avatar_url;
        avatar.alt = `${data.name}'s Foto Profil`;
        document.getElementById("name").textContent = data.name || "Nama tidak tersedia";
        document.getElementById("bio").textContent = data.bio || "Bio tidak tersedia";
        document.getElementById("repos").textContent = data.public_repos;
        document.getElementById("profile-link").href = data.html_url;

        // Sembunyikan skeleton dan tampilkan profil
        skeleton.classList.add("hidden");
        profile.classList.remove("hidden");
      })
      .catch(error => {


        // Tampilkan error 
        skeleton.classList.add("hidden");
        errorContainer.textContent = error.message;
        errorContainer.classList.remove("hidden");
      });
});
