<template>
  <transition name="alert">
    <div v-show="alert.isVisible" class="alert" :class="alertClass">
      <button class="alert__btn" @click="removeAlert()">
        <span class="alert__text">{{ alert.message }}</span>
      </button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'TheAlert',

    computed: {
      alert() {
        return this.$store.getters.getAlert
      },

      alertClass() {
        const alertStatus = this.alert.status

        if (alertStatus) {
          return 'alert--' + alertStatus.toLowerCase()
        }
      }
    },

    methods: {
      removeAlert() {
        this.$store.dispatch('updateAlert', {
          isVisible: false,
          status: this.alert.status,
          message: this.alert.message
        })
      }
    },

    beforeUpdate() {
      if (this.alert.isVisible) {
        setTimeout(() => {
          if (this.alert.isVisible) {
            this.removeAlert()
          }
        }, 4000)
      }
    }
  }
</script>

<style lang="scss">
  .alert {
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    max-width: calc(100vw - 30px);
  }

  .alert--success {
    .alert__btn {
      background: #17A589;
    }
  }

  .alert__btn {
    cursor: pointer;

    box-sizing: border-box;
    padding: 15px 20px;
    border: 0;
    border-radius: 4px;
    background: #CD6155;

    color: #fff;
    font-size: 1em;

    outline: none;
  }

  .alert-enter-active,
  .alert-leave-active {
    transition: all .3s;
  }

  .alert-enter-to,
  .alert-leave {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .alert-enter,
  .alert-leave-to {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
</style>
