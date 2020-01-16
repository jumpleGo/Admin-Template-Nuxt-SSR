<template>
  <div class="contacts">
    <h3 class="contacts--heading">
      Contacts
    </h3>
    <p class="contacts--item">
      Bridgewater Associates is located in Westport, Connecticut — about one
      hour from New York City.
    </p>
    <h3 class="contacts--heading">
      adress
    </h3>
    <p class="contacts--item">
      One Glendinning Place
    </p>
    <p class="contacts--item">
      Westport, CT 06880
    </p>

    <h3 class="contacts--heading">
      phone
    </h3>
    <p class="contacts--item">
      +1 (203) 226 3030
    </p>

    <h3 class="contacts--heading">
      email
    </h3>
    <p class="contacts--item">
      bridgewater@invest.com
    </p>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}

h3 {
  margin: 0;
}

.contacts {
  display: flex;
  flex-direction: column;

  &--heading {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;

    &:not(:first-child) {
      margin-top: 50px;
    }
  }

  &--item {
    margin-top: 8px;
  }
}
</style>

<script>
export default {
  head: {
    title: "Contacts",
    meta: [
      {
        name: "description",
        content: "Contact us"
      }
    ]
  }
}
</script>
