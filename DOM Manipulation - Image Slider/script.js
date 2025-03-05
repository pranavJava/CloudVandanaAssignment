
const imagesArray = [
    'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F814423752%2Fphoto%2Feye-of-model-with-colorful-art-make-up-close-up.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3Dl15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE%3D&sp=1741170831T6452bf051b33706929126736171410f666da8a562aaa233c75807b41a8f7a62e',
    'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1575936123452-b67c3203c357%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%253D&sp=1741170831T192c9c5697e9383eb14b7dd75e71c50faa6b770b80518b4dc396bb5ac831800d',
    'https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg',
    'https://www.leadfuze.com/wp-content/uploads/2020/12/Salesforce-Customer-360.jpg',
    'https://revenuesandprofits.com/wp-content/uploads/2022/11/What-Services-Does-an-IT-Company-Typically-Provide.jpg'
];

let currentIndex = 0;


const sliderImage = document.getElementById('sliderImage');
function updateImage() {
    sliderImage.src = imagesArray[currentIndex];
}

function previousClick() {
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    updateImage();
}

function nextClick() {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    updateImage();
}


updateImage();