<template lang="pug">
  .login
    .login__content
      form.login__form(@submit.prevent="login")
        .login__form-title Авторизация
        .login__row
          .login__text Логин
          input(type="text" name="login" v-model="user.name" required).login__input
          img(src="../../../images/icons/login-user.png").form__icon
        .login__row
          .login__text Пароль
          input(type="password" name="password" v-model="user.password" required).login__input
          img(src="../../../images/icons/key.png").form__icon
        .login__btn
          input(type="submit", value="Отправить").login__button
        button.login__close
</template>

<script>
import $axios from "@/requests";
export default {
  data() {
    return {
      user: {
        name: "admin",
        password: "admin"
      }
    }
  },
  methods: {
    async login() {
      const response = await $axios.post('/login', this.user);
      console.log(response);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../../../images/bg/Mountain_Baloon.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #2d3c4e;
}

.login__content {
  width: 100%;
  height: 100%;
  background: rgba(45, 60, 78, 0.9);
}

.login__form {
  width: 560px;
  height: 520px;
  padding: 50px 60px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include tablets {
      width: 80%;
      height: 80%;
  }
  @include phones {
      width: 100%;
      height: 100%;
  }
}

.login__form-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 25px;
}

.login__row {
  width: 100%;
  position: relative;
  margin-bottom: 30px;
}

.login__text {
  opacity: 0.3;
  color: #414c63;
  font-weight: 700;
  padding-left: 40px;
}

.form__icon {
  width: 30px;
  height: 30px;
  fill: #c8cbd3;
  position: absolute;
  top: 40px;
  left: 0;
}

.login__input {
  width: 100%;
  border: 0 none;
  border-bottom: 1px solid #000;
  background-color: rgba(0,0,0,0);
  padding: 20px 0;
  padding-left: 40px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

.login__button {
  width: 347px;
  height: 80px;
  border-radius: 40px 5px;
  border: none;
  background-color: #ffffff;
  background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: .5s;
  outline: none;

  @include phones {
    width: 300px;
  }

  &:hover {
    border-radius: 5px 40px;
    transition: .5s;
  }
}

.login__close {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #fff;
  background-image: url('../../../images/icons/cancel-login.png');
  background-repeat: no-repeat;
  background-position: center;
  right: 20px;
  top: 20px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

</style>