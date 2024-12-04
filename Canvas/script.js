// FUNCTIONALITY

// BG Color change on hover

// Color mapping for each canvas hover effect
const colors = {
    'art1': 'lightgreen',
    'art2': 'grey',
    'art3': '#FFE8C8',
    'art4': '#FF4545',
    'art5': 'lightpink',
    'art6': 'lightseagreen',
    'art7': '#03346E',
    'art8': 'lightgoldenrodyellow'
};

// Get all canvas elements
const bg_canvases = document.querySelectorAll('canvas');

// Add event listeners to all canvas elements
bg_canvases.forEach(canvas => {
    canvas.addEventListener('mouseenter', () => {
    // Change the background color of the body when hovering over any canvas
    const canvasId = canvas.id; // Get the canvas ID
    document.body.style.backgroundColor = colors[canvasId]; // Set background to corresponding color
    });

    canvas.addEventListener('mouseleave', () => {
    // Reset the background color of the body when the hover ends
    document.body.style.backgroundColor = 'white'; // Reset to white or any default color
    });
});

// Hover Name Javascript
const canvases = document.querySelectorAll('canvas');
const tooltip = document.createElement('div'); // Create the tooltip element
tooltip.id = 'tooltip'; // Set its ID
document.body.appendChild(tooltip); // Append the tooltip to the body

canvases.forEach(canvas => {
  // When hovering over the canvas
  canvas.addEventListener('mouseenter', function(e) {
    const name = e.target.getAttribute('data-name');
    tooltip.textContent = name; // Set the tooltip text to the data-name attribute
    tooltip.style.display = 'block'; // Show the tooltip
  });

  // When mouse leaves the canvas
  canvas.addEventListener('mouseleave', function() {
    tooltip.style.display = 'none'; // Hide the tooltip
  });

  // Follow the mouse position for the tooltip
  canvas.addEventListener('mousemove', function(e) {
    tooltip.style.left = e.pageX + 10 + 'px'; // Position the tooltip slightly to the right of the cursor
    tooltip.style.top = e.pageY + 10 + 'px'; // Position it slightly below the cursor
  });
});

// <----------------------------------------> 
// DRAWING GRAPHICAL STUFF

// Avocado Art
const art1 = document.getElementById('art1');
const ctx1 = art1.getContext('2d');

    // Background color

    ctx1.fillStyle = 'lightgreen'; // Light blue background color
    ctx1.fillRect(0, 0, art1.width, art1.height); // Fills the entire canvas with the background color

    // Draw the shadow first
    ctx1.beginPath();
    ctx1.ellipse(100, 180, 50, 10, 0, 0, Math.PI * 2);
    ctx1.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Shadow color
    ctx1.fill();
    ctx1.closePath();

    // Outer avocado (darker green with gradient)
    const avocadoOuterGradient = ctx1.createRadialGradient(100, 100, 60, 100, 100, 90);
    avocadoOuterGradient.addColorStop(0, '#355E3B');
    avocadoOuterGradient.addColorStop(1, '#274828');

    ctx1.beginPath();
    ctx1.ellipse(100, 100, 60, 90, 0, 0, Math.PI * 2);
    ctx1.fillStyle = avocadoOuterGradient;
    ctx1.fill();
    ctx1.closePath();

    // Inner avocado (light green with gradient for depth)
    const avocadoInnerGradient = ctx1.createRadialGradient(100, 100, 40, 100, 100, 80);
    avocadoInnerGradient.addColorStop(0, '#B5E5A8');
    avocadoInnerGradient.addColorStop(1, '#A8D18D');

    ctx1.beginPath();
    ctx1.ellipse(100, 100, 50, 80, 0, 0, Math.PI * 2);
    ctx1.fillStyle = avocadoInnerGradient;
    ctx1.fill();
    ctx1.closePath();

    // Seed (brown with subtle shadow)
    const avocadoSeedGradient = ctx1.createRadialGradient(100, 130, 10, 100, 130, 25);
    avocadoSeedGradient.addColorStop(0, '#8B5E3C');
    avocadoSeedGradient.addColorStop(1, '#5E3A23');

    ctx1.beginPath();
    ctx1.arc(100, 130, 25, 0, Math.PI * 2);
    ctx1.fillStyle = avocadoSeedGradient;
    ctx1.fill();
    ctx1.closePath();

    // Adding highlights to the seed
    ctx1.beginPath();
    ctx1.arc(110, 120, 8, 0, Math.PI * 2);
    ctx1.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx1.fill();
    ctx1.closePath();


// Screen Art
art2 = document.getElementById('art2');
ctx2 = art2.getContext('2d');
    
    // Background
    ctx2.fillStyle = 'grey'; // Light blue background color
    ctx2.fillRect(0, 0, art2.width, art2.height); // Fills the entire canvas with the background color

    // Draw the screen body
    ctx2.fillStyle = '#303030'; // Dark gray for the monitor body
    ctx2.fillRect(30, 30, 140, 90);

    // Draw the screen display
    ctx2.fillStyle = '#a8d8f0'; // Light blue for the screen
    ctx2.fillRect(40, 40, 120, 70);

    // Draw the stand
    ctx2.fillStyle = '#404040'; // Slightly lighter gray for the stand
    ctx2.fillRect(85, 125, 30, 10);

    // Draw the base of the stand
    ctx2.fillStyle = '#606060'; // Medium gray for the base
    ctx2.fillRect(70, 140, 60, 10);

    // Add screen bezel lines (optional detail)
    ctx2.strokeStyle = '#202020'; // Darker gray for bezel details
    ctx2.lineWidth = 2;
    ctx2.strokeRect(40, 40, 120, 70); // Bezel outline

    // Add a power button on the monitor
    ctx2.beginPath();
    ctx2.arc(150, 115, 5, 0, Math.PI * 2); // Small circle for power button
    ctx2.fillStyle = '#ff0000'; // Red color for power button
    ctx2.fill();

// House Canvas
const art3 = document.getElementById('art3');
const ctx3 = art3.getContext('2d');

    // Bg
    ctx3.fillStyle = colors['art3']; // Light blue background color
    ctx3.fillRect(0, 0, art2.width, art2.height); // Fills the entire canvas with the background color

    // Base of the house
    ctx3.fillStyle = '#8EA6B3'; // Light gray-blue
    ctx3.beginPath();
    ctx3.moveTo(100, 150); // Bottom-left corner
    ctx3.lineTo(300, 150); // Bottom-right corner
    ctx3.lineTo(300, 80); // Top-right corner
    ctx3.lineTo(100, 80); // Top-left corner
    ctx3.closePath();
    ctx3.fill();

    // Roof
    ctx3.fillStyle = '#576F72'; // Darker gray
    ctx3.beginPath();
    ctx3.moveTo(80, 80); // Left roof edge
    ctx3.lineTo(200, 30); // Roof peak
    ctx3.lineTo(320, 80); // Right roof edge
    ctx3.closePath();
    ctx3.fill();

    // Windows (Left)
    ctx3.fillStyle = '#ADD8E6'; // Light blue for glass
    ctx3.fillRect(120, 100, 50, 30); // Left window base
    ctx3.fillStyle = '#FFFFFF'; // White window dividers
    ctx3.fillRect(144, 100, 2, 30); // Vertical divider
    ctx3.fillRect(120, 114, 50, 2); // Horizontal divider

    // Windows (Right)
    ctx3.fillStyle = '#ADD8E6'; // Light blue for glass
    ctx3.fillRect(230, 100, 50, 30); // Right window base
    ctx3.fillStyle = '#FFFFFF'; // White window dividers
    ctx3.fillRect(254, 100, 2, 30); // Vertical divider
    ctx3.fillRect(230, 114, 50, 2); // Horizontal divider

    // Door
    ctx3.fillStyle = '#704214'; // Wooden brown
    ctx3.fillRect(180, 120, 40, 30); // Door base

    // Door knob
    ctx3.fillStyle = '#FFD700'; // Gold knob
    ctx3.beginPath();
    ctx3.arc(215, 135, 3, 0, Math.PI * 2); // Knob on the door
    ctx3.fill();

    // Chimney
    ctx3.fillStyle = '#8EA6B3'; // Same as the house
    ctx3.fillRect(240, 40, 20, 40); // Chimney base

    // Chimney top (rounded)
    ctx3.fillStyle = '#576F72'; // Same as roof
    ctx3.beginPath();
    ctx3.arc(250, 40, 10, 0, Math.PI, true); // Rounded chimney top
    ctx3.fill();

    // Add a simple grass base
    ctx3.fillStyle = '#6AB47B'; // Green
    ctx3.fillRect(0, 150, 400, 150);

    // Add a light shadow effect for depth
    const houseShadowGradient = ctx3.createLinearGradient(0, 0, 400, 300);
    houseShadowGradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    houseShadowGradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
    ctx3.fillStyle = houseShadowGradient;
    ctx3.fillRect(0, 0, 400, 300);

// Sword Canvas Object
const art4 = document.getElementById('art4');
const ctx4 = art4.getContext('2d');

    // Clear the canvas before drawing
    ctx4.clearRect(0, 0, art4.width, art4.height);

    // Background color
    ctx4.fillStyle = colors['art4'];
    ctx4.fillRect(0, 0, art4.width, art4.height);

    // Sword Handle (Hilt)
    ctx4.fillStyle = '#4E342E'; // Brighter brown for handle
    ctx4.fillRect(90, 120, 20, 40); // Handle part of the sword (moved up)

    // Sword Guard (Crossguard)
    ctx4.fillStyle = '#8D6E63'; // Lighter brown for guard
    ctx4.fillRect(80, 110, 40, 10); // Horizontal part of the guard (moved up)
    ctx4.fillRect(70, 105, 10, 20); // Left vertical part of the guard (moved up)
    ctx4.fillRect(120, 105, 10, 20); // Right vertical part of the guard (moved up)

    // Sword Blade (Main Part)
    ctx4.fillStyle = 'white'; // Lighter silver blade color
    ctx4.beginPath();
    ctx4.moveTo(100, 20); // Top of the blade (higher)
    ctx4.lineTo(80, 110); // Left of the blade (adjusted higher)
    ctx4.lineTo(120, 110); // Right of the blade (adjusted higher)
    ctx4.closePath();
    ctx4.fill();

    // Sword Pommel (Bottom of the handle)
    ctx4.beginPath();
    ctx4.arc(100, 170, 12, 0, Math.PI * 2); // Round pommel (moved up)
    ctx4.fillStyle = '#4E342E'; // Same as handle
    ctx4.fill();
    ctx4.closePath();

    // Sword Shadow
    const swordShadow = ctx4.createLinearGradient(0, 0, 200, 200);
    swordShadow.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
    swordShadow.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
    ctx4.fillStyle = swordShadow;
    ctx4.fillRect(0, 0, art4.width, art4.height);

// Clock Object
const art5 = document.getElementById('art5');
const ctx5 = art5.getContext('2d');

    // Function to draw the clock
    function drawClock() {
        // Clear the canvas before drawing
        ctx5.clearRect(0, 0, art5.width, art5.height);

        // Background Gradient for the Clock (Grey Theme)
        ctx5.fillStyle = colors['art5'];
        ctx5.fillRect(0, 0, art5.width, art5.height);

        // Draw the Clock Circle (Outer Ring) with a grey border
        ctx5.beginPath();
        ctx5.arc(100, 100, 90, 0, Math.PI * 2);
        ctx5.fillStyle = 'white';
        ctx5.fill();
        ctx5.lineWidth = 4;
        ctx5.strokeStyle = '#921A40'; // Grey outline
        ctx5.stroke();
        ctx5.closePath();

        // Draw Clock Numbers in Grey
        ctx5.font = '18px Arial';
        ctx5.fillStyle = '#FFC96F'; // Red Out 
        ctx5.textAlign = 'center';
        ctx5.textBaseline = 'middle';
        for (let i = 1; i <= 12; i++) {
        const angle = Math.PI / 6 * (i - 3); // Angle for each number
        const x = 100 + Math.cos(angle) * 70;
        const y = 100 + Math.sin(angle) * 70;
        ctx5.fillText(i, x, y);
        }

        // Get current time
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Draw Clock Hands in Grey Tones
        // Hour Hand
        const hourAngle = Math.PI / 6 * ((hours % 12) + minutes / 60 - 3); // Example hour
        ctx5.beginPath();
        ctx5.moveTo(100, 100);
        ctx5.lineTo(100 + Math.cos(hourAngle) * 40, 100 + Math.sin(hourAngle) * 40);
        ctx5.lineWidth = 8;
        ctx5.strokeStyle = '#921A40'; // Red
        ctx5.stroke();
        ctx5.closePath();

        // Minute Hand
        const minuteAngle = Math.PI / 30 * (minutes + seconds / 60 - 15); // Example minute
        ctx5.beginPath();
        ctx5.moveTo(100, 100);
        ctx5.lineTo(100 + Math.cos(minuteAngle) * 60, 100 + Math.sin(minuteAngle) * 60);
        ctx5.lineWidth = 6;
        ctx5.strokeStyle = '#921A40'; // Red
        ctx5.stroke();
        ctx5.closePath();

        // Second Hand
        const secondAngle = Math.PI / 30 * (seconds - 15); // Example second
        ctx5.beginPath();
        ctx5.moveTo(100, 100);
        ctx5.lineTo(100 + Math.cos(secondAngle) * 70, 100 + Math.sin(secondAngle) * 70);
        ctx5.lineWidth = 2;
        ctx5.strokeStyle = '#D9ABAB'; // Red
        ctx5.stroke();
        ctx5.closePath();
    }

    // Call drawClock function every second (1000ms)
    setInterval(drawClock, 1000);

    // Initial call to draw the clock
    drawClock();

// Notebook
const art6 = document.getElementById('art6');
    const ctx6 = art6.getContext('2d');

    // Draw the notebook cover (Rectangle shape)
    function drawNotebookCover() {
      ctx6.fillStyle = colors['art6']; // Dark brown color for the cover
      ctx6.fillRect(0, 0, art6.width, art6.height); // Drawing the cover
    }

    // Draw the label section of the notebook cover
    function drawLabel() {
      ctx6.fillStyle = '#FFF'; // White background for the label
      ctx6.fillRect(20, 30, 160, 50); // Position and size of the label box

      ctx6.font = '20px Arial'; // Label text style
      ctx6.fillStyle = '#333'; // Dark text color
      ctx6.fillText('Notebook', 40, 60); // Text position inside the label box
    }

    // Draw some lines on the notebook cover for decoration
    function drawNotebookLines() {
      ctx6.strokeStyle = '#FFF'; // White lines
      ctx6.lineWidth = 2;

      // Draw vertical lines on the left side for decoration
      for (let i = 10; i < art6.height; i += 30) {
        ctx6.beginPath();
        ctx6.moveTo(10, i);
        ctx6.lineTo(10, i + 20);
        ctx6.stroke();
        ctx6.closePath();
      }
    }

    // Combine all the parts to draw the notebook
    function drawNotebook() {
      drawNotebookCover();  // Drawing the cover
      drawLabel();          // Drawing the label
      drawNotebookLines();  // Adding decorative lines
    }

    // Call the function to draw the notebook
    drawNotebook();

// Moon Canvas Object
const art7 = document.getElementById('art7');
const ctx7 = art7.getContext('2d');

    // Draw the full moon
    function drawMoon() {
        // Background
        ctx7.fillStyle = colors['art7']; // Dark brown color for the cover
        ctx7.fillRect(0, 0, art6.width, art6.height); // Drawing the cover

        // Moon Circle
        ctx7.beginPath();
        ctx7.arc(100, 100, 70, 0, Math.PI * 2); // Full moon circle
        ctx7.fillStyle = '#F0F8FF'; // Light color to represent the moon
        ctx7.fill();
        ctx7.closePath();

        // Draw craters
        drawOrganizedCraters();
    }

    // Function to draw organized craters (not random)
    function drawOrganizedCraters() {
        const craters = [
        { x: 60, y: 50, radius: 6 },
        { x: 140, y: 50, radius: 5 },
        { x: 80, y: 80, radius: 7 },
        { x: 120, y: 80, radius: 5 },
        { x: 60, y: 120, radius: 4 },
        { x: 140, y: 120, radius: 6 },
        { x: 100, y: 150, radius: 5 },
        { x: 80, y: 160, radius: 4 },
        { x: 120, y: 160, radius: 4 },
        { x: 100, y: 100, radius: 4 }, // A central crater
        ];

        ctx7.fillStyle = '#B0C4DE'; // Slightly darker color for craters

        // Loop through each crater and draw it at the specified positions
        craters.forEach(crater => {
        ctx7.beginPath();
        ctx7.arc(crater.x, crater.y, crater.radius, 0, Math.PI * 2); // Draw each crater
        ctx7.fill();
        ctx7.closePath();
        });
    }

    // Call the function to draw the moon with organized craters
    drawMoon();

    
// The Canvas Object Sun
const art8 = document.getElementById('art8');
const ctx8 = art8.getContext('2d');

// Draw the sun's core (circle)
function drawSunCore() {
    ctx8.fillStyle = colors['art8']; // Dark brown color for the cover
    ctx8.fillRect(0, 0, art6.width, art6.height); // Drawing the cover

    ctx8.beginPath();
    ctx8.arc(100, 100, 40, 0, Math.PI * 2); // Sun core - circle
    ctx8.fillStyle = '#FFD700'; // Bright yellow
    ctx8.fill();
    ctx8.closePath();
}

// Draw the sun's rays (lines)
function drawSunRays() {
    const rayLength = 60;
    const rayCount = 12; // Number of rays
    ctx8.strokeStyle = '#FFD700'; // Same yellow for the rays
    ctx8.lineWidth = 4;

    for (let i = 0; i < rayCount; i++) {
    const angle = (i * Math.PI * 2) / rayCount; // Calculate angle for each ray
    const xStart = 100 + Math.cos(angle) * 40;
    const yStart = 100 + Math.sin(angle) * 40;
    const xEnd = 100 + Math.cos(angle) * (40 + rayLength);
    const yEnd = 100 + Math.sin(angle) * (40 + rayLength);

    ctx8.beginPath();
    ctx8.moveTo(xStart, yStart);
    ctx8.lineTo(xEnd, yEnd);
    ctx8.stroke();
    ctx8.closePath();
    }
}

// Draw the sun by combining the core and the rays
function drawSun() {
    drawSunCore();
    drawSunRays();
}

// Call the function to draw the sun
drawSun();
