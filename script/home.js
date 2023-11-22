const id = (ID) => {
  return document.getElementById(ID)
}

const selector = (selector) => {
  document.querySelector(selector)
}

const selectorAll = (selectorAll) => {
  document.querySelectorAll(selectorAll)
}

const sideBarToggle = id("sideBarToggle")
const sideBar = id("side_bar")
const content = id("main_content_body")
const darkModeToggle = id("darkModeToggle")
const sideBarNames = selectorAll("#sideBarName")
const sideBarIcons = selectorAll("#sideBarIcon")
const sideBarList = selectorAll("sideBarList")
const logoDivName = id("logoDivName")
const header = selector("header")
const demo = id("demo")


const modeEnabled = "dark"


// Footer Icons
const logos = id("logos")

darkModeToggle.addEventListener("click", () => {
  if (darkModeToggle.getAttribute("name") == "sunny-outline") {
    darkModeToggle.setAttribute("name", "moon-outline")
    document.body.style.background = "var(--bodyBrightBG)"
    sideBar.style.background = "var(--bluePrimary)"
    logoDivName.style.color = "var(--black)"
    sideBarIcons.forEach(icon => {
      icon.style.color = "var(--black)"
    });
    sideBarNames.forEach(element => {
      element.style.color = "var(--black)"
    });
  }
  else {
    darkModeToggle.setAttribute("name", "sunny-outline")
    document.body.style.background = "var(--darkMain)"
    sideBar.style.background = "var(--darkMain)"
    logoDivName.style.color = "var(--darkModeText)"
    sideBarIcons.forEach(icon => {
      icon.style.color = "var(--white)"
    });
    sideBarNames.forEach(element => {
      element.style.color = "var(--white)"
    });
  }
})


sideBarToggle.addEventListener("click", () => {
  if (sideBar.style.width != "5%") {
    sideBar.style.width = "5%"
    content.style.width = "95%"
    logoDivName.style.color = "transparent"
    sideBarToggle.style.transform = "rotateZ(180deg)"
  }
  else {
    sideBar.style.width = "20%"
    content.style.width = "80%"
    logoDivName.style.color = "var(--darkModeText)"
    sideBarToggle.style.transform = "rotateZ(0deg)"
  }
})


logos.querySelectorAll("li").forEach(element => {
  element.addEventListener("mouseover", () => {
    const color = element.querySelector("ion-icon").getAttribute("--clr");
    element.querySelector("ion-icon").style.color = color;
  });

  element.addEventListener('mouseleave', () => {
    element.querySelector("ion-icon").style.color = "#bebebe"
  })
});