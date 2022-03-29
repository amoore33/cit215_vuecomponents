const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

let app = new Vue({
    el: "#app",
    data: {
        name: "",
        email: "",
        message: "",
        submitted: false,
        codenames: [
            {
                name:"Protagonist",
                codename:"Joker",
                clicked: false
            },
            {
                name:"Anne",
                codename:"Panther",
                clicked: false
            },
            {
                name:"Ryuji",
                codename:"Skull",
                clicked: false
            }
        ]
    },
    watch: {
        name: function() {
            if (this.name.length >= 2) {
                this.message = "";
                if (emailRegex.test(this.email)) this.submitted = true;
            } else {
                this.message = "Name must be at least 2 characters long";
                this.submitted = false;
            }
        },
        email: function() {
            if (emailRegex.test(this.email)) {
                this.message = "";
                if (this.name.length >= 2) this.submitted = true;
            } else {
                this.message = "Please enter a valid e-mail address";
                this.submitted = false;
            }
        }
    }
});