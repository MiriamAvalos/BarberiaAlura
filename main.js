
const openWhatsApp = () => {
    const phoneNumber = "+0000000000";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const container = document.createElement("div");

const whatsAppIcon = document.createElement("img");
whatsAppIcon.className = "container-whatsapp-icon";
whatsAppIcon.src = "./images/whatsApp.png";
whatsAppIcon.alt = "whatsapp-icon";
whatsAppIcon.addEventListener("click", openWhatsApp);


// Añadir los elementos al contenedor
container.appendChild(whatsAppIcon);

// Obtener el contenedor donde se insertarán los íconos
const socialMediaIconsContainer = document.getElementById("socialMediaIconsContainer");

// Insertar el contenedor con los íconos en el DOM
socialMediaIconsContainer.appendChild(container);