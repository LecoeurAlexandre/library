export function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
  }

export async function handleForm(emailInput, passwordInput) {
    
    var donnees = { email: emailInput, password: passwordInput };

    try {
        const response = await fetch("http://localhost:8081/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donnees),
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);

        document.cookie = "token = " + responseData.token;

    } catch (error) {
        console.error("Une erreur s'est produite:", error);
    }
}
