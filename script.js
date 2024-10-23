// Parallax effect for the background
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;
  
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });
  

const testimonials = [
    {
        quote: "Jennifer captured our wedding perfectly! Highly recommend her.",
        author: "Sarah J."
    },
    {
        author: "David Smith",
        quote: "Jennifer is a talented professional who knows how to capture moments beautifully. She worked with us for a family portrait session, and the results were breathtaking. Her friendly demeanor made the experience enjoyable, and the final images were vibrant and full of life. We'll be back for more!"
    },
    {
        author: "Sarah Brown",
        quote: "From the moment we reached out to Jennifer, she was attentive and responsive. During the shoot, she created a relaxed atmosphere, allowing us to be ourselves. The final photographs are a testament to her skill and passion for her craft. I highly recommend Jennifer for any photography needs!"
    },
    {
        quote: "Amazing experience! The photos are stunning.",
        author: "Mark L."
    },
    {
        quote: "Jennifer is incredibly talented. She knows how to make you feel comfortable.",
        author: "Emily R."
    },
    {
        quote: "A true professional! The video she made for us was breathtaking.",
        author: "David K."
    },
    {
        author: "Emma Thompson",
        quote: "Jennifer is an exceptional photographer! She captured the essence of our wedding day perfectly. Her attention to detail and ability to make us feel at ease resulted in stunning images that we'll cherish forever. Jennifer's creativity shines through in every shot, and we can't recommend her enough!"
    },
    {
        author: "Mark Johnson",
        quote: "Working with Jennifer was an incredible experience. As a videographer, she brought our project to life in ways we never imagined. Her keen eye for storytelling and unique perspective transformed our ideas into a captivating visual narrative. We were thrilled with the final product!"
    },
    {
        author: "Lisa Carter",
        quote: "I had the pleasure of collaborating with Jennifer on a creative project, and it was one of the best decisions I've made. Her artistic vision and ability to see beauty in the ordinary is truly inspiring. The photos she took exceeded my expectations and brought our concept to life in the most beautiful way."
    },
    {
        author: "Emily Johnson",
        quote: "Jennifer's ability to capture the essence of a moment is unparalleled. She made our wedding day truly unforgettable with her creativity and professionalism. Every photo tells a story, and we can't thank her enough for the beautiful memories that will last a lifetime."
    },
    {
        author: "Michael Smith",
        quote: "Working with Jennifer was an absolute delight. She brought a level of enthusiasm and passion that made our engagement shoot fun and relaxed. The final images were breathtaking and perfectly encapsulated our love. Highly recommend her to anyone looking for a talented photographer!"
    },
    {
        author: "Samantha Lee",
        quote: "Jennifer's eye for detail is simply amazing. She captured my family in such a natural and beautiful way during our portrait session. The whole experience was enjoyable, and the final images are now proudly displayed in our home. We couldn't be happier with her work!"
    },
    {
        author: "David Brown",
        quote: "I hired Jennifer for a corporate event, and she exceeded all expectations. Her professionalism and ability to blend in with the crowd resulted in stunning candid shots that truly captured the spirit of the day. I look forward to working with her again in the future!"
    },
    {
        author: "Sophia Martinez",
        quote: "Jennifer is an extraordinary photographer who is incredibly talented at what she does. She knows how to make her subjects feel comfortable and relaxed, which results in stunning images. I’m so grateful to have had her capture my graduation day, and I will cherish those photos forever."
    },
    {
        author: "Lucas Wilson",
        quote: "From start to finish, working with Jennifer was a fantastic experience. She listened to our vision and went above and beyond to make it a reality. The photos from our family reunion are absolutely perfect and filled with laughter and joy. Can't wait for our next shoot!"
    },
    {
        author: "Ava Thompson",
        quote: "Jennifer has a magical way of capturing the beauty of everyday moments. Our family session was filled with genuine laughter and love, and the photos reflect that perfectly. We’ve received so many compliments from friends and family. Truly a talented photographer!"
    }
];

let currentIndex = 0;

function showTestimonial() {
    const testimonialText = document.getElementById('testimonial-text');
    const testimonialAuthor = document.getElementById('testimonial-author');

    testimonialText.textContent = testimonials[currentIndex].quote;
    testimonialAuthor.textContent = `— ${testimonials[currentIndex].author}`;

    currentIndex = (currentIndex + 1) % testimonials.length; // Cycle through testimonials
}

// Initial display
showTestimonial();

// Change testimonial every 5 seconds
setInterval(showTestimonial, 15000);


document.addEventListener("DOMContentLoaded", function() {
    const galleryGrid = document.getElementById('gallery-grid');

    // Function to load images dynamically
    function loadImages() {
        // Define the path for images
        // const imagePath = './images/gallery/';
        const images = [
            { src: './images/gallery/biuldings-streetview.jpg', alt: 'Packed Street View' },
            { src: './images/gallery/countryside-sky.jpg', alt: 'Outback Countryside' },
            { src: './images/gallery/Desert Sepia Wallpaper Cabin.jpg', alt: 'Rustic Cabin' },
            { src: './images/gallery/lone-tree-fence.jpg', alt: 'Dawn Ranch Life' },
            { src: './images/gallery/reflective-lakeside.jpg', alt: 'Still Waters' },
            { src: './images/gallery/rosmery-camera-retro.jpg', alt: 'Camera Still Piece' },
            { src: './images/gallery/sepia-bridge.jpg', alt: 'Smoll Bridge' },
            { src: './images/gallery/sepia-lake-cabin.jpg', alt: 'Cabin on the Lake' },
            { src: './images/gallery/lakeside-boats.jpg', alt: 'Boat Ride' },
            { src: './images/gallery/biuldings-streetview.jpg', alt: 'Packed Street View' },
            { src: './images/gallery/countryside-sky.jpg', alt: 'Outback Countryside' },
            { src: './images/gallery/Desert Sepia Wallpaper Cabin.jpg', alt: 'Rustic Cabin' },
            { src: './images/gallery/lone-tree-fence.jpg', alt: 'Dawn Ranch Life' },
            { src: './images/gallery/reflective-lakeside.jpg', alt: 'Still Waters' },
            { src: './images/gallery/rosmery-camera-retro.jpg', alt: 'Camera Still Piece' },
            { src: './images/gallery/sepia-bridge.jpg', alt: 'Smoll Bridge' },
            { src: './images/gallery/sepia-lake-cabin.jpg', alt: 'Cabin on the Lake' },
            { src: './images/gallery/lakeside-boats.jpg', alt: 'Boat Ride' }, { src: './images/gallery/biuldings-streetview.jpg', alt: 'Packed Street View' },
            { src: './images/gallery/countryside-sky.jpg', alt: 'Outback Countryside' },
            { src: './images/gallery/Desert Sepia Wallpaper Cabin.jpg', alt: 'Rustic Cabin' },
            { src: './images/gallery/lone-tree-fence.jpg', alt: 'Dawn Ranch Life' },
            { src: './images/gallery/reflective-lakeside.jpg', alt: 'Still Waters' },
            { src: './images/gallery/rosmery-camera-retro.jpg', alt: 'Camera Still Piece' },
            { src: './images/gallery/sepia-bridge.jpg', alt: 'Smoll Bridge' },
            { src: './images/gallery/sepia-lake-cabin.jpg', alt: 'Cabin on the Lake' },
            { src: './images/gallery/lakeside-boats.jpg', alt: 'Boat Ride' }, { src: './images/gallery/biuldings-streetview.jpg', alt: 'Packed Street View' },
            { src: './images/gallery/countryside-sky.jpg', alt: 'Outback Countryside' },
            { src: './images/gallery/Desert Sepia Wallpaper Cabin.jpg', alt: 'Rustic Cabin' },
            { src: './images/gallery/lone-tree-fence.jpg', alt: 'Dawn Ranch Life' },
            { src: './images/gallery/reflective-lakeside.jpg', alt: 'Still Waters' },
            { src: './images/gallery/rosmery-camera-retro.jpg', alt: 'Camera Still Piece' },
            { src: './images/gallery/sepia-bridge.jpg', alt: 'Smoll Bridge' },
            { src: './images/gallery/sepia-lake-cabin.jpg', alt: 'Cabin on the Lake' },
            { src: './images/gallery/lakeside-boats.jpg', alt: 'Boat Ride' },
           
        ];

        // Create image elements
        images.forEach(el => {
            const imgElement = document.createElement('img');
            imgElement.src = `${el.src}`;
            imgElement.alt = el.alt || 'Image description not available'; // Default alt text if none found
            imgElement.className = 'gallery-item'; // Add a class for styling
            imgElement.setAttribute('role', 'listitem'); // Set role for accessibility
            galleryGrid.appendChild(imgElement);
        });
           
    }

    loadImages(); // Call the function to load images

    /// Lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxDescription = document.getElementById('lightbox-description'); // New element for description
    const closeLightbox = document.querySelector('.close');

    galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = 'block';
        lightboxImage.src = this.src;
        lightboxDescription.textContent = this.alt; // Set description to the alt text
    });
    });

    closeLightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
});
});


// Contact Form functionality
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseText = document.getElementById('form-response');
  
       // Basic Validation
       if (!name || !email || !message) {
        responseText.textContent = "Please fill out all fields.";
        return;
    }

    // Create the mailto link
    const mailtoLink = `mailto:jenifferC@example.com?subject=New Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Open the user's default email client with the mailto link
    window.location.href = mailtoLink;

    // Optional: Show a "Thank you" message
    responseText.textContent = `Thank you, ${name}! Your email client should now open to send the message.`;
});

// Scroll fade-in effect for About section
window.addEventListener('scroll', function() {
    const aboutContainer = document.querySelector('.about-container');
    const aboutPosition = aboutContainer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (aboutPosition < screenPosition) {
      aboutContainer.classList.add('visible');
    }
  });