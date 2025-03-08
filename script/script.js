// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};
console.log("Whoa you made it! A fellow coder. If you find a bug, call it a feature.");


document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Dark Mode";
    toggleButton.classList.add("dark-mode-toggle");
    toggleButton.onclick = toggleDarkMode;
    document.body.appendChild(toggleButton);
});
var typed = new Typed(".typing", {
    strings: ["<b style='color: #055199; text-shadow: -0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white;'>Manoj Shetty K</b>","a Programmer", "a Developer", "an Engineer", "an Artist", "a Photographer", "a Writer"],
    typeSpeed: 70,
    backSpeed: 25,
    loop: true,
});

function reloadPage() {
    location.reload(); 
}

function handleZoom() {
    const zoomLevel = Math.round(window.devicePixelRatio * 100); // Get zoom percentage
    document.documentElement.style.setProperty('--zoom-level', zoomLevel);
    console.log("Zoom Level:", zoomLevel + "%");
    const aboutPhoto = document.querySelector('.about-photo');
    if (zoomLevel > 100) {
        document.body.classList.add('zoom-in');
        document.body.classList.remove('zoom-out');
    } else if (zoomLevel < 100) {
        document.body.classList.add('zoom-out');
        document.body.classList.remove('zoom-in');
    } else {
        document.body.classList.remove('zoom-in', 'zoom-out');
    }
}

window.addEventListener('resize', handleZoom);
window.addEventListener('DOMContentLoaded', handleZoom);

const startDate = new Date("2021-08-16"); 
const currentDate = new Date();
const timeDifference = currentDate - startDate;  
const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Get all the counters
let valueDisplays = document.querySelectorAll(".counter");

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = valueDisplay.getAttribute("data-val");

    if (valueDisplay.parentElement.querySelector(".fact-label").textContent === "Days in IT Industry") {
        endValue = daysPassed;  
    } else {
        endValue = parseInt(endValue);  
    }

    if (endValue > 0) {
        let interval = 40000;  
        let duration = Math.floor(interval / endValue); 

        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue === endValue) {
                clearInterval(counter); 
            }
        }, duration);
    }
});



function calculateExperience(startDate) {
    const start = new Date(startDate);
    
    let years = currentDate.getFullYear() - start.getFullYear();
    let months = currentDate.getMonth() - start.getMonth();
    let days = currentDate.getDate() - start.getDate();

    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += previousMonth.getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    return `${years} years, ${months} months, ${days} days (yes, I’m that specific)`;
}

document.getElementById("experience-years").textContent = calculateExperience(startDate);


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showNotification("Congratulations! You just discovered… nothing. Right-click is off-limits.");
});

// document.addEventListener('keydown', function(e) {
//     if (e.key === 'F12' || 
//         (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i'|| e.key === 'J'|| e.key === 'j')))  {
//         e.preventDefault();
//         showNotification("Inspecting my portfolio? You must be curious!");
//     }
//     if (e.ctrlKey && (e.key === 'U' || e.key =='u')){
//         e.preventDefault()
//         showNotification(`You are
//         Curious, aren’t you? I get it, but there’s nothing exciting in this code—just a bunch of tired HTML and CSS working overtime. Go grab a coffee instead, you’ve earned it!`);

//     }
// });


function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}





        // Add Event Listener for Ctrl + D
        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === 'd') { // Ctrl + D
                openDanceParty();
                event.preventDefault(); // Prevent default browser behavior
            }
        });

        function openDanceParty() {
            // Open a new tab with the dance party content
            const newTab = window.open('', '_blank');

            // Write the dance party HTML to the new tab
            newTab.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>404 Dance Party</title>
                    <style>
                        /* General Styling */
                        body {
                            margin: 0;
                            font-family: Arial, sans-serif;
                            overflow: hidden; /* Prevent scrolling during the dance party */

                        }
                        
                   

                        #dance-container {
                            display: block;
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: black;
                            color: white;
                            z-index: 9999;
                            animation: color 1s infinite;

                        }
                        @keyframes color {
                            0% {
                                background-color: red;
                            }
                            25% {
                                background-color: yellow;
                            }
                            50% {
                                background-color: green;
                            }
                            75% {
                                background-color: blue;
                            }
                            100% {
                                background-color: purple;
                            }
                        }

                        /* Disco Lights */
                        .light {
                            position: absolute;
                            width: 100px;
                            height: 100px;
                            border-radius: 50%;
                            animation: blink 0.5s infinite;
                        }

                        @keyframes blink {
                            0%, 100% { opacity: 0.2; }
                            50% { opacity: 1; }
                        }

                        .red { background: red; }
                        .blue { background: blue; }
                        .green { background: green; }
                        .yellow { background: yellow; }

                        /* Avatar Dance Animation */
                        .avatar {
                            position: absolute;
                            // bottom: 20%;
                            left: 50%;
                            top:20%
                            transform: translateX(-50%);
                            width: 800px;
                            height: 800px;
                            background: url('DiscoManoj.png') no-repeat center/cover;
                            animation: dance 1s infinite;
                        }

                        @keyframes dance {
                            0% { transform: translateX(-50%) rotate(0deg); }
                            25% { transform: translateX(-45%) rotate(10deg); }
                            50% { transform: translateX(-50%) rotate(0deg); }
                            75% { transform: translateX(-55%) rotate(-10deg); }
                            100% { transform: translateX(-50%) rotate(0deg); }
                        }



                        
                    </style>
                </head>
                <body>
                    <div id="dance-container">
                        <!-- Disco Lights -->
                        <div class="light red" style="top: 10%; left: 20%;"></div>
                        <div class="light blue" style="top: 10%; right: 20%;"></div>
                        <div class="light green" style="bottom: 10%; left: 20%;"></div>
                        <div class="light yellow" style="bottom: 10%; right: 20%;"></div>

                        <!-- Dancing Avatar -->
                        <div class="avatar"></div>
                    </div>

                    <script>
                        // Play Music in the new tab
                        let audio = new Audio('song.mp3'); // Replace with your music file
                        audio.loop = true;
                        audio.play();
                    </script>
                </body>
                </html>
            `);
        }



        function getTimeBasedGreeting() {
            const hours = new Date().getHours();
        
            if (hours >= 6 && hours < 9) {
                return "Good morning! Perfect time for a coffee and a deep dive into my portfolio. ☕";
            } else if (hours >= 9 && hours < 12) {
                return "Welcome, early explorer! Let’s unlock some creative secrets together. 🌅";
            } else if (hours >= 12 && hours < 14) {
                return "Lunchtime scrolling, huh? Grab a snack and enjoy the show! 🍔";
            } else if (hours >= 14 && hours < 17) {
                return "Afternoon delight! Let my work keep your energy up. 🚀";
            } else if (hours >= 17 && hours < 21) {
                return "Evening chill time? Let my portfolio bring the vibes. 🌇";
            } else if (hours >= 21 && hours < 24) {
                return "Late-night inspiration? You've come to the right place. 🌙";
            } else { 
                return "Burning the midnight oil? Let my portfolio light your way! 🌌";
            }
        }
        
        window.onload = function () {
            const preloader = document.getElementById('preloader');
            const greeting = document.getElementById('greeting');
        
            // Set the greeting text
            greeting.textContent = getTimeBasedGreeting();
        
            // Simulate loading time (3 seconds)
            setTimeout(() => {
                preloader.style.opacity = 0; // Smooth fade out
                preloader.style.transition = 'opacity 1s ease';
                setTimeout(() => {
                    preloader.style.display = 'none'; // Remove from layout
                }, 1000); // Match fade-out duration
            }, 3000);
        };
        


        document.getElementById('menuToggle').addEventListener('click', function () {
            const sideMenu = document.getElementById('sideMenu');
            sideMenu.classList.toggle('open');
          });
          
          // Close the side menu when clicking outside of it
          window.addEventListener('click', function (event) {
            const sideMenu = document.getElementById('sideMenu');
            const menuToggle = document.getElementById('menuToggle');
            
            // Check if the click is outside the side menu and the menu toggle button
            if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
              sideMenu.classList.remove('open');
            }
          });
            

          function openLightbox(src) {
            const lightbox = document.getElementById("lightbox");
            const lightboxImage = document.getElementById("lightboxImage");
            lightboxImage.src = src;
            lightbox.classList.add("active");
          }
        
          function closeLightbox() {
            const lightbox = document.getElementById("lightbox");
            lightbox.classList.remove("active");
          }



          function toggleChat() {
            const chatModal = document.getElementById("chatbot-modal");
            chatModal.style.display = chatModal.style.display === "none" || !chatModal.style.display ? "flex" : "none";
            if (chatModal.style.display === "flex") {
                setTimeout(() => {
                    sendDefaultMessage();
                }, 200); // Delay the message to give some time for the modal to open
            }
        
       
        }

        function sendDefaultMessage() {
            const chatMessages = document.getElementById("chat-messages");
        
            // Create the bot's default welcome message
            const botMessage = document.createElement("div");
            botMessage.classList.add("bot");
        
            const defaultMessage = "Welcome! You're now chatting with Manoj's code—it's doing all the hard work while Manoj daydreams about becoming a professional meme creator.\n\n"
            botMessage.innerText = defaultMessage;
            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        function sendQuestion(question) {
            disableButtons();

            const chatMessages = document.getElementById("chat-messages");
        
            // Display user's question
            const userMessage = document.createElement("div");
            userMessage.classList.add("user");
            userMessage.innerText = question;
            chatMessages.appendChild(userMessage);
        
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        
            // Simulate bot response
            setTimeout(() => {
                const botMessage = document.createElement("div");
                botMessage.classList.add("bot");
                let response = "";
                switch (question) {
                    case "What are your skills?":
                        response = `<h3>Skills</h3>
                        <ul>
                            <li><strong>Technical Skills</strong>
                                <ul>
                                    <li>Proficient in <strong>Python</strong>, with experience in developing applications and scripts.</li>
                                    <li>Skilled in database management with <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, <strong>Elasticsearch (ES)</strong>, and <strong>Redis</strong>.</li>
                                    <li>Currently working on GenAI projects like <strong>RAG (Retrieval-Augmented Generation)</strong> and <strong>LLM (Large Language Models)</strong>, specializing in prompt engineering.</li>
                                    <li>Experienced in building APIs with <strong>FAST API</strong>, <strong>Flask</strong>, and <strong>Django</strong>.</li>

                                    </ul>
                            </li>
                            <li><strong>Non-Technical Skills</strong>
                                <ul>
                                    <li>Talented in <strong>art</strong>, with a focus on watercolor, pensketch.</li>
                                    <li>Experienced in <strong>photography</strong>, capturing abstract, streetphotgraphy.</li>
                                    <li>Proficient in <strong>astrophotography</strong>, capturing celestial objects and night sky phenomena.</li>
                                    <li>Strong <strong>writing</strong> skills, particularly in stroy, poem, script writing, creative writing, technical documentation.</li>
                                </ul>
                            </li>
                        </ul>`
                                              
                    break;
                    case "Tell me about your projects.":
                    response = `    <h3>Projects</h3>
                        <ul>
                            <li>
                                <b>KAVI - Kannada Programming Language</b>
                                <ul>
                                    <li>Developed a programming language for the Kannada-speaking community.</li>
                                    <li>Lead developer responsible for design and implementation</li>
                                    <li>Python based programing language developed for learning purpose</li>
                                </ul>
                            </li>
                            <li>
                                <p>PyPI Packages</p>
                                <ul>
                                    <li>
                                        <strong>ConsoleFun</strong>
                                        <ul>
                                            <li>Created simple console games library in Python.</li>
                                            <li>Sole developer responsible for design, coding, testing, and documentation.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Matchfinder</strong>
                                        <ul>
                                            <li>Developed efficient string matching utility for large datasets.</li>
                                            <li>Focused on algorithm design and optimization.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>My Stupid Kanvas - Art Page</p>
                                <ul>
                                    <li>Personal platform showcasing my handmade art.</li>
                                </ul>
                            </li>
                            <li>
                                <p>GenAI Projects (RAG and LLM)</p>
                                <ul>
                                    <li>
                                        <strong>Project Scope:</strong> Developed applications using advanced GenAI models like Retrieval-Augmented Generation (RAG) and Large Language Models (LLM).</li>
                                    <li>
                                        <strong>Your Role:</strong> Focused on prompt engineering and integrating models into practical applications.</li>
                                    <li>
                                </ul>
                            </li>
                            <li>
                                <p>Backend API Development with FAST API</p>
                                <ul>
                                    <li>
                                        <strong>Project Scope:</strong> Developed robust APIs for a client-facing application using FAST API.</li>
                                    <li>
                                        <strong>Your Role:</strong> Led backend development team to ensure scalability and performance.</li>
                                    <li>
                                        <strong>Technologies Used:</strong> FAST API, ,ES, Redis, PostgreSQL for database management.</li>
                                    <li>
                                        <strong>Achievements:</strong> Achieved 50% reduction in response time through optimized API endpoint design and database queries.</li>
                                </ul>
                            </li>
                            <li>
                                <p>Code Converter Portal (In Progress)</p>
                                <ul>
                                    <li>
                                        <strong>Project Scope:</strong> Developing a web portal to convert code snippets between programming languages using genAI.</li>
                                    <li>
                                        <strong>Your Role:</strong> Leading development efforts including architecture design and integration.</li>
                                    <li>
                                        <strong>Current Progress:</strong> Actively developing features for beta release.</li>
                                </ul>
                            </li>
                        </ul>`
                        break;
                    case "How can I contact you?":
                        response = `You can reach me via email at <a style='background-color:blue;color:white;text-decoration: none;' href="mailto:shettykmanojmask@gmail.com">shettykmanojmask@gmail.com</a><br>
                        Or call me at <a style='background-color:blue;color:white;text-decoration: none;' href="tel:+919945602434">+919945602434</a>`;
                        break;                    
                    case "Any special mentions?":
                        response = `<ul>
                        <li>I had the honor of representing India at the prestigious <b style='color: red;'>GENIUS OLYMPIAD</b>, an International Science Fair held at Oswego University, New York, USA, where I was awarded an Honorable Mention for the project I presented";</li>
                        <li>Created a simple programming language using Python</li>
                        </ul>`
                        break;
                    default:
                        response = "I'm not sure how to answer that.";
                }
        
                botMessage.innerHTML = response+'\n\n';
                chatMessages.appendChild(botMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 500);
            setTimeout(function() {
                enableButtons();  
            }, 2000);
        }
        function disableButtons() {
            var buttons = document.querySelectorAll('.chat-suggestions button');
            buttons.forEach(function(button) {
                button.disabled = true;
            });
        }

        function enableButtons() {
            var buttons = document.querySelectorAll('.chat-suggestions button');
            buttons.forEach(function(button) {
                button.disabled = false;
            });
        }


        const topScroll = document.getElementById('top');
const bottomScroll = document.getElementById('botom');



function openModal() {
    document.getElementById('emailModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('emailModal').style.display = 'none';
}

function copyEmail() {
    const email = 'shettykmanojmask@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const notification = document.getElementById("copy-notification");
      notification.classList.remove("hidden");
      notification.classList.add("show");
  alert("LLLLL")
      setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
          notification.classList.add("hidden");
        }, 300); 
      }, 1500); 
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  }
  
  const goTopBtn = document.getElementById('goTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 3900) { // Show when scrolled 300px or more
      goTopBtn.classList.add('show');
    } else {
      goTopBtn.classList.remove('show');
    }
  });
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  


//   window.addEventListener('scroll', function() {
//     const aboutPhoto = document.querySelector('.about-photo');
//     const offset = window.pageYOffset;
    
//     // Apply the parallax effect, adjusting the multiplier for speed
//     aboutPhoto.style.transform = `translateY(${offset * 0.2}px)`; 
// });
window.addEventListener('scroll', function() {
    const intro = document.querySelector('#intro');
    const introElement = document.querySelector('.intro');
    const content = document.querySelector('.content');
    const offset = window.scrollY; // Use scrollY instead of pageYOffset

    const introHeight = intro.offsetHeight;
    const blurValue = Math.min(offset * 0.02, 10); // Cap the blur at 10px
    if (offset < introHeight-200) {
        introElement.style.transform = `translateY(${offset * 1}px)`; // Adjust the multiplier for intro speed
        content.style.transform = `translateY(${offset * 1}px)`; // Adjust the multiplier for content speed
        content.style.filter = `blur(${blurValue}px)`;
        introElement.style.filter = `blur(${blurValue}px)`;
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport, add the 'visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Optionally, you can remove the 'visible' class when it's out of view
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Observe each timeline item
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollSections = document.querySelectorAll('.scroll-section');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Reset for repeated effect
        }
      });
    }, { threshold: 0.3 }); // Trigger when 10% of the section is visible
  
    scrollSections.forEach(section => observer.observe(section));
    
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".interest-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible"); // Remove if you want repeatable animation
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    items.forEach((item) => observer.observe(item));
});