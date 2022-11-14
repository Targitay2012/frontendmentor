const notifications = document.querySelectorAll(".notifications__item");
const notificationsNum = document.querySelector(".notifications__num");
const notificationsButton = document.querySelector(".notifications__btn");

const clearNotifications = () => {
  notifications.forEach((notification) => {
    notification.classList.remove("notifications--unread");
  });

  notificationsNum.innerHTML = "";
}

notificationsButton.addEventListener("click", clearNotifications);