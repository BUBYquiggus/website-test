const edit = document.getElementById("edit");
const body = document.getElementById("body");
const hackerText = document.getElementById("hacker-text");
const mainhackertext = document.getElementById("main-hacker-text");
edit.innerText = "[!] ALERT: TRACE PROGRAM DETECTED // INITIALIZING PROXY HOPPING...";
setTimeout(() => {
    edit.innerText = "TUNNELING THROUGH: -> -> ";
}, 2000)
setTimeout(() => {
    edit.innerText = "BYPASSING FIREWALL... [DONE]";
}, 4000)
setTimeout(() => {
    edit.innerText = "ACCESS GRANTED: /usr/sbin/restricted/vault_access.sh";
}, 6000)
setTimeout(() => {
    edit.innerText = "";
}, 8000)
edit.addEventListener('input', (event) => {
    edit.classList.add('glitch-active');
    setTimeout(() => edit.classList.remove('glitch-active'), 150);
    if (edit.innerText.includes("g.load")) {
        window.location.href = "https://www.google.com";
    } else if (edit.innerText.includes("yt.load")) {
        window.location.href = "https://youtube.com";
    } else if (edit.innerText.includes("sys.clear")) {
        edit.innerText = "";
    } else if (edit.innerText.includes("sys.red")) {
        edit.style.color = "red";
        edit.innerText = "";
    } else if (edit.innerText.includes("sys.green")) {
        edit.style.color = "rgb(0, 255, 0)";
        edit.innerText = "";
    } else if (edit.innerText.includes("git.load")) {
        window.location.href = "https://github.com";
    } else if (edit.innerText.includes("sys.bgred")) {
        body.style.backgroundColor = "red";
        edit.innerText = "";
    } else if (edit.innerText.includes("sys.bggreen")) {
        body.style.backgroundColor = "rgb(0, 255, 0)";
        edit.innerText = "";
    } else if (edit.innerText.includes("sys.bgblack")) {
        body.style.backgroundColor = "rgb(0, 0, 0)";
        edit.innerText = "";
    } else if(edit.innerText.includes("sys.reb")) {
        edit.innerText = "SYSTEM REBOOTING...";
        setTimeout(() => {
            location.reload();
        }, 1500)
    } else if (edit.innerText.includes("sys.black")) {
        edit.style.color = "black";
        edit.innerText = "";
    } else if (edit.innerText.includes("sys.time")) {
        edit.innerText = new Date().toLocaleTimeString();
    } else if (edit.innerText.includes("sys.ftime")) {
        function updateClock() {
            const time = new Date();
            edit.innerText = time.toLocaleTimeString();
        }
        setInterval(updateClock, 1000);
        updateClock();
    } else if (edit.innerText.includes("sys.big")) {
        edit.style.fontSize = "3rem";
        edit.innerText = "";
    } else if (edit.innerText.includes("sys.small")) {
        edit.style.fontSize = "1rem";
        edit.innerText = "";
    } else if (edit.innerText.includes("sys.def")) {
        edit.style.fontSize = "1.5rem";
        edit.innerText = "";
    } else if (edit.innerText.includes("sys.hack")) {
        setTimeout(() => {
            edit.innerText = "ACCESSING DATABASE...";
        }, 0);
        setTimeout(() => {
            edit.innerText = "BYPASSING FIREWALL...";
        }, 1000);
        setTimeout(() => {
            edit.innerText = "ENCRYPTING FILES...";
        }, 2000);
        setTimeout(() => {
            edit.innerText = "UPLOADING VIRUS...";
        }, 3000);
        setTimeout(() => {
            edit.innerText = "SYSTEM COMPROMISED.";
        }, 4000);
        setTimeout(() => {
            location.reload();
        }, 5000);
    } else if(edit.innerText.includes("emr = (OFF)")) {             
        edit.innerText = "EMERGRENCY SHUT OFF INITIATED...";
        setTimeout(() => {
            edit.innerText = "WILL SHUT OFF IN 5";
        },1000)
        setTimeout(() => {
            edit.innerText = "WILL SHUT OFF IN 4";
        },2000)
        setTimeout(() => {
            edit.innerText = "WILL SHUT OFF IN 3";
        },3000)
        setTimeout(() => {
            edit.innerText = "WILL SHUT OFF IN 2";
        },4000)
        setTimeout(() => {
            edit.innerText = "WILL SHUT OFF IN 1";
        },5000)
        setTimeout(() => {
            window.location.href = "about:blank";
        },6000)
    } else if (edit.innerText.includes("pps.load")) {
        window.location.href = "https://myapps.classlink.com/home";
    } else if (edit.innerText.includes("docs.load")) {
        window.location.href = "https://docs.google.com";
    } else if (edit.innerText.includes("canvas.load")) {
        window.location.href = "https://https://portlandpublic.instructure.com/";
    } else if (edit.innerText.includes("vscode.load")) {
        window.location.href = "https://vscode.dev"; 
    } else if (edit.innerText.includes("sys.date")) {
        edit.innerText = new Date().toLocaleDateString();
    } else if (edit.innerText.includes("sys.whoami")) {
        edit.innerText = "USER: ADMIN_GUEST\nLEVEL: ROOT\nSTATUS: ONLINE";
    } else if (edit.innerText.includes("sys.rand")) {
        edit.innerText = "RANDOM NUM: " + Math.floor(Math.random() * 100);
    } else if (edit.innerText.includes("sys.breachtst")) {
        body.style.backgroundColor = "red";
        edit.innerText = "CRITICAL WARNING: BREACH DETECTED!"
        setTimeout(() => {
            body.style.backgroundColor = "black"
            edit.innerText = "System normalized. Standing by..."
        }, 3000)
    } else if (edit.innerText.includes("drive.load")) {
        window.location.href = "https://drive.google.com";
    } else if (edit.innerText.includes("mail.load")) {
        window.location.href = "https://mail.google.com";
    } else if (edit.innerText.includes("sf.load")) {
        window.location.href = "https://open.spotify.com";
    } else if (edit.innerText.includes("sys.inv")) {
        const currentInvert = document.body.style.filter;
        if (currentInvert === "invert(1)") {
            document.body.style.filter = "invert(0)";
            edit.innerText = "Default palate restored";
        } else {
            document.body.style.filter = "invert(1)";
            edit.innerText = "interface optics Inverted ";
        }
    } else if (edit.innerText.includes("emr = (MSCAN)")) {
        edit.innerText = "MALWARE SCAN INITIATED";
        setTimeout(() => {
            edit.innerText = "SCANNING...";
        }, 2000)
        setTimeout(() => {
            edit.innerText = "SCAN COMPLEATE";
        }, 4000)
        setTimeout(() => {
            edit.innerText = "MALWARE DETECTED";
        }, 6000)
        setTimeout(() => {
            edit.innerText = "122 VIRUSES DETECTED";
        }, 8000)
        setTimeout(() => {
            edit.innerText = "THROW YOUR COMPUTER IN A LAKE";
        }, 10000)
    } else if (edit.innerText.includes("slope.load")) {
        window.location.href = "https://20lflannigan.github.io/slope/";
    } else if (edit.innerText.includes("cr.load")) {
        window.location.href = "https://20lflannigan.github.io/rossy-croad/";
    } else if (edit.innerText.includes("slope.load")) {
        window.location.href = "https://20lflannigan.github.io/slope/";
    } else if (edit.innerText.includes("slope.load")) {
        window.location.href = "https://20lflannigan.github.io/slope/";
    } else if (edit.innerText.includes("slope.load")) {
        window.location.href = "https://20lflannigan.github.io/slope/";
    } else if (edit.innerText.includes("slope.load")) {
        window.location.href = "https://20lflannigan.github.io/slope/";
    } else if (edit.innerText.includes("slope.load")) {
        window.location.href = "https://20lflannigan.github.io/slope/";
    } else if (edit.innerText.includes("msm.load")) {
        window.location.href = "https://classlink.midschoolmath.com/student_stories";
    } else if (edit.innerText.includes("dwn.virus")) {
        const content = "heheehe";
        const blob = new Blob([content], {type: "text/plain"});
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "virus.txt";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        edit.innerText = "VIRUS DOWNLOADED UR COOKED";
    }
});
window.onload = () => edit.focus();