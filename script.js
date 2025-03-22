document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    const response = await fetch("http://simpleform.onrender.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
});
