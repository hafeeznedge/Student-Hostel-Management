const userRole = localStorage.getItem("role");

if (!userRole && !window.location.href.includes("login.html")) {
    window.location.href = "login.html";
}

// Generate Navbar Dynamically based on role
const navElement = document.getElementById("mainNav");
if (navElement) {
    navElement.innerHTML = `
        <h2>Havenedge</h2>
        <ul>
            ${userRole !== 'student' ? '<li><a href="dashboard.html">Dashboard</a></li>' : ''}
            ${userRole !== 'student' ? '<li><a href="rooms.html">Rooms</a></li>' : ''}
            <li><a href="fees.html">Fees</a></li>
            <li><a href="complaints.html">Complaints</a></li>
            ${userRole === 'admin' ? '<li><a href="reports.html">Reports</a></li>' : ''}
            <li><button class="btn-outline" onclick="document.body.classList.toggle('dark')">Toggle</button></li>
            <li><button class="btn-logout" onclick="logout()">Logout</button></li>
        </ul>
    `;
}

// Security: Hide elements by class
document.querySelectorAll('.admin, .warden, .student').forEach(el => {
    if (!el.classList.contains(userRole)) {
        el.style.display = 'none';
    }
});

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));