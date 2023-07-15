export default class ScrollService {
  static scrollHandler = new ScrollService();

  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let HomeScreen = document.getElementById("Home");
    if (!HomeScreen) return;
    HomeScreen.scrollIntoView({ behavior: "smooth" });
  };
}
