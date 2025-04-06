const features = document.querySelectorAll(".feature");

features.forEach((feature) => {
  const featureIcon = feature.querySelector(".feature-icon");
  const featureP = feature.querySelector(".feature-p");

  const svgIcons = featureIcon ? featureIcon.querySelectorAll("svg") : [];

  feature.addEventListener("mouseover", () => {
    feature.style.backgroundColor = "#732626";
    feature.style.color = "#ebeef2";
    feature.style.borderRadius = "10px";

    if (featureIcon) {
      featureIcon.style.backgroundColor = "#ebeef2";
    }

    if (featureP) {
      featureP.style.color = "#ebeef2";
    }

    svgIcons.forEach((svg) => {
      svg.style.fill = "#732626";
    });
  });

  feature.addEventListener("mouseout", () => {
    feature.style.backgroundColor = "transparent";
    feature.style.color = "#0d0d0d";
    feature.style.borderRadius = "0px";

    if (featureIcon) {
      featureIcon.style.backgroundColor = "#732626";
    }

    if (featureP) {
      featureP.style.color = "#0d0d0d";
    }

    svgIcons.forEach((svg) => {
      svg.style.fill = "#ebeef2";
    });
  });
});
