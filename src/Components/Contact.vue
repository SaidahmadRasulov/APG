<template>
    <section class="contact__section">
      <div class="container">
        <div class="message" v-if="state">
          <h1 class="text">Habar Muvofakkiyatli yetkazildi !</h1>
        </div>
        <div class="contact__content">
            <div class="contact__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d595.3478250459797!2d72.35350429893381!3d40.75967740735677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcedb995519967%3A0x2d25711be5e11f15!2sUZTURK!5e0!3m2!1suz!2s!4v1686306205808!5m2!1suz!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          <div class="contact__form">
            <form ref="formRef" action="#">
              <input
                type="text"
                @input="onInput"
                name="name"
                placeholder="Ism va Familiya"
                autocomplete="off"
              />
              <input
                type="email"
                placeholder="Gmail kiriting"
                name="email"
                autocomplete="off"
              />
              <input
                type="number"
                name="phone"
                placeholder="+998"
                autocomplete="off"
              />
              <textarea name="message" placeholder="Izoh koldiring"></textarea>
              <div class="form__button">
                <button type="submit" @click="handleSubmit">Yozilish</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import emailjs from 'emailjs-com';
  emailjs.init = '8ERjlfNfMnEj4fFTP';
  
  export default {
    data() {
      return {
        state: false
      }
    },
    methods: {
      onInput() {
        console.log(this.$refs.formRef);
      },
      handleSubmit(event) {
        event.preventDefault(); // Prevent form submission
  
        let newUser = {
          id: Date.now(),
          name: this.$refs.formRef[0].value,
          email: this.$refs.formRef[1].value,
          phone: this.$refs.formRef[2].value,
          message: this.$refs.formRef[3].value
        };
        if (
          newUser.name !== '' &&
          newUser.email !== '' &&
          newUser.phone !== '' &&
          newUser.message !== ''
        ) {
          emailjs
            .send('service_1vuj3wc', 'template_hskqdeosss', newUser, '8ERjlfNfMnEj4fFTP')
            .then(response => {
              console.log(response.status);
            })
            .catch(err => console.log(err));
          this.state = true;
          setTimeout(() => {
            this.state = false
            this.$refs.formRef[0].value = '';
            this.$refs.formRef[1].value = '';
            this.$refs.formRef[2].value = '';
            this.$refs.formRef[3].value = '';
          }, 1000);
        } else {
          alert('Hammasini toldiring.')
        }
      }
    }
  }
  </script>
  
  
<style lang="scss">
.contact__section {
    padding: 4rem 0;

    .text {
        color: green;
    }

    .contact__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        iframe {
            width: 32.552083333333336vw;
            height: 56.022408963585434vh;
            border: none;
            box-shadow: 0 0 5px 0 #787676;
            border-radius: 5px;
        }
    }

    .contact__form {
        width: 40%;

        form {
            display: flex;
            gap: 2rem;
            flex-direction: column;

            input {
                padding: 1.5rem 1rem;
                font-size: 1.2rem;
                outline: none;
                border: none;
                border-bottom: 1px solid #787676;
            }

            textarea {
                padding: 1rem;
                width: 100%;
                height: 150px;
                outline: none;
            }

            .form__button {
                text-align: end;

                button {
                    width: 20%;
                    height: 32px;
                    background-color: green;
                    box-shadow: 0 0 5px 0 green;
                    border: 1px solid green;
                    color: white;
                    border-radius: 5px;
                    font-size: 1.2rem;
                    cursor: pointer;

                    &:hover {
                        background-color: transparent;
                        color: green;
                    }
                }
            }
        }
    }
}</style>