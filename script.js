let myFormEl = document.getElementById("formContainer");
let titleInputEl = document.getElementById("titleInput");
let contentInputEl = document.getElementById("contentInput");
let imageInputEl = document.getElementById("imageInput");
let videoInputEl = document.getElementById("videoInput");
let previewBlogContainerEl = document.getElementById("previewBlogContainer");

let formData = {
  title: "",
  content: "",
  image: "",
  video: ""
};


titleInputEl.addEventListener("change", function(event){
  formData.title = event.target.value;
});

contentInputEl.addEventListener("change", function(event){
  formData.content = event.target.value;
});

imageInputEl.addEventListener("change", function(event){
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(event) {
    formData.image = event.target.result;
  };

  reader.readAsDataURL(file);
});

videoInputEl.addEventListener("change", function(event){
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(event) {
    formData.video = event.target.result;
  };

  reader.readAsDataURL(file);
});


createBlogBtn = (formData) => {
  let previewTitleElement = document.createElement("p");
  previewTitleElement.textContent = `Title : ${formData.title}`;
  previewTitleElement.classList.add("preview-text");
  previewBlogContainerEl.appendChild(previewTitleElement);

  let previewContentElement = document.createElement("p");
  previewContentElement.textContent = `Content : ${formData.content}`;
  previewContentElement.classList.add("preview-text");
  previewBlogContainerEl.appendChild(previewContentElement);


  let previewImageElement = document.createElement("img");
  previewImageElement.src = formData.image;
  previewImageElement.alt = "preview";
  previewImageElement.classList.add("preview-image-video-size")
  previewBlogContainerEl.appendChild(previewImageElement);


  let previewVideoElement = document.createElement("video");
  previewVideoElement.src = formData.video;
  previewVideoElement.classList.add("preview-image-video-size");
  previewVideoElement.controls = true;
  previewBlogContainerEl.appendChild(previewVideoElement);

};


myFormEl.addEventListener("submit", function(event){
  event.preventDefault();
  createBlogBtn(formData);
});