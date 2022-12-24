var button = document.querySelector('button');

button.addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if(permission === 'granted'){
            const notification = new Notification("Disclaimer" , {
                body : "I'm not responsible for the emotional impact it will have on you.",
                data : {
                    h : "Hello",
                },
                icon : "icon.png",
                tag  : "Welcome"
            });

            notification.addEventListener("error", e => {
                console.log("Error");
            });
        }
    })
});

let notification;
document.addEventListener("visibilitychange" , () => {
    if(document.visibilityState == 'hidden'){
        notification = new Notification("Comeback" , {
            body : "Please Comback to the Page !",
            tag  : "Comeback"
        });
    }
    else{
        notification.close();
    }
});