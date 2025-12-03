<script>
const api = "http://localhost:5000";

// ======== HELPER FUNCTIONS ========
function checkLogin() {
    const token = localStorage.getItem("token");
    if (token) {
        // Hide auth forms, show news
        document.getElementById("registerForm").parentElement.style.display = "none";
        document.getElementById("loginForm").parentElement.style.display = "none";
        document.getElementById("newsContainer").parentElement.style.display = "block";
        document.getElementById("logoutBtn")?.style.display = "inline-block";
        getProfile();
        loadNews();
    } else {
        document.getElementById("registerForm").parentElement.style.display = "block";
        document.getElementById("loginForm").parentElement.style.display = "block";
        document.getElementById("newsContainer").parentElement.style.display = "none";
        document.getElementById("logoutBtn")?.style.display = "none";
    }
}

// Logout
function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    checkLogin();
}

// ======== REGISTER ========
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch(`${api}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });
        const data = await res.json();
        alert(data.message);
        if (res.ok) document.getElementById("registerForm").reset();
    } catch (err) {
        alert("Error: " + err.message);
    }
});

// ======== LOGIN ========
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const res = await fetch(`${api}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.id || data.userId);
            alert("Login successful");
            checkLogin();
        } else {
            alert(data.message);
        }
    } catch (err) {
        alert("Error: " + err.message);
    }
});

// ======== GET PROFILE ========
async function getProfile() {
    const userId = localStorage.getItem("userId");
    if (!userId) return;
    try {
        const res = await fetch(`${api}/profile/${userId}`);
        const data = await res.json();
        document.getElementById("profile").innerHTML = `<h3>Welcome, ${data.name}</h3>`;
    } catch (err) {
        console.log("Error fetching profile:", err);
    }
}

// ======== INITIALIZATION ========
window.onload = () => {
    checkLogin();
}
</script>
