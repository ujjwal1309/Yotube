class user {
  constructor() {}

  validateUsername(username) {
    return username.includes("@") ? false : true;
  }

  validatePassword(password) {
    return password.length < 8 ? false : true;
  }

  async signUp(n, e, u, p, m, d) {
    let isValidated = this.validateUsername(u) && this.validatePassword(p);

    if (isValidated) {
      this.name = n;
      this.email = e;
      this.username = u;
      this.password = p;
      this.mobile = m;
      this.description = d;

      const register_API ="https://masai-api-mocker.herokuapp.com/auth/register";

      const reponse = await fetch(register_API, {
        method: "POST",
        body: JSON.stringify(this),
        header: {
          "Content-Type": "application/json",
        },
      });

      const data = await reponse.json();
      console.log(data);
    }
  }

  async login(u,p){
    const login_data={
        username: u,
        password: p,
    }

    const login_api=`https://masai-api-mocker.herokuapp.com/auth/login`;

    const response=await fetch(login_api, {
        method: 'POST',
        body: JSON.stringify    
    })
  }
}

let User=new user()

const Register = () => {
  let form = document.getElementById("form");

  const name = form.name.value;
  const email = form.email.value;
  const username = form.username.value;
  const password = form.password.value;
  const mobile = form.mobile.value;
  const desc = form.description.value;

  User.signUp(name,email,username,password,mobile,desc);
  console.log('user:',User);
};
