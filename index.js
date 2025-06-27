// DOM elements to link

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const gadgetResults = document.getElementById('gadget-results');
    const noResultsMessage = document.querySelector('.no-results');
    const loadingIndicator = document.querySelector('.loading');

    // --- Dark Mode Toggle ---
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Store user preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    // Sample data that should be displayed
    const gadgets = [
        {
            id: 1,
            gadgetname:"mac book pro",
            brand: "apple",
            category: 'laptop',
            price:1200,
            description: "The MacBook Air M2 is a lightweight and portable laptop featuring a fanless design, impressive battery life, and a 13.6-inch Liquid Retina display. It's powered by the Apple M2 chip, offering an 8-core CPU, up to a 10-core GPU, and up to 24GB of unified memory. The design is thin and flat, with a consistent 11mm thickness, and it comes in silver, space gray, starlight, and midnight color options.",
        },
        
        {
            id: 2,
            gadgetName: "iphone 16 pro max",
            brand: "apple",
            category: 'phone',
            price: 1500,
            description: "The iPhone 16 is a smartphone with a 6.1-inch Super Retina XDR display, an A18 Bionic chip, and a dual-lens camera system featuring a 48MP main camera and a new 12MP ultrawide lens with autofocus. It also includes a customizable Action button and a Camera Control button for quick camera access. The iPhone 16 is designed to work with Apple Intelligence, a personal intelligence system focused on productivity and creativity",
        },
    {
        id: 3,
        gadgetName: "Dell XPS 15",
        category: 'laptop',
        brand: "Dell",
        price: 1500,
        description: "The Dell XPS 15 is a premium 15.6-inch laptop known for its powerful performance, sleek design, and high-quality display. It's a popular choice for professionals, creatives, and anyone who needs a capable machine for demanding tasks. The XPS 15 balances portability with a large screen, making it suitable for both work and entertainment.",
    },
    {
        id: 4,
        gadgetName: "samsung galaxy s24",
        category: "phone",
        brand: "android",
        price: 1400,
        description: "The Samsung Galaxy S24 is a compact, high-end smartphone known for its sleek design, powerful performance, and advanced features. It boasts a vibrant, adaptive display, a powerful chipset with AI capabilities, and a durable build. Key features include a 6.2-inch Dynamic AMOLED 2X display, a versatile camera system, and a long-lasting battery with fast charging capabilities",
    },
    {
        id: 5,
        gadgetName: "playstation 5",
        category: "gaming set",
        brand: "sony",
        price: 2000,
        description: "The PlayStation 5 (PS5) is Sony's fifth-generation home video game console, released in late 2020. It boasts a custom AMD Zen 2 CPU and a custom AMD Radeon GPU, supporting 4K resolution at up to 120 frames per second and ray tracing for realistic lighting and reflections. The PS5 also features a lightning-fast, custom 825GB SSD for reduced loading times and enhanced game design possibilities.",
        image: "/home/maisaleonard/download (1).jpeg"
    },
    {
        id: 6,
        gadgetName: "HP Envy Desktop",
        category: "computer",
        brand: "Hp",
        price: 900,
        description: "The HP Envy desktop series is known for its blend of performance and premium features, making it suitable for both creative professionals and everyday users who want a bit more power and style than standard machines.",
    },
    {
        id: 7,
        gadgetName: "X-box series x",
        category: "gaming set",
        brand: "xbox",
        price: 700,
        description: "The Xbox Series X is a high-powered gaming console known for its processing power and graphics capabilities, targeting 4K gaming at up to 120 frames per second. It boasts a custom 8-core AMD Zen 2 CPU and a 12 teraflop AMD RDNA 2 GPU, along with 16GB of GDDR6 memory.",
    },
    {
        id: 8,
        gadgetName: "google pixel 8",
        category: "phone",
        brand: "google",
        price: 400,
        description: "The Google Pixel 8 is a smartphone known for its AI-powered features, excellent camera, and compact design",
    },
    {
        id: 9,
        gadgetName: "huwawei mate book x pro",
        category: "laptop",
        brand: "huwawei",
        price: 1000,
        description: "The Huawei MateBook X Pro is a flagship ultraportable laptop known for its lightweight design, powerful performance, and high-quality display",
    },
    {
        id: 10,
        gadgetName: "ramptons fridge",
        category: "fridge",
        brand: "Ramptons",
        price: 2800,
        description: "Ramtons refrigerators are known for their variety, offering both single and double-door models with features like direct cool and no-frost options, catering to different household needs.",
    },
    {
        id:11,
        gadgetName:"iphone 15",
        category:"apple products",
        brand:"apple",
        price:1500,
        description:"The iPhone 15 has seen significant advancements in design, performance, and features. Key changes include the introduction of Face ID, OLED displays, and improved camera systems, culminating in the powerful iPhone 15 series with features like the Dynamic Island and USB-C.",
    },
    {
        id:12,
        gadgetName:"oppo",
        category:"phone",
        brand:"android",
        price:800,
        description:"The OPPO Reno 13 series includes both a standard Reno 13 and a Reno 13 Pro model, with the Pro version generally offering superior performance and features. Both models are known for their sleek designs, strong camera systems, "
    },
    {
        id:13,
        gadgetName:"samsung",
        category:"television",
        brand:"samsung",
        price:2200,
        description:"Samsung TVs are known for their vibrant picture quality, smart features, and sleek designs. They offer a wide range of models, from QLED and Neo QLED with advanced display technologies, to Crystal UHD and LED TVs, catering to different budgets and preferences",
    },
    {
        id:14,
        gadgetName:"speakers",
        category:"JBL speakers",
        brand:"JBL",
        price:1500,
        description:"JBL is a popular brand known for its audio equipment, including a wide range of speakers. JBL speakers are known for their quality sound, durability, and variety of features",
    },
    {
        id:15,
        gadgetName:"keyboard",
        category:"logitech",
        brand:"Rugged book",
        price:1400,
        description:"High-tech keyboards encompass a range of innovative features and technologies designed to enhance typing experience, functionality, and customization"
    },
    {
        id:16,
        gadgetName:"meta quest 3s",
        category:"VR headest",
        brand:"playstation",
        price:3000,
        description:"The Meta Quest 3S is an entry-level mixed reality headset, offering a more affordable alternative to the Meta Quest 3, with a focus on mixed reality experiences and gaming."
    },
];
  // --- Render Gadgets ---
    function renderGadgets(gadgets) {
        gadgetResults.innerHTML = ''; // Clear existing results
        if (gadgets.length === 0) {
            noResultsMessage.style.display = 'block';
            return;
        }
        noResultsMessage.style.display = 'none';

        gadgets.forEach(gadget => {
            const gadgetCard = document.createElement('div');
            gadgetCard.classList.add('gadget-card');
            // Add data-type attribute for CSS background image selection
            gadgetCard.setAttribute('data-type', gadget.type);

            gadgetCard.innerHTML = `
                <div class="gadget-card-content">
                    <h3>${gadget.gadgetName || gadget.gadgetname}</h3>
                    <p>${gadget.description}</p>
                    <p><strong>Type:</strong> ${gadget.category}</p>
                    <p class="price">Price: ${gadget.price}</p>
                </div>
            `;
            gadgetResults.appendChild(gadgetCard);
        });
    }

    // --- Event Listeners ---
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        fetchGadgets(query).then(renderGadgets);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            fetchGadgets(query).then(renderGadgets);
        }
    });
// --- Fetch Gadgets (Filter Function) ---
fetch("http://localhost:3000/posts")
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));


function fetchGadgets(query) {
    return new Promise((resolve) => {
        if (!query) {
            resolve(gadgets);
            return;
        }
        const lowerQuery = query.toLowerCase();
        const filtered = gadgets.filter(gadget =>
            (gadget.gadgetName || gadget.gadgetname || '').toLowerCase().includes(lowerQuery) ||
            (gadget.brand || '').toLowerCase().includes(lowerQuery) ||
            (gadget.category || '').toLowerCase().includes(lowerQuery)
        );
        resolve(filtered);
    });
}

// Initial render of all gadgets
renderGadgets(gadgets);
}); 
